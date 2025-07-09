import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.peerDependencies),
        // Exclude the package's own generated CSS bundle so Rollup doesn't try to resolve it during the build
        `${pkg.name}/styles`,
      ],
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
      '!': path.resolve(__dirname, '../'),
      '@': path.resolve(__dirname, './'),
    },
  },
  plugins: [
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
    splitVendorChunkPlugin(),
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    react({
      jsxRuntime: 'automatic',
    }),
    dts({
      exclude: ['src/**/*.docs.mdx', 'src/**/*.snippets.tsx', 'src/**/*.test.ts*', 'src/**/*.stories.tsx'],
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        // baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
      outDir: 'dist/types',
    }),
  ],
});
