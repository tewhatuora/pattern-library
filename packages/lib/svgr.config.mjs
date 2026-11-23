// SVGR options shared by the library build and Storybook, so icons render the same in both

export const svgrOptions = {
  jsxRuntime: 'classic',
  dimensions: false,
  // Icons are drawn in #404040 in Figma; currentColor lets them take the text colour
  replaceAttrValues: {
    '#404040': 'currentColor',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgoConfig: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Icons are sized by CSS, so the viewBox is what scales them
            removeViewBox: false,
            // Keep ids as exported: minified ids (a, b, ...) would clash between icons on the same page
            cleanupIds: false,
            // Keep #404040 intact, so replaceAttrValues can match it
            convertColors: false,
            // Titles and descriptions give logos their accessible names
            removeTitle: false,
            removeDesc: false,
          },
        },
      },
    ],
  },
};
