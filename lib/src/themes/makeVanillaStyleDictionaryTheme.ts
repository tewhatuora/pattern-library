import RootObject from '../../../styles/web/neutralv2/tokenTypes';

export default (tokens: RootObject) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;

  const resolvedTokens = {
    space: rest.space,
    // borderRadius: rest.border.radius,
    // borderWidth: rest.border.width,
    // fontFamily: rest.typography.fontFamily,
    // textSize: rest.typography.text,
    // textWeight: rest.typography.fontWeight,
    // headingLevel: rest.typography.heading.level,
    // headingWeight: {
    //   weak: rest.typography.fontWeight[rest.typography.heading.weight.weak],
    //   regular: rest.typography.fontWeight[rest.typography.heading.weight.regular],
    // },
    color: rest.color,
    shadow: rest.shadows,
    grid: rest.grid,
    transition: rest.transitions,
  } as const;

  return resolvedTokens;
};
