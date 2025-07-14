import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ToggleButton.docs.mdx';
import { Meta } from '@storybook/react/*';

export default {
  title: 'Forms/ToggleButton',
  component: ToggleButton,
  argTypes: {
    labelLeft: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    labelRight: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    valueLeft: {
      type: 'string',
    },
    valueRight: {
      type: 'string',
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
  args: {
    labelLeft: 'Left',
    labelRight: 'Right',
    valueLeft: 'Left ToggleButton',
    valueRight: 'Right ToggleButton',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<ToggleButtonProps>;

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
