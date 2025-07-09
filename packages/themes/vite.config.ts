import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: 'tmp/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
  },
  resolve: {
    alias: {
      '!/*': path.resolve(__dirname, '../*'),
      '@/*': path.resolve(__dirname, './*'),
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    dts({
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('tmp', ''),
      }),
      compilerOptions: {
        baseUrl: './tmp/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      outDir: 'dist/types',
    }),
  ],
});
