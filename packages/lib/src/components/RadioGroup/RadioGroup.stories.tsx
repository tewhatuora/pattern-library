import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { RadioButton } from './RadioButton';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './RadioGroup.docs.mdx';

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    RadioButton,
  },
  argTypes: {
    name: { control: false },
    id: { control: false },
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    subheading: {
      defaultValue: 'Subheading',
      control: {
        type: 'text',
      },
    },
    tertiaryLabel: {
      control: {
        type: 'text',
      },
    },
    tertiaryLabelAs: {
      defaultValue: 'button',
      control: {
        type: 'radio',
        options: ['a', 'button', 'text'],
      },
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
      control: {
        type: 'text',
      },
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
    error: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
    required: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    onChange: { control: false },
    children: { control: false },
  },
  parameters: {
    controls: {
      exclude: ['descriptionProps', 'errorMessageProps', 'labelProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args}>
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Default.args = {
  helperText: 'Helper text',
};

export const Filled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} value="one">
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};

export const Error = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} value="one">
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
Error.args = {
  errorMessage: 'Error message',
  error: true,
};

export const Disabled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} disabled>
      <RadioButton disabled id="value_one" label="Content one" value="one" />
      <RadioButton disabled id="value_two" label="Content two" value="two" />
      <RadioButton disabled id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};

export const DisabledAndFilled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} disabled value="one">
      <RadioButton disabled id="value_one" label="Content one" value="one" />
      <RadioButton disabled id="value_two" label="Content two" value="two" />
      <RadioButton disabled id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
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
  helperText: 'Helper text',
};

export const OnChange = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} onChange={(value) => alert(value)}>
      <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
      <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
      <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
