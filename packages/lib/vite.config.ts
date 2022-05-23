import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

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
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    tsconfigPaths(),
    react(),
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
      outputDir: 'dist/types',
    }),
  ],
});
