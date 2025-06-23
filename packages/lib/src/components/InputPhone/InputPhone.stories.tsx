import { FocusEvent, useEffect, useRef, useState } from 'react';

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

export const Default = (args: InputPhoneProps) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange: InputPhoneOnChangeFn = (value: string | undefined) => {
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
export const WithFocus = (args: InputPhoneProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputPhone {...args} ref={ref} value="+6421123456" />;
};

export const Filled = (args: InputPhoneProps) => <InputPhone {...args} value="+6421123456" />;
export const USExample = (args: InputPhoneProps) => <InputPhone {...args} value="+1(415) 555-1234" />;
export const InternationalExample = (args: InputPhoneProps) => <InputPhone {...args} value="ZZ 123456" />;
export const Error = (args: InputPhoneProps) => (
  <InputPhone {...args} errorMessage="Please enter a valid phone number" value="+6421123456" />
);
export const Disabled = (args: InputPhoneProps) => <InputPhone {...args} disabled value="+6421123456" />;

export const OnFocusAndBlurEvent = (args: InputPhoneProps) => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };
  return <InputPhone {...args} value="+6421123456" onBlur={handleBlur} onFocus={handleFocus} />;
};
