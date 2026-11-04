import { FocusEvent, useEffect, useRef, useState } from 'react';
import { useArgs } from 'storybook/preview-api';

import { InputDate, InputDateOnChangeFn, InputDateProps, InputDateValue } from './InputDate';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputDate.docs.mdx';

export default {
  title: 'Patterns/InputDate',
  component: InputDate,
  argTypes: {
    id: {
      control: 'text',
    },
    name: {
      control: 'text',
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
    errors: {
      control: {
        type: 'object',
      },
    },
    value: {
      control: {
        type: 'object',
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
      control: { type: 'text' },
    },
    tertiaryLabelAs: {
      options: ['button', 'a', 'text'],
      control: { type: 'radio' },
    },
    href: {
      control: { type: 'text' },
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
    },
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    tertiaryLabelTooltip: {
      control: { type: 'text' },
    },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    onTertiaryLabelClick: { control: false },
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    helperText: 'Helper text',
    disabled: false,
    required: false,
    showRequiredAsterisk: false,
    tertiaryLabel: 'Tertiary label',
    tertiaryLabelAs: 'button',
    href: undefined,
    tertiaryLabelIcon: '',
    tertiaryLabelIconPosition: 'left',
  },
  parameters: {
    controls: {
      // In the props type, but InputDate doesn't use them
      exclude: ['as', 'htmlFor', 'labelProps', 'descriptionProps', 'errorMessageProps', 'placeholder', 'defaultValue'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Disabled fields are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

const filled = { day: '30', month: '09', year: '2022' };

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="300px" title="States">
      <Variant label="Empty">
        <InputDate helperText="For example, 27 3 2007" label="Date of birth" name="overview_empty" />
      </Variant>
      <Variant label="Filled">
        <InputDate label="Date of birth" name="overview_filled" value={filled} />
      </Variant>
      <Variant label="Error on one field">
        <InputDate
          errors={{ day: 'Enter a day' }}
          label="Date of birth"
          name="overview_error_one"
          value={{ ...filled, day: '' }}
        />
      </Variant>
      <Variant label="Errors on all fields, with errorMessage">
        <InputDate
          errorMessage="Enter a date"
          errors={{ day: 'Enter a day', month: 'Enter a month', year: 'Enter a year' }}
          label="Date of birth"
          name="overview_error_all"
        />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputDate disabled helperText="Helper text" label="Date of birth" name="overview_disabled" value={filled} />
        </div>
      </Variant>
      <Variant label="Required">
        <InputDate label="Date of birth" name="overview_required" required />
      </Variant>
    </Variants>
    <Variants minWidth="300px" title="Label parts">
      <Variant label="Subheading and tertiary label">
        <InputDate
          label="Date of birth"
          name="overview_label_parts"
          subheading="As shown on your passport"
          tertiaryLabel="Why we ask"
          tertiaryLabelAs="button"
        />
      </Variant>
      <Variant label="Tertiary label as link, with icon">
        <InputDate
          href="#"
          label="Date of birth"
          name="overview_tertiary_link"
          tertiaryLabel="Help"
          tertiaryLabelAs="a"
          tertiaryLabelIcon="info"
        />
      </Variant>
    </Variants>
    <Variants minWidth="300px" title="Long content">
      <Variant label="Long label and messages">
        <InputDate
          errors={{ month: 'Enter a month between 1 and 12', year: 'Enter a year with four digits, for example 2007' }}
          helperText="Long helper text that describes what to enter in the fields, wrapping onto more lines"
          label="A long label that wraps onto a second line when space runs out"
          name="overview_long"
          subheading="A long subheading that also wraps onto more lines on narrow screens"
          value={{ day: '30', month: '13', year: '22' }}
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

/** The playground: every prop has a control. Set `value` to make the date controlled; typing then updates it. */
export const Default = (args: InputDateProps) => {
  const [, updateArgs] = useArgs();
  const handleChange: InputDateOnChangeFn = (value) => {
    if (args.value !== undefined) {
      updateArgs({ value });
    }
    args.onChange?.(value);
  };
  return <InputDate {...args} onChange={handleChange} />;
};
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
Disabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};

export const OnFocusAndBlurEvent = (args: InputDateProps) => {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  return <InputDate {...args} onBlur={handleBlur} onFocus={handleFocus} />;
};
