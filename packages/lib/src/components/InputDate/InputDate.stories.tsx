import { useEffect, useRef, useState } from 'react';

import { InputDate, InputDateOnChangeFn, InputDateProps, InputDateValue } from './InputDate';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputDate.docs.mdx';

export default {
  title: 'Input/InputDate',
  component: InputDate,
  argTypes: {
    id: {
      control: false,
    },
    name: {
      control: false,
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

export const Uncontrolled = (args: InputDateProps) => <InputDate {...args} />;
Uncontrolled.argTypes = {
  errorMessage: {
    control: {
      type: 'text',
    },
  },
};

export const Controlled = (args: InputDateProps) => {
  const [day, setDay] = useState<string | undefined>('');
  const [month, setMonth] = useState<string | undefined>('');
  const [year, setYear] = useState<string | undefined>('');

  const handleChange: InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => {
    setDay(day);
    setMonth(month);
    setYear(year);
  };

  const errors = {
    day: !day || parseInt(day, 10) < 1 || parseInt(day, 10) > 31 ? 'Day is wrong' : undefined,
    month: !month || parseInt(month, 10) < 1 || parseInt(month, 10) > 12 ? 'Month is wrong' : undefined,
    year: !year || year.length > 4 ? 'Year is wrong' : undefined,
  };

  let errorMessage = undefined;

  if (args.required) {
    if (!day && !month && !year) {
      errorMessage = 'Day, month & year are required';
    } else {
      errorMessage = errors.day || errors.month || errors.year;
    }
  }

  return (
    <InputDate
      {...args}
      errorMessage={errorMessage}
      errors={errorMessage ? errors : undefined}
      name="date"
      value={{ day, month, year }}
      onChange={handleChange}
    />
  );
};
Controlled.argTypes = {
  required: {
    control: {
      type: 'boolean',
    },
  },
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const Refs = (args: InputDateProps) => {
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

  return <InputDate {...args} ref={ref} />;
};
