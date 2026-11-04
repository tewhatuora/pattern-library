import { FocusEvent, useEffect, useRef, useState } from 'react';

import { InputPhone, InputPhoneOnChangeFn, InputPhoneProps } from './InputPhone';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputPhone.docs.mdx';

export default {
  title: 'Transactional Components/InputPhone',
  component: InputPhone,
  argTypes: {
    id: { control: false },
    name: {
      control: {
        type: 'text',
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
    placeholder: {
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
    clearable: {
      control: {
        type: 'boolean',
      },
    },
    international: {
      control: {
        type: 'boolean',
      },
    },
    defaultCountry: {
      options: ['NZ', 'AU', 'US', 'CA', 'GB'],
      control: { type: 'select' },
    },
    tertiaryLabel: {
      control: {
        type: 'text',
      },
    },
    tertiaryLabelAs: {
      options: ['a', 'button', 'text'],
      control: { type: 'radio' },
    },
    href: {
      if: { arg: 'tertiaryLabelAs', eq: 'a' },
      control: { type: 'text' },
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
      control: {
        type: 'text',
      },
    },
    // The stories set the number themselves
    value: { control: false },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    onTertiaryLabelClick: { control: false },
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    helperText: 'Helper text',
    tertiaryLabel: 'Tertiary label',
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
    name: 'phone',
    defaultCountry: 'NZ',
    disabled: false,
    required: false,
    showRequiredAsterisk: true,
    clearable: false,
    international: false,
  },
  parameters: {
    controls: {
      // ARIA wiring props, and props InputPhone ignores (`error` comes from `errorMessage`; use `value` not `defaultValue`)
      exclude: ['as', 'htmlFor', 'labelProps', 'descriptionProps', 'errorMessageProps', 'error', 'defaultValue'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Each field gets its own id and name, as they're shown together
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="280px">
      <Variant label="Empty">
        <InputPhone id="phone-empty" label="Mobile number" name="phone-empty" />
      </Variant>
      <Variant label="Placeholder and helper text">
        <InputPhone
          helperText="We'll text you a code"
          id="phone-placeholder"
          label="Mobile number"
          name="phone-placeholder"
          placeholder="021 123 4567"
        />
      </Variant>
      <Variant label="Filled">
        <InputPhone id="phone-filled" label="Mobile number" name="phone-filled" value="+6421123456" />
      </Variant>
      <Variant label="Subheading, tertiary label, required">
        <InputPhone
          id="phone-required"
          label="Mobile number"
          name="phone-required"
          required
          subheading="So we can remind you"
          tertiaryLabel="Why we ask"
          tertiaryLabelAs="text"
        />
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Countries and formats">
      <Variant label="Another country">
        <InputPhone id="phone-us" label="Mobile number" name="phone-us" value="+14155551234" />
      </Variant>
      <Variant label="International format">
        <InputPhone
          id="phone-international"
          international
          label="Mobile number"
          name="phone-international"
          value="+6421123456"
        />
      </Variant>
      <Variant label="Clearable">
        <InputPhone clearable id="phone-clearable" label="Mobile number" name="phone-clearable" value="+6421123456" />
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="States">
      <Variant label="Error">
        <InputPhone
          errorMessage="Enter a valid phone number"
          id="phone-error"
          label="Mobile number"
          name="phone-error"
          value="+64211"
        />
      </Variant>
      <Variant label="Disabled">
        <InputPhone disabled id="phone-disabled" label="Mobile number" name="phone-disabled" value="+6421123456" />
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long content">
      <Variant label="Long label">
        <InputPhone
          helperText="We'll only use this to send you reminders about your appointments and results"
          id="phone-long"
          label="Which mobile number should we text appointment reminders to?"
          name="phone-long"
          value="+6421123456"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
