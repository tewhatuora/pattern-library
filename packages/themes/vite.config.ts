import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  build: {
    lib: {
      entry: 'tmp/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    tsconfigPaths(),
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
      outputDir: 'dist/types',
    }),
  ],
});
