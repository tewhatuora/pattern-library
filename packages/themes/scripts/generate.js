import StyleDictionary from 'style-dictionary';

import fs from 'fs';
import { readFile } from 'fs/promises';
import './formats/web.js';
import { INPUT_DIR, OUTPUT_DIR } from './constants.js';
import generateExports from './exports.js';
import clean from './utils/clean.js';

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
        buildPath: `${OUTPUT_DIR}/themes/${theme}/${platform}/`,
        options: {
          name: theme,
          displayName,
        },
        ...config.platforms[current],
      },
    }),
    {},
  );

  return {
    source: [
      `${INPUT_DIR}/themes/${theme}/*.json`,
      '${INPUT_DIR}/globals/**/*.json',
      `${INPUT_DIR}/platforms/${platform}/*.json`,
    ],
    platforms: platformsConfig,
  };
}

const generate = () => {
  console.log('Build started...');

  console.log('Clean output directory...');

  clean(OUTPUT_DIR);

  // PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

  const themes = fs
    .readdirSync(`./${INPUT_DIR}/themes`, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  themes.forEach((theme) => {
    platforms.forEach(async (platform) => {
      try {
        console.log('\n==============================================');
        console.log(`\nProcessing: [${platform}] [${theme}]`);

        const { default: registerFormats } = await import(`./formats/${platform}.js`);

        if (registerFormats) {
          registerFormats(StyleDictionary);
        }

        console.log('\nEnd processing');
      } catch (err) {
        console.log('No custom formatters found for platform: ', platform);
      }

      const styleDictionary = StyleDictionary.extend(getStyleDictionaryConfig(theme, platform));

      styleDictionary.buildPlatform(platform);

      generateExports(platform);
    });
  });

  console.log('\n==============================================');
  console.log('\nBuild completed!');
};

generate();
