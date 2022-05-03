export default RootObject;

interface RootObject {
  name: string;
  displayName: string;
  typography: Typography;
  space: Space;
  transitions: Space;
  border: Space;
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
  desktop: Desktop2;
  mobile: Desktop2;
}
interface Desktop2 {
  pattern: string;
  gutterSize: number;
  alignment: string;
  count: number;
  offset: number;
}
interface Shadows {
  small: string;
}
interface Space {}
interface Typography {
  desktop: Desktop;
  mobile: Desktop;
}
interface Desktop {
  '3xl': _3xl;
  '2xl': _2xl;
  xl: Xl;
  l: Xl;
  m: M;
  s: Xl;
  xs: Xl;
}
interface M {
  bold: Black;
  medium: Black;
  regular: Black;
  'link-normal': Black;
  'link-hover&focus': Black;
  button: Black;
  bullet: Black;
  number: Black;
}
interface Xl {
  bold: Black;
  regular: Black;
}
interface _2xl {
  black: Black;
  bold: Black;
}
interface _3xl {
  black: Black;
}
interface Black {
  fontSize: number;
  textDecoration: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontStretch: string;
  letterSpacing: number;
  lineHeight: number;
  paragraphIndent: number;
  paragraphSpacing: number;
  textCase: string;
}
