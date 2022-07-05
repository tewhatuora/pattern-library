import { useState } from 'react';

import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import DocsPage from '../../../utils/DocsPage';

import Docs from './CheckboxGroup.docs.mdx';

export default {
  title: 'Components/CheckBoxGroup',
  component: CheckboxGroup,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: CheckboxGroupProps) => {
  const [checkbox1State, setCheckbox1State] = useState<boolean | 'indeterminate'>(true);
  const [checkbox2State, setCheckbox2State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox3State, setCheckbox3State] = useState<boolean | 'indeterminate'>('indeterminate');
  const [checkbox4State, setCheckbox4State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox5State, setCheckbox5State] = useState<boolean | 'indeterminate'>(false);
  const [checkbox6State, setCheckbox6State] = useState<boolean | 'indeterminate'>(false);

  return (
    <CheckboxGroup {...args}>
      <Checkbox checked={!!checkbox1State} id="checkbox_1" label="Checkbox 1" onCheckedChange={setCheckbox1State} />
      <Checkbox checked={!!checkbox2State} id="checkbox_2" label="Checkbox 2" onCheckedChange={setCheckbox2State} />
      <Checkbox checked={!!checkbox3State} id="checkbox_4" label="Checkbox 3" onCheckedChange={setCheckbox3State} />
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
        hasError
        heading="Checkbox"
        id="checkbox_6"
        label="with error"
        onCheckedChange={setCheckbox6State}
      />
    </CheckboxGroup>
  );
};
