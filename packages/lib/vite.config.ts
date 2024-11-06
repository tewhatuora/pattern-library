import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
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
  plugins: [
    splitVendorChunkPlugin(),
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    tsconfigPaths(),
    react({
      jsxRuntime: 'automatic',
    }),
    svgr({
      svgrOptions: {
        jsxRuntime: 'automatic',
        dimensions: false,
      },
    }),
    dts({
      exclude: ['src/**/*.docs.mdx', 'src/**/*.snippets.tsx', 'src/**/*.test.ts*', 'src/**/*.stories.tsx'],
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      outDir: 'dist/types',
    }),
  ],
});
