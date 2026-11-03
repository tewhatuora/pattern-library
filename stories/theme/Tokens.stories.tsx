import ColorDocs from './Color';
import SpaceDocs from './Space';
import BorderRadiusDocs from './BorderRadius';
import BorderWidthDocs from './BorderWidth';
import ShadowsDocs from './Shadows';
import TransitionsDocs from './Transitions';
import TypographyDocs from './Typography';

export default {
  title: 'Themes/Tokens',
  argTypes: {},
  parameters: {
    a11y: {
      // These pages document tokens by showing swatches, token names and sample values (some deliberately in
      // low-contrast or dark-theme colours), so contrast here describes the token rather than the page's usage.
      config: { rules: [{ id: 'color-contrast', enabled: false }] },
    },
  },
};

export const Color = () => <ColorDocs />;
export const Space = () => <SpaceDocs />;
export const BorderRadius = () => <BorderRadiusDocs />;
export const BorderWidth = () => <BorderWidthDocs />;
export const Shadows = () => <ShadowsDocs />;
export const Transitions = () => <TransitionsDocs />;
export const Typography = () => <TypographyDocs />;
