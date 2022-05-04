// import Tokens from '../../../styles/web/neutralv2/tokenTypes';
import { Tokens } from './tokenType';

export default (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;

  const resolvedTokens = {
    space: rest.space,
    borderRadius: rest.border.radius,
    borderWidth: rest.border.width,
    fontFamily: null, // rest.typography.fontFamily,
    textSize: rest.typography.text,
    textWeight: rest.typography.fontWeight,
    headingLevel: null, // rest.typography.heading.level,
    headingWeight: {
      weak: null, // rest.typography.fontWeight[rest.typography.heading.weight.weak],
      regular: null, // rest.typography.fontWeight[rest.typography.heading.weight.regular],
    },
    color: rest.color,
    shadow: rest.shadows,
    grid: rest.grid,
    transition: rest.transitions,
  } as const;

  return resolvedTokens;
};
