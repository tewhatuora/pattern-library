export default Tokens;

interface Tokens {
  name: string;
  displayName: string;
  typography: Typography;
  space: Space;
  transitions: Transitions;
  border: Border;
  shadows: Shadows;
  grid: Grid;
  color: Color;
}
interface Color {
  primary0: string;
  primary5: string;
  primary25: string;
  primary50: string;
  primary75: string;
  primary100: string;
  primary110: string;
  secondary0: string;
  secondary5: string;
  secondary25: string;
  secondary50: string;
  secondary75: string;
  secondary100: string;
  secondary110: string;
  tertiary0: string;
  tertiary5: string;
  tertiary25: string;
  tertiary50: string;
  tertiary75: string;
  tertiary100: string;
  tertiary110: string;
  positive0: string;
  positive5: string;
  positive25: string;
  positive50: string;
  positive75: string;
  positive100: string;
  positive110: string;
  info0: string;
  info5: string;
  info25: string;
  info50: string;
  info75: string;
  info100: string;
  info110: string;
  caution0: string;
  caution5: string;
  caution25: string;
  caution50: string;
  caution75: string;
  caution100: string;
  caution110: string;
  error0: string;
  error5: string;
  error25: string;
  error50: string;
  error75: string;
  error100: string;
  error110: string;
  neutral0: string;
  neutral5: string;
  neutral25: string;
  neutral50: string;
  neutral75: string;
  neutral100: string;
  annotation0: string;
  annotation5: string;
  annotation25: string;
  annotation50: string;
  annotation75: string;
  annotation100: string;
  annotation110: string;
  visited100: string;
}
interface Grid {
  desktop: Desktop;
  mobile: Desktop;
}
interface Desktop {
  pattern: string;
  gutterSize: number;
  alignment: string;
  count: number;
  offset: number;
}
interface Shadows {
  small: string;
}
interface Border {
  radius: Radius;
  width: Width;
}
interface Width {
  standard: string;
}
interface Radius {
  standard: string;
  large: string;
  xlarge: string;
}
interface Transitions {
  fast: string;
}
interface Space {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '6': string;
  '8': string;
  '10': string;
  '12': string;
  '14': string;
  '16': string;
  '18': string;
  '20': string;
}
interface Typography {
  fontFamily: string;
  fontWeight: FontWeight;
  heading: Heading;
  text: Text;
}
interface Text {
  xxxlarge: Xxxlarge;
  xxlarge: Xxxlarge;
  xlarge: Xxxlarge;
  large: Xxxlarge;
  standard: Xxxlarge;
  small: Xxxlarge;
  xsmall: Xxxlarge;
}
interface Xxxlarge {
  mobile: Mobile;
}
interface Mobile {
  fontSize: number;
  lineHeight: number;
}
interface Heading {}
interface FontWeight {
  black: number;
  bold: number;
  regular: number;
  medium: number;
  'link-normal': number;
  'link-hover&focus': number;
  button: number;
  bullet: number;
  number: number;
}
