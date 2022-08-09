import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { RadioButton } from './RadioButton';
import DocsPage from '../../../utils/DocsPage';

import Docs from './RadioGroup.docs.mdx';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  subcomponents: {
    RadioButton,
  },
  argTypes: {
    name: { control: false },
    id: { control: false },
    onChange: { control: false },
    children: { control: false },
    error: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
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

export const Disabled = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} value="one" onChange={(value) => alert(value)}>
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

export const OnChange = (args: RadioGroupProps) => {
  return (
    <RadioGroup {...args} onChange={(value) => alert(value)}>
      <RadioButton heading="Heading one" id="value_one" label="Content one" value="one" />
      <RadioButton heading="Heading two" id="value_two" label="Content two" value="two" />
      <RadioButton heading="Heading three" id="value_three" label="Content three" value="three" />
    </RadioGroup>
  );
};
