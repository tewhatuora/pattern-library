import makeSize from '../utils/makeSize.js';
import sizeToRem from '../utils/sizeToRem.js';

const typographyTokensShape = {
  fontFamily: '',
  fontWeight: {},
  heading: {
    weight: {},
    level: {},
  },
  text: {},
};

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
 * Format typography tokens
 * @param {Object} typographyTokens typography tokens
 * @return {Object} Formatted typography tokens
 */
const typography = (typographyTokens) => {
  return Object.keys(typographyTokens).reduce((tokens, bp) => {
    for (const size of Object.keys(typographyTokens[bp])) {
      for (const weight of Object.keys(typographyTokens[bp][size])) {
        tokens.fontFamily = typographyTokens[bp][size][weight].fontFamily;
        tokens.fontWeight[weight] = typographyTokens[bp][size][weight].fontWeight.toString();

        let formattedSize = makeSize(size);
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
  }, typographyTokensShape);
};

export default typography;
