import { useEffect, useRef, useState } from 'react';

import { InputSearch, InputSearchProps } from './InputSearch';

export default {
  title: 'Components/InputSearch',
  component: InputSearch,
};

export const Uncontrolled = (args: InputSearchProps) => <InputSearch {...args} />;

export const Controlled = (args: InputSearchProps) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <InputSearch {...args} value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputSearchProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputSearch {...args} ref={ref} />;
};
Refs.argTypes = {
  placeholder: {
    defaultValue: 'Focused by default using forwardRef',
  },
};
