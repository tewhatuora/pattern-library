import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';

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
    onBlurEvt: { control: false },
    onChange: { control: false },
    onFocusEvt: { control: false },
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

export const Default = (args: InputFieldProps) => {
  return <InputField {...args} />;
};
export const WithPlaceholder = (args: InputFieldProps) => {
  return <InputField {...args} placeholder="Placeholder" />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputFieldProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputField {...args} defaultValue="Focus" ref={ref} />;
};
export const Filled = (args: InputFieldProps) => {
  return <InputField {...args} defaultValue="Filled" />;
};
export const Error = (args: InputFieldProps) => {
  return <InputField {...args} defaultValue="Filled" error />;
};
export const Disabled = (args: InputFieldProps) => {
  return <InputField {...args} defaultValue="Filled" disabled />;
};
export const Clearable = (args: InputFieldProps) => {
  const [value, setValue] = useState('Clearable');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} clearable value={value} onChange={handleChange} />;
};
export const OnFocusAndBlurEvent = (args: InputFieldProps) => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };
  return <InputField {...args} name="FocusAndBlur" onBlur={handleBlur} onFocus={handleFocus} />;
};
