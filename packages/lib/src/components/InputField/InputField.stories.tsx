import { useEffect, useRef, useState } from 'react';

import { InputField, InputFieldProps } from './InputField';

export default {
  title: 'Forms/InputField',
  component: InputField,
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
      defaultValue: undefined,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    clearable: {
      control: {
        type: 'boolean',
      },
    },
    multiline: {
      control: {
        type: 'boolean',
      },
    },
    rows: {
      control: {
        type: 'number',
      },
      if: { arg: 'multiline' },
    },
    type: {
      defaultValue: 'text',
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
  },
};

export const Uncontrolled = (args: InputFieldProps) => {
  return <InputField {...args} />;
};

export const Controlled = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return <InputField {...args} value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputFieldProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputField {...args} placeholder="Focused by default using forwardRef" ref={ref} />;
};
