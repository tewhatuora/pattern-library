import { FocusEvent, useEffect, useRef, useState } from 'react';

import { InputDate, InputDateOnChangeFn, InputDateProps, InputDateValue } from './InputDate';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputDate.docs.mdx';

export default {
  title: 'Forms/InputDate',
  component: InputDate,
  argTypes: {
    id: {
      control: false,
    },
    name: {
      control: false,
    },
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    showRequiredAsterisk: {
      control: {
        type: 'boolean',
      },
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
      control: { type: 'text' },
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

export const Default = (args: InputDateProps) => <InputDate {...args} />;
Default.argTypes = {
  errorMessage: {
    control: {
      type: 'text',
    },
  },
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputDateProps) => {
  const day = useRef<HTMLInputElement | null>(null);
  const month = useRef<HTMLInputElement | null>(null);
  const year = useRef<HTMLInputElement | null>(null);
  const ref = useRef({ day, month, year });

  useEffect(() => {
    if (ref?.current) {
      if (ref.current.day?.current) {
        ref.current.day?.current.focus();
      }
    }
  }, [ref]);

  return <InputDate id="input_date_1" {...args} ref={ref} />;
};

export const Filled = (args: InputDateProps) => {
  const [day, setDay] = useState<string | undefined>('30');
  const [month, setMonth] = useState<string | undefined>('09');
  const [year, setYear] = useState<string | undefined>('2022');

  const handleChange: InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => {
    setDay(day);
    setMonth(month);
    setYear(year);
  };

  return <InputDate {...args} id="input_date_2" value={{ day, month, year }} onChange={handleChange} />;
};
export const SingleError = (args: InputDateProps) => (
  <InputDate {...args} errorMessage="Day is required" errors={{ day: 'Day is required ' }} id="input_date_3" />
);
export const FullError = (args: InputDateProps) => (
  <InputDate
    {...args}
    errorMessage="Please enter a date"
    errors={{ day: 'Day is required', month: 'Month is required', year: 'Year is required' }}
    id="input_date_4"
  />
);
export const Disabled = (args: InputDateProps) => (
  <InputDate {...args} disabled id="input_date_5" value={{ day: '30', month: '09', year: '2022' }} />
);

export const OnFocusAndBlurEvent = (args: InputDateProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  return <InputDate {...args} onBlur={handleBlur} onFocus={handleFocus} />;
};
