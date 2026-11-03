import { defineConfig, esmExternalRequirePlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { svgrOptions } from './svgr.config.mjs';

import pkg from './package.json';
import path from 'path';

// Match subpaths too (e.g. react/jsx-runtime, date-fns/locale)
const toExternal = (names: string[]) => names.map((name) => new RegExp(`^${name}(/.*)?$`));
const peerDependencies = toExternal(Object.keys(pkg.peerDependencies));
const dependencies = toExternal(Object.keys(pkg.dependencies));

// Two builds (see the build script):
// - es (default mode): one file per module with dependencies left external, so consumers' bundlers
//   can tree-shake unused components and dedupe dependencies (e.g. Radix) with the app's own copies.
// - cjs (--mode cjs): a single file with dependencies bundled, as before. It's what Jest and other
//   CommonJS consumers load, and some dependencies can't be required by older resolvers such as
//   Jest 27 in Create React App, which ignore package.json "exports".
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
          ? {
              banner: `'use client';`,
              entryFileNames: 'index.js',
              // Keep the lazily loaded country flags in the single file rather than one chunk per flag
              codeSplitting: false,
            }
          : {
              banner: `'use client';`,
              preserveModules: true,
              preserveModulesRoot: 'src',
              entryFileNames: '[name].mjs',
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
          ...svgrOptions,
          exportType: 'default',
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
