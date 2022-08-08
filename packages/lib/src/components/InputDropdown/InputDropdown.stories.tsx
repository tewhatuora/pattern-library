import { useEffect, useRef, useState } from 'react';

import { InputDropdown, InputDropdownProps } from './InputDropdown';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputDropdown.docs.mdx';

export default {
  title: 'Input/InputDropdown',
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
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
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
