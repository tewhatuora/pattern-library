import { Meta } from '@storybook/react-vite';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './ToggleButton.docs.mdx';

export default {
  title: 'Transactional Components/ToggleButton',
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
      control: {
        type: 'text',
      },
    },
    valueRight: {
      type: 'string',
      control: {
        type: 'text',
      },
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
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    'aria-labelledby': {
      control: {
        type: 'text',
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
    disabled: false,
    'aria-label': 'Example toggle',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} satisfies Meta<ToggleButtonProps>;

const selections = [
  { label: 'Nothing selected', defaultValue: undefined },
  { label: 'Left selected', defaultValue: 'list' },
  { label: 'Right selected', defaultValue: 'grid' },
];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px">
      {selections.map(({ label, defaultValue }) => (
        <Variant key={label} label={label}>
          <ToggleButton
            aria-label={`View, ${label.toLowerCase()}`}
            defaultValue={defaultValue}
            labelLeft="List"
            labelRight="Grid"
            valueLeft="list"
            valueRight="grid"
          />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Disabled">
      {selections.map(({ label, defaultValue }) => (
        <Variant key={label} label={label}>
          <ToggleButton
            aria-label={`View, disabled, ${label.toLowerCase()}`}
            defaultValue={defaultValue}
            disabled
            labelLeft="List"
            labelRight="Grid"
            valueLeft="list"
            valueRight="grid"
          />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="280px" title="Long labels">
      <Variant label="Wraps">
        <ToggleButton
          aria-label="Appointment type"
          defaultValue="in-person"
          labelLeft="In person at the clinic"
          labelRight="Video call from home"
          valueLeft="in-person"
          valueRight="video"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
