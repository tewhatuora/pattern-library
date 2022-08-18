import { Breakpoint } from './breakpoints';

export type TextBreakpoint = Exclude<Breakpoint, 'desktop' | 'wide'>;

type FontSizeText = {
  fontSize: string; // Should be a rem value
  lineHeight: string;
};

export type Viewport = {
  mobile: string;
  tablet: string;
};

export type BorderRadius = {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
};

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;
type FontWeight =
  | 'regular'
  | 'medium'
  | 'bold'
  | 'black'
  | 'link-normal'
  | 'link-hover&focus'
  | 'button'
  | 'bullet'
  | 'number';

type FontWeightValue = '400' | '500' | '600' | '700' | '800' | '900';

export interface Tokens {
  name: string;
  displayName: string;
  typography: {
    fontFamily: string;
    fontWeight: Record<FontWeight, FontWeightValue>;
    heading: {
      weight: {
        black: FontWeightValue;
        bold: FontWeightValue;
        regular: FontWeightValue;
      };
      level: {
        '1': TextDefinition;
        '2': TextDefinition;
        '3': TextDefinition;
        '4': TextDefinition;
      };
    };
    text: {
      xsmall: TextDefinition;
      small: TextDefinition;
      medium: TextDefinition;
      large: TextDefinition;
    };
  };
  space: {
    xlarge: Viewport;
    large: Viewport;
    medium: Viewport;
    small: Viewport;
    xxlarge: Viewport;
    xsmall: Viewport;
  };
  transitions: {
    fast: string;
  };
  border: {
    radius: {
      tags: BorderRadius;
      inputs: BorderRadius;
      button: BorderRadius;
      standard: BorderRadius;
    };
    width: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  };
  shadows: {
    primary: string;
  };
  color: {
    primary110: string; // Used for pressed states
    primary100: string; // Base (brandPrimary100)
    primary75: string; // Used for hover states
    primary50: string;
    primary25: string; // Used for disabled states
    primary5: string;
    primary0: string; // Contrast (maps to brandPrimary0 in Figma)

    secondary110: string;
    secondary100: string;
    secondary75: string;
    secondary50: string;
    secondary25: string;
    secondary5: string;
    secondary0: string;

    tertiary110: string;
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

    positive110: string;
    positive100: string;
    positive75: string;
    positive50: string;
    positive25: string;
    positive5: string;
    positive0: string;

    info110: string;
    info100: string;
    info75: string;
    info50: string;
    info25: string;
    info5: string;
    info0: string;

    caution110: string;
    caution100: string;
    caution75: string;
    caution50: string;
    caution25: string;
    caution5: string;
    caution0: string;

    error110: string;
    error100: string;
    error75: string;
    error50: string;
    error25: string;
    error5: string;
    error0: string;

    annotation110: string;
    annotation100: string;
    annotation75: string;
    annotation50: string;
    annotation25: string;
    annotation5: string;
    annotation0: string;

    visited100: string;
  };
}
