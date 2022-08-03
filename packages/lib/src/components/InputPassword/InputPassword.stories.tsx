import { useEffect, useRef, useState } from 'react';

import icons from '../Icon/icons';

import { InputPassword, InputPasswordProps } from './InputPassword';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputPassword.docs.mdx';

export default {
  title: 'Components/InputPassword',
  component: InputPassword,

  argTypes: {
    id: {
      control: {
        type: 'text',
      },
    },
    name: {
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
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Password',
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
    helperText: {
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
      defaultValue: 'left',
    },
  },
  parameters: {
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
export const Refs = (args: InputPasswordProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <InputPassword {...args} ref={ref} />;
};
