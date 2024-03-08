import { useState } from 'react';

import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { RadioButton } from './RadioButton';

import DocsPage from '../../../utils/DocsPage';

import Docs from './RadioGroup.docs.mdx';
import icons from '../Icon/icons';

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    RadioButton,
  },
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onValueChange: {
      control: false,
    },
    disabled: {
      control: 'boolean',
    },
    name: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
    },

    label: {
      control: {
        type: 'text',
      },
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
    tertiaryLabel: {
      control: 'text',
    },
    tertiaryLabelAs: {
      control: 'radio',
      options: ['text', 'button', 'a'],
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
      control: 'text',
    },
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Uncontrolled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Uncontrolled.args = {
  label: 'Uncontrolled example',
  helperText: 'Example helper text',
} as RadioGroupProps;

export const Controlled = (args: RadioGroupProps) => {
  const [state, setState] = useState('one');

  return (
    <RadioGroup value={state} onValueChange={setState} {...args}>
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Controlled.args = {
  label: 'Controlled example',
  helperText: 'Example helper text',
} as RadioGroupProps;

export const Error = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Error.args = {
  label: 'Error example',
  helperText: 'Example helper text',
  errorMessage: 'Example error text',
} as RadioGroupProps;

export const Disabled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton disabled id="value_one" label="Content one" value="one" />
      <RadioButton disabled id="value_two" label="Content two" value="two" />
      <RadioButton disabled id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Disabled.args = {
  disabled: true,
  label: 'Disabled example',
  helperText: 'Example helper text',
};

export const DisabledAndFilled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} value="one">
      <RadioButton disabled id="value_one" label="Content one" value="one" />
      <RadioButton disabled id="value_two" label="Content two" value="two" />
      <RadioButton disabled id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
DisabledAndFilled.args = {
  disabled: true,
  label: 'Disabled and filled example',
  helperText: 'Example helper text',
};

export const Headings = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
      <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
      <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Headings.args = {
  label: 'Headings example',
  helperText: 'Example helper text',
};

export const HelperText = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
      <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
      <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};

HelperText.args = {
  label: 'Helper text example',
  helperText: 'Example helper text',
};

export const OnChange = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} onValueChange={(value) => alert(value)}>
      <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
      <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
      <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};

HelperText.args = {
  label: 'On change example',
  helperText: 'Example helper text',
};
