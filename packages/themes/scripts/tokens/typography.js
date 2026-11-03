import makeSize from '../utils/makeSize.js';
import sizeToRem from '../utils/sizeToRem.js';

// A function, so each theme starts from fresh objects rather than adding to the previous theme's
const typographyTokensShape = () => ({
  fontFamily: '',
  fontWeight: {},
  textDecoration: {},
  heading: {
    weight: {},
    level: {},
  },
  text: {},
});

/**
 * Return a font size and lineHeight
 * for a typography token
 * @param token
 * @return {{fontSize: string, lineHeight: string}}
 */
const fontSizeAndLineHeight = (token) => ({
  fontSize: sizeToRem(token.fontSize),
  lineHeight: sizeToRem(token.lineHeight),
});

/**
 * Make heading tokens for fontSize & lineHeight
 * for each breakpoint, by heading level
 * @param tokens New tokens
 * @param typographyTokens Token set
 * @param bp Breakpoint e.g. tablet|mobile
 * @param size Size e.g. 2xl
 * @param weight Font weight e.g. bold
 * @param level Heading level e.g. 1|2|3|4
 * @param newBp New breakpoint e.g. desktop|tablet
 * @return {{level, weight}}
 */
const makeHeadingTokens = ({ tokens, typographyTokens, bp, size, weight, level, newBp }) => ({
  weight: {
    ...tokens.heading.weight,
    [weight]: typographyTokens[bp][size][weight].fontWeight.toString(),
  },
  level: {
    ...tokens.heading.level,
    [level]: {
      ...tokens.heading.level[level],
      [newBp]: fontSizeAndLineHeight(typographyTokens[bp][size][weight]),
    },
  },
});
/**
 * The theme's font family: the one most typography tokens use. A theme has a single `fontFamily`, so warn when
 * tokens disagree, which is usually a token that wasn't updated in Figma.
 * @param typographyTokens Typography tokens
 * @param themeName Theme name, for the warning
 * @return {string} Font family
 */
const fontFamilyOf = (typographyTokens, themeName) => {
  const paths = {};

  for (const [bp, sizes] of Object.entries(typographyTokens)) {
    for (const [size, weights] of Object.entries(sizes)) {
      for (const [weight, token] of Object.entries(weights)) {
        (paths[token.fontFamily] ??= []).push(`${bp}/${size}/${weight}`);
      }
    }
  }

  const families = Object.keys(paths).sort((a, b) => paths[b].length - paths[a].length);
  const [main, ...others] = families;

  if (others.length) {
    const otherTokens = others.map((family) => `${family}: ${paths[family].join(', ')}`).join('; ');

    console.warn(
      `\nWarning: the ${themeName} theme's typography uses ${families.length} font families, but a theme has only one. ` +
        `Using ${main}, which most tokens use. The others are ${otherTokens}.`,
    );
  }

  return main;
};

/**
 * Format typography tokens
 * @param {Object} typographyTokens typography tokens
 * @param {string} themeName Theme name, for warnings
 * @return {Object} Formatted typography tokens
 */
const typography = (typographyTokens, themeName) => {
  const fontFamily = fontFamilyOf(typographyTokens, themeName);

  return Object.keys(typographyTokens).reduce((tokens, bp) => {
    for (const size of Object.keys(typographyTokens[bp])) {
      for (const weight of Object.keys(typographyTokens[bp][size])) {
        tokens.fontFamily = fontFamily;
        tokens.fontWeight[weight] = typographyTokens[bp][size][weight].fontWeight.toString();
        tokens.textDecoration[weight] = typographyTokens[bp][size][weight].textDecoration.toString();

        const formattedSize = makeSize(size);
        const newBp = bp === 'desktop' ? 'tablet' : bp;

        // Large sizes are heading sizes
        if (formattedSize.includes('xlarge')) {
          const headingLevel = formattedSize.match(/x/g) || [];
          const level = 4 - headingLevel.length;

          tokens.heading = makeHeadingTokens({
            tokens,
            typographyTokens,
            bp,
            size,
            weight,
            level,
            newBp,
          });
        } else {
          tokens.text[formattedSize] = {
            ...tokens.text[formattedSize],
            [newBp]: fontSizeAndLineHeight(typographyTokens[bp][size][weight]),
          };

          // Add `large` size to headings as well as text
          if (formattedSize === 'large') {
            tokens.heading = makeHeadingTokens({
              tokens,
              typographyTokens,
              bp,
              size,
              weight,
              level: '4',
              newBp,
            });
          }
        }
      }
    }

    return tokens;
  }, typographyTokensShape());
};

export default typography;
