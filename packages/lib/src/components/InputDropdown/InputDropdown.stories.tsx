import { useEffect, useRef, useState } from 'react';

import { InputDropdown, InputDropdownProps } from './InputDropdown';
import icons from '../Icon/icons';

export default {
  title: 'Components/InputDropdown',
  component: InputDropdown,
  argTypes: {
    id: { control: false },
    name: { control: false },
    options: { control: false },
    onChange: { control: false },
    onTertiaryLabelClick: { control: false },
    label: {
      control: {
        type: 'text',
      },
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
    },
    tertiaryLabelAs: {
      defaultValue: 'button',
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
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
  },
};

export const Default = (args: InputDropdownProps) => {
  const [value, setValue] = useState(undefined);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <InputDropdown
      {...args}
      options={[
        {
          value: '1',
          label: 'Option one',
        },
        {
          value: '2',
          label: 'Option two',
        },
        {
          value: '3',
          label: 'Option three (disabled)',
          disabled: true,
        },
        {
          value: '4',
          label: 'Option four',
        },
      ]}
      value={value}
      onChange={handleChange}
    />
  );
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputDropdownProps) => {
  const ref = useRef<HTMLSelectElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <InputDropdown
      {...args}
      options={[
        {
          value: 1,
          label: 'Option one',
        },
        {
          value: 2,
          label: 'Option two',
        },
        {
          value: '3',
          label: 'Option three',
        },
      ]}
      placeholder="Focused by default using forwardRef"
      ref={ref}
    />
  );
};
