const { simplifyTokens } = require('../utils');
const color = require('./tokens/color');
const shadows = require('./tokens/shadows');
const typography = require('./tokens/typography');
const spacing = require('./tokens/spacing');
const transitions = require('./tokens/transitions');
const borders = require('./tokens/borders');

const parseTokens = ({ dictionary, options }) => {
  const {
    color: colorTokens,
    sizes: spaceTokens,
    effect: effectTokens,
    typography: typographyTokens,
    motion: motionTokens,
    ...otherTokens
  } = simplifyTokens(dictionary.tokens);

  return {
    name: options.name,
    displayName: options.displayName,
    typography: typography(typographyTokens),
    space: spacing(spaceTokens),
    transitions: transitions(motionTokens),
    border: borders(otherTokens),
    shadows: shadows(effectTokens),
    color: color(colorTokens),
    // ...otherSizeTokens,
    // ...otherTokens,
  };
};

module.exports = parseTokens;
