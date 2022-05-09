const formatTheme = (tokens) => {
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
      weak: rest.typography.fontWeight.regular,
      regular: rest.typography.fontWeight.bold,
    },
    color: rest.color,
    shadow: rest.shadows,
    transition: rest.transitions,
  };

  return resolvedTokens;
};

module.exports = formatTheme;
