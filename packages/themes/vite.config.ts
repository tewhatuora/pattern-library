import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import path from 'path';

export default defineConfig({
  build: {
    // Vite 7+ defaults to 'baseline-widely-available' (Safari 16.4+). Keep the previous
    // 'modules' targets so consumer browser support doesn't change with the tooling upgrade.
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    lib: {
      entry: 'tmp/index.ts',
      fileName: 'index',
      // Keep the CSS at dist/style.css (the ./styles export); Vite 6+ names it after fileName by default
      cssFileName: 'style',
      formats: ['cjs', 'es'],
    },
  },
  resolve: {
    alias: {
      '!/*': path.resolve(import.meta.dirname, '../*'),
      '@/*': path.resolve(import.meta.dirname, './*'),
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    dts({
      root: path.resolve(import.meta.dirname),
      beforeWriteFile: (filePath, content) => ({
        content,
        // Generated sources live in tmp/; drop that segment so types land in dist/types/ directly.
        // Only replace the path segment: a bare 'tmp' would also match e.g. /private/tmp/ in the checkout path.
        filePath: filePath.replace(`${path.sep}types${path.sep}tmp${path.sep}`, `${path.sep}types${path.sep}`),
      }),
      compilerOptions: {
        baseUrl: './tmp/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      outDirs: 'dist/types',
    }),
  ],
});
