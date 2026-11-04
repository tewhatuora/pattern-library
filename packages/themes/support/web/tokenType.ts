import { Breakpoint } from './breakpoints';

// Type for gradient definitions
export type GradientStop = {
  position: number;
  color: string;
};

export type LinearGradient = {
  gradientType: 'linear';
  rotation: number;
  stops: GradientStop[];
};

export type RadialGradient = {
  gradientType: 'radial';
  stops: GradientStop[];
};

export type Gradient = LinearGradient | RadialGradient;

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
  // added
  // | 'link-bold'
  | 'button'
  | 'bullet'
  | 'number';

type FontWeightValue = '400' | '500' | '600' | '700' | '800' | '900';

// Gradient CSS string (already processed)
export type GradientCSS = string;

export type GradientMesh = Record<0 | 1, GradientCSS>;

export type GradientTokens = {
  semantic: {
    structure: {
      background: Record<
        'header-dark' | 'footer-dark-vertical gradient' | 'footer-dark-horizontal gradient',
        GradientCSS
      >;
    };
  };
  mesh: {
    'pale aqua mesh': GradientMesh;
  };
  plain: Record<
    | 'footer horizontal'
    | 'pink'
    | 'red-colbolt'
    | 'header'
    | 'turquoise-blue'
    | 'aqua-cobolt'
    | 'blue-green'
    | 'blue-transparent gradient'
    | 'blue-pink gradient'
    | 'turquoise-purple',
    GradientCSS
  >;
};

export type NullableTokens = {
  [key: string]: string | NullableTokens | null;
};

export interface Tokens extends NullableTokens {
  typography: {
    fontFamily: string;
    fontWeight: Record<FontWeight, FontWeightValue>;
    textDecoration: Record<FontWeight, string>;
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

    // NEW
    focus100: string;
    transparent100: string;
    'gradientfooter background': string;

    'coredark blue': string;
    'coremid blue': string;
    'coredark aqua': string;
    'corevibrant aqua': string;
    'corebright aqua': string;
    'coremid aqua': string;
    corepurple: string;
    'corevibrant purple': string;
    'corepale purple': string;
    corecobalt: string;
    coreemerald: string;
    coremandarin: string;
    corebuttercup: string;
    'corepale aqua': string;
    'corepale blue': string;

    semantic: {
      structure: {
        background: {
          base: string;
          'header-light': string;
          'footer-dark': string;
          'footer-light': string;
          overlay: string;
          'footer-dark-background': string;
        };
        divider: { dark: string; light: string };
      };
      card: { background: string; border: string };
      text: {
        copy: { dark: string; light: string; error: string; disabled: string; placeholder: string };
        links: { active: string; visited: string; hover: string };
      };
      button: {
        primary: {
          background: {
            normal: string;
            hover: string;
            focused: string;
            pressed: string;
            disabled: string;
          };
          content: {
            normal: string;
            disabled: string;
            // hover has been added to content
            hover: string;
          };
          highlight: { focus: string };
          border: {
            normal: string;
            hover: string;
            focused: string;
            pressed: string;
            disabled: string;
          };
        };
        secondary: {
          background: {
            normal: string;
            hover: string;
            focused: string;
            pressed: string;
            disabled: string;
          };
          content: {
            normal: string;
            disabled: string;
            // hover has been added to content
            hover: string;
          };
          highlight: { focus: string };
          border: {
            normal: string;
            hover: string;
            focused: string;
            pressed: string;
            disabled: string;
          };
        };
        tertiary: {
          background: {
            normal: string;
            hover: string;
            pressed: string;
            focused: string;
            disabled: string;
          };
          border: { normal: string; hover: string; pressed: string; focused: string; disabled: string };
          content: { normal: string; disabled: string };
          highlight: { focus: string };
        };
        search: {
          background: { normal: string; hover: string; focused: string };
          highlight: { focus: string };
        };
        'text-link': { highlight: { focus: string } };
      };
      notifications: {
        alert: {
          background: {
            positive: string;
            informative: string;
            caution: string;
            critical: string;
          };
          content: {
            positive: string;
            informative: string;
            caution: string;
            critical: string;
          };
          icons: {
            positive: string;
            informative: string;
            caution: string;
            critical: string;
          };
        };
        banner: {
          background: {
            positive: string;
            informative: string;
            caution: string;
            critical: string;
          };
          content: {
            positive: string;
            informative: string;
            caution: string;
            critical: string;
          };
        };
      };
      inputs: {
        elements: {
          background: {
            normal: string;
            selected: string;
            'selected-hover': string;
            unselected: string;
            'unselected-hover': string;
            disabled: string;
          };
          border: { normal: string; hover: string; disabled: string; error: string };
          highlight: { focus: string };
        };
        fields: {
          background: { normal: string; hover: string };
          border: { error: string; normal: string; disabled: string };
          highlight: { focus: string };
        };
      };
      controls: {
        background: { light: string; light2: string; active: string; inactive: string };
        content: { light: string; dark: string };
        border: { active: string; inactive: string; hover: string };
        highlight: { focus: string };
      };
      icons: { dark: string; light: string; grey: string; black: string };
      menu: {
        list: {
          background: { darkened: string; normal: string };
          content: { normal: string; darkened: string };
          border: { divider: string };
        };
        button: { dark: string; light: string; hover: string };
        highlight: { focus: string };
      };
    };
  };

  gradients: GradientTokens;
}
