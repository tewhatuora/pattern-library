const JsonToTS = require('json-to-ts');
const StyleDictionaryPackage = require('style-dictionary');

const fs = require('fs');

const vanillaExtract = require('./formats/vanillaExtract');
const parseTokens = require('./formats/parseTokens');
const prettierFormat = require('./formats/prettierFormat');

StyleDictionaryPackage.registerFormat({
  name: 'typescript/accurate-module-declarations',
  formatter: function ({ dictionary, file, options }) {
    const values = parseTokens({ dictionary, file, options });
    return prettierFormat(`
      export default RootObject;
      
      ${JsonToTS(values).join('\n')}
      
    `);
  },
});

StyleDictionaryPackage.registerFormat({
  name: 'typescript/vanilla-extract-theme',
  formatter: function ({ file }) {
    return prettierFormat(`
        ${StyleDictionaryPackage.formatHelpers.fileHeader({ file })}
        import { createTheme } from '@vanilla-extract/css';
        
        import makeVanillaStyleDictionaryTheme from '../../../lib/src/themes/makeVanillaStyleDictionaryTheme';
        import { contract } from '../../../lib/src/themes/themeContract.css';
        import { tokens } from './tokens';
        
        export default createTheme(contract, makeVanillaStyleDictionaryTheme(tokens));
    `);
  },
});

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED
function getStyleDictionaryConfig(theme, platform) {
  const name = theme.replace(/([A-Z])/g, ' $1');
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    source: [`tokens/themes/${theme}/*.json`, 'tokens/globals/**/*.json', `tokens/platforms/${platform}/*.json`],
    format: {
      vanillaExtract,
    },
    platforms: {
      web: {
        transformGroup: 'js',
        buildPath: `styles/web/${theme}/`,
        options: {
          name,
          displayName,
        },
        files: [
          {
            format: 'vanillaExtract',
            destination: 'tokens.ts',
          },
          {
            format: 'typescript/accurate-module-declarations',
            destination: 'tokenTypes.ts',
          },
          {
            format: 'typescript/vanilla-extract-theme',
            destination: `${theme}Theme.css.ts`,
          },
        ],
      },
    },
  };
}

console.log('build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT THEMES AND PLATFORMS

const themes = fs
  .readdirSync('./tokens/themes', { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

themes.forEach((theme) => {
  ['web'].forEach((platform) => {
    console.log('\n==============================================');
    console.log(`\nProcessing: [${platform}] [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme, platform));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');
  });
});

console.log('\n==============================================');
console.log('\nbuild completed!');
