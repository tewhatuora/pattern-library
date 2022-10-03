import { useState } from 'react';

import icons from '../Icon/icons';

import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import DocsPage from '../../../utils/DocsPage';

import Docs from './CheckboxGroup.docs.mdx';

export default {
  title: 'Forms/CheckBoxGroup',
  component: CheckboxGroup,
  argTypes: {
    label: {
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
      control: {
        type: 'boolean',
      },
    },
    onChange: { control: false },
    children: { control: false },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: CheckboxGroupProps) => {
  const [checkbox1State, setCheckbox1State] = useState<boolean>(true);
  const [checkbox2State, setCheckbox2State] = useState<boolean>(false);
  const [checkbox3State, setCheckbox3State] = useState<boolean>(true);
  const [checkbox4State, setCheckbox4State] = useState<boolean>(false);
  const [checkbox5State, setCheckbox5State] = useState<boolean>(false);
  const [checkbox6State, setCheckbox6State] = useState<boolean>(false);

  return (
    <CheckboxGroup {...args}>
      <Checkbox checked={!!checkbox1State} id="checkbox_1" label="Checkbox 1" onCheckedChange={setCheckbox1State} />
      <Checkbox checked={!!checkbox2State} id="checkbox_2" label="Checkbox 2" onCheckedChange={setCheckbox2State} />
      <Checkbox
        checked={checkbox3State}
        id="checkbox_4"
        indeterminate
        label="Checkbox 3"
        onCheckedChange={setCheckbox3State}
      />
      <Checkbox
        checked={!!checkbox4State}
        heading="Checkbox"
        id="checkbox_4"
        label="with heading"
        onCheckedChange={setCheckbox4State}
      />
      <Checkbox
        checked={!!checkbox5State}
        disabled
        heading="Disabled checkbox"
        id="checkbox_5"
        label="with heading"
        onCheckedChange={setCheckbox5State}
      />
      <Checkbox
        checked={!!checkbox6State}
        error
        heading="Checkbox"
        id="checkbox_6"
        label="with error"
        onCheckedChange={setCheckbox6State}
      />
    </CheckboxGroup>
  );
};
