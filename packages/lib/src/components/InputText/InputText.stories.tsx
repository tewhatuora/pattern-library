import { useEffect, useRef, useState } from 'react';

import { InputText, InputTextProps } from './InputText';
import icons from '../Icon/icons';
import Docs from './InputText.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Forms/InputText',
  component: InputText,
  argTypes: {
    id: { control: false },
    name: { control: false },
    options: { control: false },
    onChange: { control: false },
    onTertiaryLabelClick: { control: false },
    label: {
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    subheading: {
      defaultValue: 'Subheading',
      control: {
        type: 'text',
      },
    },
    helperText: {
      defaultValue: 'Helper text',
      control: {
        type: 'text',
      },
    },
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
    type: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};
export const Default = (args: InputTextProps) => {
  return <InputText {...args} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputTextProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputText {...args} defaultValue="Focus" ref={ref} />;
};

export const Filled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Error = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} error value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} disabled value={value} onChange={(e) => setValue(e.target.value)} />;
};
