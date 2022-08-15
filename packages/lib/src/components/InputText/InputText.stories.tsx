import { useEffect, useRef, useState } from 'react';

import { InputText, InputTextProps } from './InputText';
import icons from '../Icon/icons';
import Docs from './InputText.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Input/InputText',
  component: InputText,
  argTypes: {
    id: { control: false },
    name: { control: false },
    options: { control: false },
    onChange: { control: false },
    onTertiaryLabelClick: { control: false },
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

export const Uncontrolled = (args: InputTextProps) => {
  return <InputText {...args} />;
};

export const Controlled = (args: InputTextProps) => {
  const [value, setValue] = useState('');
  return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputTextProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputText {...args} ref={ref} />;
};
