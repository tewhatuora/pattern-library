import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ToggleSwitch.docs.mdx';

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    id: { control: false },
    name: { control: false },
    label: {
      defaultValue: 'ToggleSwitch Component',
    },
    heading: {
      defaultValue: 'Heading',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: ToggleSwitchProps) => {
  return <ToggleSwitch {...args} />;
};
