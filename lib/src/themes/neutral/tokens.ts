import { Tokens } from '../tokenType';

const tokens: Tokens = {
  name: 'neutral',
  displayName: 'Neutral',
  typography: {
    fontFamily: 'Fira Sans, system-ui, sans-serif',
    fontWeight: {
      black: '900',
      bold: '700',
      medium: '500',
      regular: '400',
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'bold',
      },
      level: {
        // 3xl
        1: {
          mobile: {
            fontSize: '2.5rem',
            lineHeight: '1.15',
          },
          tablet: {
            fontSize: '7.5rem',
            lineHeight: '1.15',
          },
        },
        // 2xl
        2: {
          mobile: {
            fontSize: '2rem',
            lineHeight: '1.2',
          },
          tablet: {
            fontSize: '2.5rem',
            lineHeight: '1.2',
          },
        },
        // xl
        3: {
          mobile: {
            fontSize: '1.5rem',
            lineHeight: '1.2',
          },
          tablet: {
            fontSize: '2rem',
            lineHeight: '1.2',
          },
        },
        // lg
        4: {
          mobile: {
            fontSize: '1.25rem',
            lineHeight: '1.3',
          },
          tablet: {
            fontSize: '1.5rem',
            lineHeight: '1.3',
          },
        },
      },
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: '0.875rem',
          lineHeight: '1.6',
        },
        tablet: {
          fontSize: '1rem',
          lineHeight: '1.6',
        },
      },
      small: {
        mobile: {
          fontSize: '0.875rem',
          lineHeight: '1.6',
        },
        tablet: {
          fontSize: '1.125rem',
          lineHeight: '1.6',
        },
      },
      standard: {
        mobile: {
          fontSize: '1rem',
          lineHeight: '1.6',
        },
        tablet: {
          fontSize: '1.25rem',
          lineHeight: '1.6',
        },
      },
      large: {
        mobile: {
          fontSize: '1.25rem',
          lineHeight: '1.3',
        },
        tablet: {
          fontSize: '1.5rem',
          lineHeight: '1',
        },
      },
    },
  },
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
  shadows: {
    small: '0px 4px 30px rgba(64, 64, 64, 0.1)',
    medium: '0px 4px 30px rgba(64, 64, 64, 0.1)',
    large: '0px 4px 30px rgba(64, 64, 64, 0.1)',
  },
  color: {
    primary100: '#404040',
    primary75: '#707070',
    primary50: '#9F9F9F',
    primary25: '#CFCFCF',
    primary5: '#F5F5F5',
    primary0: '#FFFFFF',

    secondary100: '#808080',
    secondary75: '#A0A0A0',
    secondary50: '#BFBFBF',
    secondary25: '#DFDFDF',
    secondary5: '#F9F9F9',
    secondary0: '#FFFFFF',

    tertiary100: '#BFBFBF',
    tertiary75: '#CFCFCF',
    tertiary50: '#DFDFDF',
    tertiary25: '#EFEFEF',
    tertiary5: '#FCFCFC',
    tertiary0: '#000000',

    neutral100: '#000000',
    neutral75: '#404040',
    neutral50: '#808080',
    neutral25: '#BFBFBF',
    neutral5: '#F2F2F2',
    neutral0: '#FFFFFF',

    positive100: '#1F816C',
    positive75: '#569F90',
    positive50: '#8DBEB4',
    positive25: '#C4DDD9',
    positive5: '#F0F5F6',
    positive0: '#FFFFFF',

    info100: '#0071BC',
    info75: '#3F93CC',
    info50: '#7EB6DC',
    info25: '#BCD9ED',
    info5: '#EEF4FA',
    info0: '#FFFFFF',

    caution100: '#FCBA29',
    caution75: '#FCCA5E',
    caution50: '#FBDB93',
    caution25: '#FBEBC8',
    caution5: '#FBF8F2',
    caution0: '#000000',

    error100: '#DD1B00',
    error75: '#E4533F',
    error50: '#EC8B7F',
    error25: '#F3C3BE',
    error5: '#FAF0F0',
    error0: '#FFFFFF',

    annotation100: '#7B61FF',
    annotation75: '#9C88FF',
    annotation50: '#BDB0FF',
    annotation25: '#DED7FF',
    annotation5: '#F8F7FF',
    annotation0: '#FFFFFF',
  },
};

export default tokens;
