import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { InputField, InputFieldProps } from './InputField';

export default {
  title: 'Transactional Components/InputField',
  component: InputField,
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
  },
  argTypes: {
    'aria-label': { control: 'text' },
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
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
    },
  },
  args: {
    // InputField has no label of its own, so name it for assistive technology
    'aria-label': 'Example field',
    type: 'text',
    value: undefined,
  },
};

export const Default = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} value={value} onChange={handleChange} />;
};
export const WithPlaceholder = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} placeholder="Placeholder" value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputFieldProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState('Focus');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputField {...args} ref={ref} value={value} onChange={handleChange} />;
};
export const Filled = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};
export const Error = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} error value={value} onChange={handleChange} />;
};
export const Disabled = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} disabled value={value} onChange={handleChange} />;
};
export const Clearable = (args: InputFieldProps) => {
  const [value, setValue] = useState('Clearable');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} clearable value={value} onChange={handleChange} />;
};
export const OnFocusAndBlurEvent = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} name="FocusAndBlur" value={value} onChange={handleChange} />;
};
