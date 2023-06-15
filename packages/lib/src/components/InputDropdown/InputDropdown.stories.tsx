import { FocusEvent, useEffect, useRef, useState } from 'react';

import { InputDropdown, InputDropdownProps } from './InputDropdown';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputDropdown.docs.mdx';

export default {
  title: 'Forms/InputDropdown',
  component: InputDropdown,
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
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const options = [
  {
    value: '',
    label: '',
  },
  {
    value: '1',
    label: 'Option one',
  },
  {
    value: '2',
    label: 'Option two',
  },
  {
    value: 'filled',
    label: 'Filled',
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
];

export const Default = (args: InputDropdownProps) => {
  const [value, setValue] = useState(undefined);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <InputDropdown {...args} name="select_1" options={options} value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputDropdownProps) => {
  const ref = useRef<HTMLSelectElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <InputDropdown {...args} name="select_2" options={options} placeholder="Filled" ref={ref} />;
};

export const Filled = (args: InputDropdownProps) => {
  const [value, setValue] = useState('filled');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <InputDropdown {...args} name="select_3" options={options} value={value} onChange={handleChange} />;
};

export const Error = (args: InputDropdownProps) => {
  const [value, setValue] = useState('filled');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <InputDropdown
      {...args}
      errorMessage="Error message"
      name="select_4"
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};

export const Disabled = (args: InputDropdownProps) => {
  const [value, setValue] = useState('filled');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <InputDropdown {...args} disabled name="select_5" options={options} value={value} onChange={handleChange} />;
};

export const OnFocusAndBlurEvent = (args: InputDropdownProps) => {
  const [value, setValue] = useState('filled');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };

  return (
    <InputDropdown
      {...args}
      name="select_6"
      options={options}
      value={value}
      onChange={handleChange}
      onSelectBlur={handleBlur}
      onSelectFocus={handleFocus}
    />
  );
};
