import { expect, fn, userEvent, within } from 'storybook/test';

import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { RadioButton } from './RadioButton';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './RadioGroup.docs.mdx';

export default {
  title: 'Transactional Components/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    RadioButton,
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
    name: 'radio-group',
    required: false,
    showRequiredAsterisk: true,
    disabled: false,
  },
  argTypes: {
    name: { control: { type: 'text' } },
    id: { control: false },
    value: {
      options: ['one', 'two', 'three'],
      control: { type: 'select' },
    },
    defaultValue: {
      options: ['one', 'two', 'three'],
      control: { type: 'select' },
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
      options: ['a', 'button', 'text'],
      control: { type: 'radio' },
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
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    tertiaryLabelTooltip: {
      control: { type: 'text' },
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
      control: {
        type: 'boolean',
      },
    },
    showRequiredAsterisk: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { control: false },
    onTertiaryLabelClick: { control: false },
    children: { control: false },
  },
  parameters: {
    controls: {
      // ARIA wiring props, and label props the group doesn't pass on
      exclude: ['descriptionProps', 'errorMessageProps', 'labelProps', 'as', 'htmlFor'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Each group needs its own `name`, and each button a unique `id`, as they're shown together
const buttons = (name: string, headings = false) => [
  <RadioButton
    heading={headings ? 'Email' : undefined}
    id={`${name}-one`}
    key="one"
    label={headings ? 'To your inbox' : 'Email'}
    value="one"
  />,
  <RadioButton
    heading={headings ? 'Phone' : undefined}
    id={`${name}-two`}
    key="two"
    label={headings ? 'A call or a text' : 'Phone'}
    value="two"
  />,
  <RadioButton
    heading={headings ? 'Post' : undefined}
    id={`${name}-three`}
    key="three"
    label={headings ? 'To your postal address' : 'Post'}
    value="three"
  />,
];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px">
      <Variant label="Nothing selected">
        <RadioGroup helperText="Choose one" label="Preferred contact" name="rg-empty">
          {buttons('rg-empty')}
        </RadioGroup>
      </Variant>
      <Variant label="Selected">
        <RadioGroup defaultValue="one" helperText="Choose one" label="Preferred contact" name="rg-selected">
          {buttons('rg-selected')}
        </RadioGroup>
      </Variant>
      <Variant label="Headings">
        <RadioGroup defaultValue="two" label="Preferred contact" name="rg-headings">
          {buttons('rg-headings', true)}
        </RadioGroup>
      </Variant>
      <Variant label="Subheading, tertiary label, required">
        <RadioGroup
          label="Preferred contact"
          name="rg-required"
          required
          subheading="How should we reach you?"
          tertiaryLabel="Why we ask"
          tertiaryLabelAs="text"
        >
          {buttons('rg-required')}
        </RadioGroup>
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="States">
      <Variant label="Error">
        <RadioGroup error errorMessage="Choose a contact method" label="Preferred contact" name="rg-error">
          {buttons('rg-error')}
        </RadioGroup>
      </Variant>
      <Variant label="Error, selected">
        <RadioGroup
          defaultValue="one"
          error
          errorMessage="Choose a contact method"
          label="Preferred contact"
          name="rg-error-selected"
        >
          {buttons('rg-error-selected')}
        </RadioGroup>
      </Variant>
      <Variant label="Disabled">
        <RadioGroup disabled helperText="Choose one" label="Preferred contact" name="rg-disabled">
          {buttons('rg-disabled')}
        </RadioGroup>
      </Variant>
      <Variant label="Disabled, selected">
        <RadioGroup defaultValue="one" disabled label="Preferred contact" name="rg-disabled-selected">
          {buttons('rg-disabled-selected')}
        </RadioGroup>
      </Variant>
      <Variant label="One button disabled">
        <RadioGroup defaultValue="one" label="Preferred contact" name="rg-one-disabled">
          {[
            <RadioButton id="rg-one-disabled-one" key="one" label="Email" value="one" />,
            <RadioButton disabled id="rg-one-disabled-two" key="two" label="Phone (unavailable)" value="two" />,
          ]}
        </RadioGroup>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long content">
      <Variant label="Wraps">
        <RadioGroup
          defaultValue="one"
          helperText="We'll only use this to contact you about your appointments and results"
          label="How would you like us to contact you about appointments?"
          name="rg-long"
        >
          {[
            <RadioButton
              heading="Email, to the address saved in your profile"
              id="rg-long-one"
              key="one"
              label="You can change your email address at any time from your profile settings"
              value="one"
            />,
            <RadioButton id="rg-long-two" key="two" label="Phone" value="two" />,
          ]}
        </RadioGroup>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
    <RadioGroup {...args} defaultValue="one">
      <RadioButton id="value_one" label="Content one" value="one" />
      <RadioButton id="value_two" label="Content two" value="two" />
      <RadioButton id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};

// An explicit spy, because Storybook errors when an implicit action arg is called during a play function
Filled.args = {
  onChange: fn(),
};

Filled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // The group is named by its label, and the preselected radio is really checked
  await expect(canvas.getByRole('radiogroup', { name: /Label/ })).toBeInTheDocument();
  await expect(canvas.getByRole('radio', { name: 'Content one' })).toBeChecked();

  // Only one radio shows as selected after choosing another
  await userEvent.click(canvas.getByRole('radio', { name: 'Content two' }));
  await expect(canvas.getByRole('radio', { name: 'Content two' })).toBeChecked();
  await expect(canvas.getByRole('radio', { name: 'Content one' })).not.toBeChecked();
};

export const Error = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} defaultValue="one">
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
    <RadioGroup {...args} defaultValue="one" disabled>
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
