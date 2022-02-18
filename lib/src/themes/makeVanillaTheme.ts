import { Tokens } from './tokenType';

export default (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;

  const resolvedTokens = {
    space: rest.space,
    borderRadius: rest.border.radius,
    borderWidth: rest.border.width,
    fontFamily: rest.typography.fontFamily,
    fontWeight: rest.typography.fontWeight,
    color: rest.color,
    shadow: rest.shadows,
  } as const;

  return resolvedTokens;
};
