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
      defaultValue: 'Label',
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

export const Default = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;
export const WithHeading = (args: ToggleSwitchProps) => <ToggleSwitch {...args} heading="Heading" />;
export const Checked = (args: ToggleSwitchProps) => <ToggleSwitch {...args} defaultChecked heading="Heading" />;
export const Disabled = (args: ToggleSwitchProps) => (
  <ToggleSwitch {...args} defaultChecked disabled heading="Heading" />
);
