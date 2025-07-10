import { useState } from 'react';

import { RadioGroupRoot, RadioGroupRootProps } from './RadioGroup';
import { RadioButton } from './RadioButton';

import DocsPage from '../../../utils/DocsPage';

import Docs from './RadioGroup.docs.mdx';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputMessage } from '../InputMessage/InputMessage';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Forms/RadioGroupRoot',
  component: RadioGroupRoot,
  subcomponents: {
    InputLabel,
    RadioButton,
    InputMessage,
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
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Uncontrolled = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot aria-describedby="help-text-1" aria-labelledby="label-1" {...args}>
      <InputLabel label="Uncontrolled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton id="value_one" label="Content one" value="one" />
        <RadioButton id="value_two" label="Content two" value="two" />
        <RadioButton id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};
Uncontrolled.args = {};

export const Controlled = (args: RadioGroupRootProps) => {
  const [state, setState] = useState('one');

  return (
    <RadioGroupRoot
      {...args}
      aria-describedby="help-text-1"
      aria-labelledby="label-1"
      value={state}
      onValueChange={setState}
    >
      <InputLabel label="Controlled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton id="value_one" label="Content one" value="one" />
        <RadioButton id="value_two" label="Content two" value="two" />
        <RadioButton id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};

export const Error = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot aria-describedby="help-text-1" aria-labelledby="label-1" error {...args}>
      <InputLabel error label="Error example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton id="value_one" label="Content one" value="one" />
        <RadioButton id="value_two" label="Content two" value="two" />
        <RadioButton id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage errorMessage="Example error message" helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};
Error.args = {};

export const Disabled = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot aria-describedby="help-text-1" aria-labelledby="label-1" {...args}>
      <InputLabel disabled={args.disabled} label="Disabled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton id="value_one" label="Content one" value="one" />
        <RadioButton id="value_two" label="Content two" value="two" />
        <RadioButton id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage disabled={args.disabled} helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};
Disabled.args = {
  disabled: true,
};

export const DisabledAndFilled = (args: RadioGroupRootProps) => {
  const [state, setState] = useState('one');

  return (
    <RadioGroupRoot
      aria-describedby="help-text-1"
      aria-labelledby="label-1"
      value={state}
      onValueChange={setState}
      {...args}
    >
      <InputLabel disabled={args.disabled} label="Disabled and filled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton id="value_one" label="Content one" value="one" />
        <RadioButton id="value_two" label="Content two" value="two" />
        <RadioButton id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage disabled={args.disabled} helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};
DisabledAndFilled.args = {
  disabled: true,
};

export const Headings = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot aria-describedby="help-text-1" aria-labelledby="label-1" {...args}>
      <InputLabel label="Uncontrolled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
        <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
        <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};

export const HelperText = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot aria-describedby="help-text-1" aria-labelledby="label-1" {...args}>
      <InputLabel label="Uncontrolled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
        <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
        <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};

HelperText.args = {};

export const OnChange = (args: RadioGroupRootProps) => {
  return (
    <RadioGroupRoot
      aria-describedby="help-text-1"
      aria-labelledby="label-1"
      onValueChange={(value) => alert(value)}
      {...args}
    >
      <InputLabel label="Uncontrolled example" labelProps={{ id: 'label-1' }} />

      <Stack space="xsmall">
        <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
        <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
        <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
      </Stack>

      <InputMessage helperText="Example helper text" id="help-text-1" />
    </RadioGroupRoot>
  );
};
