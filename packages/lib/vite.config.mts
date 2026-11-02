import { defineConfig, esmExternalRequirePlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';
import path from 'path';

// Match subpaths too (e.g. react/jsx-runtime, date-fns/locale)
const toExternal = (names: string[]) => names.map((name) => new RegExp(`^${name}(/.*)?$`));
const peerDependencies = toExternal(Object.keys(pkg.peerDependencies));
// lodash is bundled: it has no package.json "exports", so a subpath import like 'lodash/debounce'
// from an .mjs file fails in webpack 5, which requires fully specified paths in strict ESM
const dependencies = toExternal(Object.keys(pkg.dependencies).filter((name) => name !== 'lodash'));

// Two builds (see the build script):
// - es (default mode): one file per module with dependencies left external, so consumers' bundlers
//   can tree-shake unused components and dedupe dependencies (e.g. Radix) with the app's own copies.
// - cjs (--mode cjs): a single file with dependencies bundled, as before. It's what Jest and other
//   CommonJS consumers load, and several dependencies (e.g. rooks, usehooks-ts) can't be required
//   by older resolvers such as Jest 27 in Create React App, which ignore package.json "exports".
export default defineConfig(({ mode }) => {
  const isCjs = mode === 'cjs';

  return {
    build: {
      // Vite 7+ defaults to 'baseline-widely-available' (Safari 16.4+). Keep the previous
      // 'modules' targets so consumer browser support doesn't change with the tooling upgrade.
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      // The cjs build runs second and adds to the es build's output. Its style.css also replaces the
      // es build's: preserveModules changes the order rules are emitted in, which affects the cascade.
      emptyOutDir: !isCjs,
      lib: {
        entry: 'src/index.ts',
        // Keep the CSS at dist/style.css (the ./styles export); Vite 6+ names it after fileName by default
        cssFileName: 'style',
        formats: [isCjs ? 'cjs' : 'es'],
      },
      rollupOptions: {
        // Exclude the package's own generated CSS bundle so it isn't resolved during the build.
        // Peer dependencies are made external by esmExternalRequirePlugin below.
        external: [`${pkg.name}/styles`, ...(isCjs ? [] : dependencies)],
        output: isCjs
          ? { banner: `'use client';`, entryFileNames: 'index.js' }
          : {
              banner: `'use client';`,
              preserveModules: true,
              preserveModulesRoot: 'src',
              // Bundled dependencies (lodash) would otherwise be written to dist/node_modules/,
              // which npm always leaves out of the published package
              entryFileNames: ({ name }) => `${name.replace(/^node_modules\//, 'vendor/')}.mjs`,
            },
      },
    },
    resolve: {
      alias: {
        '!': path.resolve(import.meta.dirname, '../'),
        '@': path.resolve(import.meta.dirname, './'),
      },
    },
    plugins: [
      // Bundled CommonJS dependencies (e.g. focus-trap-react) call require('react'); rewrite those
      // to imports, otherwise the ES build throws in consumers that have no `require`
      esmExternalRequirePlugin({ external: peerDependencies }),
      svgr({
        include: '**/*.svg*',
        svgrOptions: {
          exportType: 'default',
          jsxRuntime: 'classic',
          dimensions: false,
          replaceAttrValues: {
            '#404040': 'currentColor',
          },
        },
      }),
      vanillaExtractPlugin({
        identifiers: 'short',
      }),
      react({
        jsxRuntime: 'automatic',
      }),
      !isCjs &&
        dts({
          entryRoot: path.resolve(import.meta.dirname, 'src'),
          include: ['src'],
          exclude: ['src/**/*.docs.mdx', 'src/**/*.snippets.tsx', 'src/**/*.test.ts*', 'src/**/*.stories.tsx'],
          beforeWriteFile: (filePath, content) => ({
            content,
            // Remove the absolute path up to, and including, the local src folder
            filePath: filePath.replace(path.resolve(import.meta.dirname, 'src'), ''),
          }),
          tsconfigPath: path.resolve(import.meta.dirname, 'tsconfig.build.json'),
          outDirs: 'dist/types',
        }),
    ],
  };
});
