import { Tokens } from './tokenType';

export default (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;

  const resolvedTokens = {
    space: rest.space,
    borderRadius: rest.border.radius,
    borderWidth: rest.border.width,
    fontFamily: rest.typography.fontFamily,
    textSize: rest.typography.text,
    textWeight: rest.typography.fontWeight,
    headingLevel: rest.typography.heading.level,
    headingWeight: {
      weak: rest.typography.fontWeight[rest.typography.heading.weight.weak],
      regular: rest.typography.fontWeight[rest.typography.heading.weight.regular],
    },
    color: rest.color,
    shadow: rest.shadows,
  } as const;

  return resolvedTokens;
};
