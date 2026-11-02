import { defineConfig, esmExternalRequirePlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';
import path from 'path';

// Match subpaths too (e.g. react/jsx-runtime) so React is never bundled into the library
const peerDependencies = Object.keys(pkg.peerDependencies).map((name) => new RegExp(`^${name}(/.*)?$`));

export default defineConfig({
  build: {
    // Vite 7+ defaults to 'baseline-widely-available' (Safari 16.4+). Keep the previous
    // 'modules' targets so consumer browser support doesn't change with the tooling upgrade.
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      // Keep the CSS at dist/style.css (the ./styles export); Vite 6+ names it after fileName by default
      cssFileName: 'style',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // Exclude the package's own generated CSS bundle so it isn't resolved during the build.
      // Peer dependencies are made external by esmExternalRequirePlugin below.
      external: [`${pkg.name}/styles`],
      output: {
        banner: `'use client';`,

        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1]?.split('/')[0]?.toString();
          }
        },
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
});
