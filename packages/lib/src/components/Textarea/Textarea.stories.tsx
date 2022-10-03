import { useEffect, useRef, useState } from 'react';

import { Textarea } from './Textarea';
import { InputTextProps } from '../InputText/InputText';
import icons from '../Icon/icons';
import Docs from './Textarea.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
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
      exclude: ['multiline', 'labelProps', 'descriptionProps', 'errorMessageProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};
export const Default = (args: InputTextProps) => {
  return <Textarea {...args} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputTextProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <Textarea {...args} defaultValue="Focus" ref={ref} />;
};

export const Filled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Error = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} error value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} disabled value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Clearable = (args: InputTextProps) => {
  const [value, setValue] = useState('Clearable');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return <Textarea {...args} clearable value={value} onChange={handleChange} />;
};
