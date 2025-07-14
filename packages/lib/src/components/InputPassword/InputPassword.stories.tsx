import { FocusEvent, useEffect, useRef, useState } from 'react';

import icons from '../Icon/icons';

import { InputPassword, InputPasswordProps } from './InputPassword';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputPassword.docs.mdx';

export default {
  title: 'Forms/InputPassword',
  component: InputPassword,
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
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
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
    },
  },
  args: {
    label: 'Label',
    tertiaryLabelIconPosition: 'left',
    tertiaryLabelAs: 'button',
    subheading: 'Subheading',
    helperText: 'Helper text',
    value: undefined,
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

export const Default = (args: InputPasswordProps) => {
  const [value, setValue] = useState('');
  return <InputPassword {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputPasswordProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <InputPassword {...args} defaultValue="Password1234" ref={ref} />;
};

export const Filled = (args: InputPasswordProps) => <InputPassword {...args} defaultValue="Password1234" />;
export const Error = (args: InputPasswordProps) => (
  <InputPassword {...args} defaultValue="Password1234" errorMessage="Your email or password is incorrect" />
);
export const Disabled = (args: InputPasswordProps) => <InputPassword {...args} defaultValue="Password1234" disabled />;

export const OnFocusAndBlurEvent = (args: InputPasswordProps) => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };
  return <InputPassword {...args} defaultValue="Password1234" onBlur={handleBlur} onFocus={handleFocus} />;
};
