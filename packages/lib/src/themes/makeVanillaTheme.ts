import { Tokens } from './tokenType';

export default (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, displayName, ...rest } = tokens;

  const borderRadiusNames = Object.keys(rest.border.radius) as (keyof typeof rest.border.radius)[];

  const borderRadiusAll = borderRadiusNames.reduce((all, name) => {
    const { topLeft, topRight, bottomRight, bottomLeft } = rest.border.radius[name];

    return {
      ...all,
      [name]: `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`,
    };
  }, {});

  type CornerName = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  const borderRadius = borderRadiusNames.reduce((acc, name) => {
    const corners = rest.border.radius[name];
    const cornerNames = Object.keys(corners) as CornerName[];

    cornerNames.forEach((corner) => {
      acc[corner] = {
        ...acc[corner],
        [name]: corners[corner],
      };
    });

    return acc;
  }, {} as Record<CornerName, Record<keyof typeof borderRadiusNames, string>>);

  return {
    space: rest.space,
    borderRadius: borderRadius,
    borderRadiusAll: borderRadiusAll,
    borderWidth: rest.border.width,
    fontFamily: rest.typography.fontFamily,
    textSize: rest.typography.text,
    textWeight: rest.typography.fontWeight,
    headingLevel: rest.typography.heading.level,
    headingWeight: {
      weak: rest.typography.fontWeight.regular,
      regular: rest.typography.fontWeight.bold,
    },
    color: rest.color,
    shadow: rest.shadows,
    transition: rest.transitions,
  } as const;
};
