// import { Breakpoint } from '../css/breakpoints';

type FontWeight = 'regular' | 'medium' | 'bold' | 'black';

export interface Tokens {
  name: string;
  displayName: string;
  typography: {
    fontFamily: string;
    fontWeight: Record<FontWeight, '400' | '500' | '600' | '700' | '800' | '900'>;
    // TODO: Add font sizes
  };
  space: {
    1: string;
    2: string;
    3: string;
    4: string;
    6: string;
    8: string;
    10: string;
    12: string;
    14: string;
    16: string;
    18: string;
    20: string;
  };
  border: {
    radius: {
      standard: string;
      large: string;
      xlarge: string;
    };
    width: {
      standard: string;
    };
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  color: {
    primary100: string;
    primary75: string;
    primary50: string;
    primary25: string;
    primary5: string;
    primary0: string;

    secondary100: string;
    secondary75: string;
    secondary50: string;
    secondary25: string;
    secondary5: string;
    secondary0: string;

    tertiary100: string;
    tertiary75: string;
    tertiary50: string;
    tertiary25: string;
    tertiary5: string;
    tertiary0: string;

    neutral100: string;
    neutral75: string;
    neutral50: string;
    neutral25: string;
    neutral5: string;
    neutral0: string;

    positive100: string;
    positive75: string;
    positive50: string;
    positive25: string;
    positive5: string;
    positive0: string;

    info100: string;
    info75: string;
    info50: string;
    info25: string;
    info5: string;
    info0: string;

    caution100: string;
    caution75: string;
    caution50: string;
    caution25: string;
    caution5: string;
    caution0: string;

    error100: string;
    error75: string;
    error50: string;
    error25: string;
    error5: string;
    error0: string;

    annotation100: string;
    annotation75: string;
    annotation50: string;
    annotation25: string;
    annotation5: string;
    annotation0: string;
  };
}
