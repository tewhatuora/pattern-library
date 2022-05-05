const { makeSize } = require('../../utils');

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
 * Format typography tokens
 * @param {Object} typographyTokens typography tokens
 * @return {Object} Formatted typography tokens
 */
const typography = (typographyTokens) => {
  return Object.keys(typographyTokens).reduce((tokens, bp) => {
    for (const size of Object.keys(typographyTokens[bp])) {
      for (const weight of Object.keys(typographyTokens[bp][size])) {
        tokens.fontFamily = typographyTokens[bp][size][weight].fontFamily;
        tokens.fontWeight[weight] = typographyTokens[bp][size][weight].fontWeight;

        let formattedSize = makeSize(size);
        const newBp = bp === 'desktop' ? 'tablet' : bp;

        // Large sizes are heading sizes, e.g
        if (formattedSize.includes('large')) {
          const level = formattedSize.match(/x/g) || [];
          formattedSize = 4 - level.length;

          tokens.heading = {
            weight: {
              ...tokens.heading.weight,
              [weight]: typographyTokens[bp][size][weight].fontWeight,
            },
            level: {
              ...tokens.heading.level,
              [formattedSize]: {
                ...tokens.heading.level[formattedSize],
                [newBp]: {
                  fontSize: `${typographyTokens[bp][size][weight].fontSize}px`,
                  lineHeight: `${typographyTokens[bp][size][weight].lineHeight}px`,
                },
              },
            },
          };
        } else {
          tokens.text[formattedSize] = {
            ...tokens.text[formattedSize],
            [newBp]: {
              fontSize: typographyTokens[bp][size][weight].fontSize,
              lineHeight: typographyTokens[bp][size][weight].lineHeight,
            },
          };
        }
      }
    }

    return tokens;
  }, typographyTokensShape);
};

module.exports = typography;
