import path from 'node:path';

import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

// Runs every story as a test in headless Chromium: a story fails if it throws while rendering or
// its play function fails. Accessibility (axe) results are reported without failing; see the
// a11y parameter in .storybook/preview.jsx.
export default defineConfig({
  // vanilla-extract compiles .css.ts files with a separate Vite instance built from this file rather
  // than Storybook's viteFinal, so it needs the lib's '@/src/...' path alias here too
  resolve: {
    tsconfigPaths: true,
  },
  // Only imported by compiled .css.ts files, so Vite finds them mid-run and reloads, which fails
  // the stories loading at the time. Pre-bundle them up front instead.
  optimizeDeps: {
    include: [
      '@vanilla-extract/recipes/createRuntimeFn',
      '@vanilla-extract/sprinkles/createRuntimeSprinkles',
      '@vanilla-extract/sprinkles/createUtils',
    ],
  },
  test: {
    reporters: ['default', './.storybook/a11y-reporter.mjs'],
    projects: [
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(import.meta.dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
