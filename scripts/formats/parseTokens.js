const { simplifyTokens, trim } = require('../utils');

const parseTokens = ({ dictionary, options }) => {
  const {
    color: colorTokens,
    spacing: spaceTokens,
    effect: effectTokens,
    typography: typographyTokens,
    grid: gridTokens,
    ...otherTokens
  } = simplifyTokens(dictionary.tokens);

  const color = Object.keys(colorTokens).reduce((acc, key) => {
    for (const subkey of Object.keys(colorTokens[key])) {
      acc[`${key}${subkey}`] = colorTokens[key][subkey];
    }
    return acc;
  }, {});

  const shadows = Object.keys(effectTokens).reduce((acc, key) => {
    const rule = effectTokens[key];

    acc[key] = trim(
      `${rule.shadowType === 'innerShadow' ? 'inset' : ''} ${rule.offsetX}px ${rule.offsetY}px ${rule.radius}px ${
        rule.spread
      }px ${rule.color}`,
    );

    return acc;
  }, {});





  const sizeMap = {
    xs: 'xsmall',
    s: 'small',
    m: 'standard',
    l: 'large',
    xl: 'xlarge',
  };

  const makeSize = (size) => {
    if (size in sizeMap) {
      return sizeMap[size];
    }

    const regex = /^(\d?)x([s|l])$/g;
    const extras = regex.exec(size);

    if (extras.length) {
      return `${Array(Number(extras[1])).fill('x').join('')}${sizeMap[extras[2]]}`;
    }
  };

  /*
  Convert typography tokens
   */
  const typography = Object.keys(typographyTokens).reduce(
    (tokens, bp) => {
      for (const size of Object.keys(typographyTokens[bp])) {
        for (const weight of Object.keys(typographyTokens[bp][size])) {
          tokens.fontWeight[weight] = typographyTokens[bp][size][weight].fontWeight;
          const formattedSize = makeSize(size);

          tokens.text[formattedSize] = {
            [bp]: {
              fontSize: typographyTokens[bp][size][weight].fontSize,
              lineHeight: typographyTokens[bp][size][weight].lineHeight,
            },
          };
        }
      }

      return tokens;
    },
    {
      fontFamily: '',
      fontWeight: {},
      heading: {},
      text: {},
    },
  );


  console.log(typographyTokens, typography);

  return {
    name: options.name,
    displayName: options.displayName,
    typography,
    // space: spaceTokens,
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
    },
    transitions: {
      fast: 'transform .125s ease, opacity .125s ease',
    },
    border: {
      radius: {
        standard: '8px',
        large: '12px',
        xlarge: '16px',
      },
      width: {
        standard: '1px',
      },
    },
    shadows,
    grid: gridTokens,
    color,
    // ...otherSizeTokens,
    // ...otherTokens,
  };
};

module.exports = parseTokens;
