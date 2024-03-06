import { Tokens } from './tokenType';

export default (tokens: Tokens) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rest = tokens;

  type BorderRadiusName = keyof typeof rest.border.radius;
  type CornerName = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  type BorderRadiusAll = Record<BorderRadiusName, string>;
  type BorderRadiusCorners = Record<CornerName, Record<BorderRadiusName, string>>;

  const borderRadiusNames = Object.keys(rest.border.radius) as BorderRadiusName[];

  /**
   * Reduce borderRadius token names
   * to an object where the key is the
   * token name and the value is a CSS
   * string of border-radius values
   * for each corner of the element.
   * e.g {
   *   button: '0.8rem 0.8rem 0.8rem 0.8rem'
   * }
   */
  const borderRadiusAll = borderRadiusNames.reduce((borderRadius: BorderRadiusAll, name: BorderRadiusName) => {
    const { topLeft, topRight, bottomRight, bottomLeft } = rest.border.radius[name];

    borderRadius[name] = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;

    return borderRadius;
  }, {} as BorderRadiusAll);

  /**
   * Reduce borderRadius token names
   * to an object where the key is a
   * border-radius corner name e.g `topLeft`
   * and the value is an object where the
   * keys are the token names e.g `button`
   * and the value is token value.
   * e.g {
   *   topLeft: {
   *     button: '0.8rem'
   *   }
   * }
   */
  const borderRadius = borderRadiusNames.reduce((borderRadius: BorderRadiusCorners, name: BorderRadiusName) => {
    const corners = rest.border.radius[name];
    const cornerNames = Object.keys(corners) as CornerName[];

    cornerNames.forEach((corner: CornerName) => {
      borderRadius[corner] = {
        ...borderRadius[corner], // Spread previous values
        [name]: corners[corner],
      };
    });

    return borderRadius;
  }, {} as BorderRadiusCorners);

  return {
    space: rest.space,
    borderRadius: borderRadius,
    borderRadiusAll: borderRadiusAll,
    borderWidth: rest.border.width,
    fontFamily: rest.typography.fontFamily,
    textSize: rest.typography.text,
    textWeight: rest.typography.fontWeight,
    textDecoration: rest.typography.textDecoration,
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
