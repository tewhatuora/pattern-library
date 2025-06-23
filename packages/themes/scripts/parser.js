import simplifyTokens from './utils/simplifyTokens.js';
import color from './tokens/color.js';
import shadows from './tokens/shadows.js';
import typography from './tokens/typography.js';
import spacing from './tokens/spacing.js';
import transitions from './tokens/transitions.js';
import borders from './tokens/borders.js';
import gradients from './tokens/gradients.js';

const parser = ({ dictionary, options }) => {
  const tokens = simplifyTokens(dictionary.tokens);

  const {
    color: colorTokens,
    sizes: spaceTokens,
    effect: effectTokens,
    typography: typographyTokens,
    motion: motionTokens,
    gradient: gradientTokens,
    ...otherTokens
  } = tokens;

  return {
    name: options.name,
    displayName: options.displayName,
    typography: typography(typographyTokens),
    space: spacing(spaceTokens),
    transitions: transitions(motionTokens),
    border: borders(otherTokens),
    shadows: shadows(effectTokens),
    color: color(colorTokens),
    gradients: gradients(gradientTokens),
  };
};

export default parser;
