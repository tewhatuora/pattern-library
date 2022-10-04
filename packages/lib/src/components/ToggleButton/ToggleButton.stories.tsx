import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ToggleButton.docs.mdx';

export default {
  title: 'Forms/ToggleButton',
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
    defaultValue: {
      control: {
        type: 'text',
      },
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

export const Default = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};

export const LeftSelected = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
LeftSelected.args = {
  defaultValue: 'Left ToggleButton',
};

export const RightSelected = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
RightSelected.args = {
  defaultValue: 'Right ToggleButton',
};

export const Disabled = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
Disabled.args = {
  disabled: true,
};

export const DisabledAndSelected = (args: ToggleButtonProps) => {
  return <ToggleButton {...args} />;
};
DisabledAndSelected.args = {
  defaultValue: 'Right ToggleButton',
  disabled: true,
};
