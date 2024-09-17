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
};

export const Color = () => <ColorDocs />;
export const Space = () => <SpaceDocs />;
export const BorderRadius = () => <BorderRadiusDocs />;
export const BorderWidth = () => <BorderWidthDocs />;
export const Shadows = () => <ShadowsDocs />;
export const Transitions = () => <TransitionsDocs />;
export const Typography = () => <TypographyDocs />;
