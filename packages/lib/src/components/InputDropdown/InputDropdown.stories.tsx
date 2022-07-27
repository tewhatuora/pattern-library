import { useEffect, useRef } from 'react';

import { InputDropdown, InputDropdownProps } from './InputDropdown';
import icons from '../Icon/icons';

export default {
  title: 'Components/InputDropdown',
  component: InputDropdown,
  argTypes: {
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

export const Default = (args: InputDropdownProps) => (
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
  />
);

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
