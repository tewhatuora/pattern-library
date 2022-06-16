import { useState } from 'react';
import { Checkbox } from '../CheckBox/CheckBox';
import { CheckboxGroupProps } from './CheckBoxGroup';
import { CheckboxGroup } from './CheckBoxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    checkboxObject: {
      defaultValue: [
        { label: 'Checkbox 1', state: 'default', isIndeterminate: false, isRequired: true },
        { label: 'Checkbox 2', state: 'disabled', isIndeterminate: false, isRequired: true },
        { label: 'Checkbox 3', state: 'error', isIndeterminate: true, isRequired: true },
      ],
    },
    checkboxWithHeading: {
      defaultValue: [
        {
          labelWithHeading: { heading: 'Heading 1', label: 'Checkbox 1' },
          state: 'default',
          isIndeterminate: false,
          isRequired: true,
        },
        {
          labelWithHeading: { heading: 'Heading 2', label: 'Checkbox 2' },
          state: 'disabled',
          isIndeterminate: false,
          isRequired: true,
        },
        {
          labelWithHeading: { heading: 'Heading 3', label: 'Checkbox 3' },
          state: 'error',
          isIndeterminate: true,
          isRequired: true,
        },
      ],
    },
  },
};

function newCheckboxState(state: boolean | 'indeterminate') {
  return state === 'indeterminate' ? true : !state;
}

export const Default = (args: CheckboxGroupProps) => {
  const [checkbox1State, setCheckbox1State] = useState<boolean | 'indeterminate'>(true);
  const [checkbox2State, setCheckbox2State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox3State, setCheckbox3State] = useState<boolean | 'indeterminate'>('indeterminate');
  const [checkbox4State, setCheckbox4State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox5State, setCheckbox5State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox6State, setCheckbox6State] = useState<boolean | 'indeterminate'>(false);

  return (
    <CheckboxGroup {...args}>
      <Checkbox label="Checkbox 1" checked={checkbox1State} onCheckedChange={setCheckbox1State} />
      <Checkbox label="Checkbox 2" checked={checkbox2State} onCheckedChange={setCheckbox2State} />
      <Checkbox label="Checkbox 3" checked={checkbox3State} onCheckedChange={setCheckbox3State} />
      <Checkbox heading="Checkbox" label="with heading" checked={checkbox4State} onCheckedChange={setCheckbox4State} />
      <Checkbox
        heading="Disabled checkbox"
        label="with heading"
        checked={checkbox5State}
        onCheckedChange={setCheckbox5State}
        disabled
      />
      <Checkbox
        heading="Checkbox"
        label="with error"
        checked={checkbox6State}
        onCheckedChange={setCheckbox6State}
        hasError
      />
    </CheckboxGroup>
  );
};
