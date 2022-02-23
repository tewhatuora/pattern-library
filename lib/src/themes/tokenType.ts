import { Breakpoint } from '../css/breakpoints';

export type TextBreakpoint = Exclude<Breakpoint, 'desktop' | 'wide'>;

type FontSizeText = {
  fontSize: string; // Should be a rem value
  lineHeight: string;
};

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;
type FontWeight = 'regular' | 'medium' | 'bold' | 'black';

export interface Tokens {
  name: string;
  displayName: string;
  typography: {
    fontFamily: string;
    fontWeight: Record<FontWeight, '400' | '500' | '600' | '700' | '800' | '900'>;
    heading: {
      weight: {
        weak: FontWeight;
        regular: FontWeight;
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
      standard: TextDefinition;
      large: TextDefinition;
    };
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
  transitions: {
    fast: string;
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
    brandPrimary110: string; // Used for pressed states
    brandPrimary100: string; // Base (brandPrimary100)
    brandPrimary75: string; // Used for hover states
    brandPrimary50: string;
    brandPrimary25: string; // Used for disabled states
    brandPrimary5: string;
    brandPrimaryContrast: string; // Contrast (maps to brandPrimary0 in Figma)

    brandSecondary110: string;
    brandSecondary100: string;
    brandSecondary75: string;
    brandSecondary50: string;
    brandSecondary25: string;
    brandSecondary5: string;
    brandSecondaryContrast: string;

    brandAccent110: string;
    brandAccent100: string;
    brandAccent75: string;
    brandAccent50: string;
    brandAccent25: string;
    brandAccent5: string;
    brandAccentContrast: string;

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
    positiveContrast: string;

    info110: string;
    info100: string;
    info75: string;
    info50: string;
    info25: string;
    info5: string;
    infoContrast: string;

    caution110: string;
    caution100: string;
    caution75: string;
    caution50: string;
    caution25: string;
    caution5: string;
    cautionContrast: string;

    error110: string;
    error100: string;
    error75: string;
    error50: string;
    error25: string;
    error5: string;
    errorContrast: string;

    annotation110: string;
    annotation100: string;
    annotation75: string;
    annotation50: string;
    annotation25: string;
    annotation5: string;
    annotationContrast: string;
  };
}
