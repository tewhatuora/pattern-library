import { useState } from 'react';

import { InputSearch, InputSearchProps } from './InputSearch';

export default {
  title: 'Components/InputSearch',
  component: InputSearch,
  // argTypes: {},
};

export const Uncontrolled = (args: InputSearchProps) => <InputSearch {...args} />;

export const Controlled = (args: InputSearchProps) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <InputSearch {...args} value={value} onChange={handleChange} />;
};
