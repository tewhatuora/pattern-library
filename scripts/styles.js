const fs = require('fs');
const StyleDictionaryPackage = require('style-dictionary');
const jsSimpleObject = require('./formats/jsSimpleObject');
const vanillaExtract = require('./formats/vanillaExtract');

const { formatHelpers } = StyleDictionaryPackage;

const tsVanillaExtract = ({dictionary, file}) => {
  let output = `import { createTheme } from '@vanilla-extract/css';\n\n`;

  output += formatHelpers.fileHeader({file}) +
  `export const tokens = ${JSON.stringify(dictionary.tokens, null, 2)};\n\n`;

  output += `export default createTheme(tokens);`;

  return output;
};

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

function getStyleDictionaryConfig(theme, platform) {
  return {
    source: [
      `tokens/themes/${theme}/**/*.json`,
      'tokens/globals/**/*.json',
      `tokens/platforms/${platform}/*.json`
    ],
    format: {
      jsSimpleObject,
      vanillaExtract
    },
    platforms: {
      web: {
        transformGroup: 'js',
        buildPath: `styles/web/${theme}/`,
        files: [
          {
            format: 'vanillaExtract',
            destination: 'theme.css.ts'
          },
        ]
      }
    }
  };
}

console.log('styles started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

const themes = fs.readdirSync('./tokens/themes', { withFileTypes: true })
  .filter(item => item.isDirectory())
  .map(item => item.name);

themes.forEach(theme => {
  ['web'].forEach(platform => {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');
  });
})

console.log('\n==============================================');
console.log('\nstyles completed!');