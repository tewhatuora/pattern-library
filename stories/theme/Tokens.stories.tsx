import DocsPage from '../../packages/lib/utils/DocsPage';
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
    docs: {
      page: () => <DocsPage docs={() => null} />,
    },
  },
};

export const Color = (args) => <ColorDocs {...args} />;
export const Space = (args) => <SpaceDocs {...args} />;
export const BorderRadius = (args) => <BorderRadiusDocs {...args} />;
export const BorderWidth = (args) => <BorderWidthDocs {...args} />;
export const Shadows = (args) => <ShadowsDocs {...args} />;
export const Transitions = (args) => <TransitionsDocs {...args} />;
export const Typography = (args) => <TypographyDocs {...args} />;
