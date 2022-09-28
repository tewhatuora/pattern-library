import { useEffect, useRef, useState } from 'react';

import { InputPhone, InputPhoneOnChangeFn, InputPhoneProps } from './InputPhone';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputPhone.docs.mdx';

export default {
  title: 'Forms/InputPhone',
  component: InputPhone,
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
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
  parameters: {
    controls: {
      exclude: ['htmlFor', 'labelProps', 'descriptionProps', 'errorMessageProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Uncontrolled = (args: InputPhoneProps) => <InputPhone {...args} />;

export const Controlled = (args: InputPhoneProps) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange: InputPhoneOnChangeFn = (value: string) => {
    setValue(value);
  };

  return <InputPhone {...args} value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputPhoneProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputPhone {...args} ref={ref} />;
};
