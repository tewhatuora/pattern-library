import StyleDictionary from 'style-dictionary';

import fs from 'fs';
import { readFile } from 'fs/promises';
import './formats/web.js';
import { INPUT_DIR, OUTPUT_DIR } from './constants.js';
import generateExports from './exports.js';
import clean from './utils/clean.js';

// Note: config.json deliberately omits 'size/rem'. In style-dictionary 3 it never matched these
// tokens; from v4 it converts every unitless 'dimension' token (raw px numbers) to rem.
const config = JSON.parse(await readFile(new URL('../config.json', import.meta.url)));
const platforms = Object.keys(config.platforms);

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(theme, platform) {
  const name = theme.replace(/([A-Z])/g, ' $1');
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  const platformsConfig = Object.keys(config.platforms).reduce(
    (platforms, current) => ({
      ...platforms,
      [current]: {
        ...config.platforms[current],
        buildPath: `${OUTPUT_DIR}/themes/${theme}/${platform}/`,
        options: {
          ...config.platforms[current].options,
          name: theme,
          displayName,
        },
      },
    }),
    {},
  );

  return {
    source: [
      `${INPUT_DIR}/themes/${theme}/*.json`,
      `${INPUT_DIR}/globals/**/*.json`,
      `${INPUT_DIR}/platforms/${platform}/*.json`,
    ],
    platforms: platformsConfig,
  };
}

const generate = async () => {
  console.log('Build started...');

  console.log('Clean output directory...');

  clean(OUTPUT_DIR);

  // PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

  const themes = fs
    .readdirSync(`./${INPUT_DIR}/themes`, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  for (const theme of themes) {
    for (const platform of platforms) {
      console.log('\n==============================================');
      console.log(`\nProcessing: [${platform}] [${theme}]`);

      const formatsUrl = new URL(`./formats/${platform}.js`, import.meta.url);

      if (fs.existsSync(formatsUrl)) {
        // Let errors propagate: config.json relies on transforms registered here
        const { default: registerFormats } = await import(formatsUrl);

        registerFormats?.(StyleDictionary);
      } else {
        console.log('No custom formatters found for platform: ', platform);
      }

      console.log('\nEnd processing');

      const styleDictionary = new StyleDictionary(getStyleDictionaryConfig(theme, platform));

      await styleDictionary.buildPlatform(platform);

      generateExports(platform);
    }
  }

  console.log('\n==============================================');
  console.log('\nBuild completed!');
};

await generate();
