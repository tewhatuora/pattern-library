import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ToggleButton.docs.mdx';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    labelLeft: {
      defaultValue: 'Left',
    },
    labelRight: {
      defaultValue: 'Right',
    },
    valueLeft: {
      defaultValue: 'Left ToggleButton',
    },
    valueRight: {
      defaultValue: 'Right ToggleButton',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
