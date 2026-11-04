import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useArgs } from 'storybook/preview-api';

import { InputField, InputFieldProps } from './InputField';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/InputField',
  component: InputField,
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
  },
  argTypes: {
    'aria-label': { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    onBlur: { control: false },
    onChange: { control: false },
    onFocus: { control: false },
    className: { control: false },
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
    error: {
      control: {
        type: 'boolean',
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
    type: {
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
      control: { type: 'select' },
    },
  },
  args: {
    // InputField has no label of its own, so name it for assistive technology
    'aria-label': 'Example field',
    name: 'example',
    type: 'text',
    value: undefined,
  },
};

// Disabled fields are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

const longValue = 'A long value that is wider than the field, to show how the text is cut off or wraps onto more lines';

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px" title="States">
      <Variant label="Empty, with placeholder">
        <InputField aria-label="Empty" name="overview_empty" placeholder="Placeholder" />
      </Variant>
      <Variant label="Filled">
        <InputField aria-label="Filled" defaultValue="Filled" name="overview_filled" />
      </Variant>
      <Variant label="Error">
        <InputField aria-label="Error" defaultValue="Filled" error name="overview_error" />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputField aria-label="Disabled" defaultValue="Filled" disabled name="overview_disabled" />
        </div>
      </Variant>
      <Variant label="Required">
        <InputField aria-label="Required" name="overview_required" required />
      </Variant>
      <Variant label="Clearable, filled">
        <InputField aria-label="Clearable" clearable defaultValue="Clearable" name="overview_clearable" />
      </Variant>
    </Variants>
    <Variants minWidth="240px" title="Types">
      <Variant label="email">
        <InputField aria-label="Email" defaultValue="name@example.com" name="overview_email" type="email" />
      </Variant>
      <Variant label="number">
        <InputField aria-label="Number" defaultValue="42" name="overview_number" type="number" />
      </Variant>
      <Variant label="password">
        <InputField aria-label="Password" defaultValue="Password1234" name="overview_password" type="password" />
      </Variant>
      <Variant label="search, clearable">
        <InputField aria-label="Search" clearable defaultValue="Search term" name="overview_search" type="search" />
      </Variant>
      <Variant label="tel">
        <InputField aria-label="Phone" defaultValue="021 123 4567" name="overview_tel" type="tel" />
      </Variant>
      <Variant label="url">
        <InputField aria-label="Website" defaultValue="https://example.com" name="overview_url" type="url" />
      </Variant>
    </Variants>
    <Variants minWidth="240px" title="Multiline">
      <Variant label="Default rows">
        <InputField aria-label="Multiline" multiline name="overview_multiline" placeholder="Placeholder" />
      </Variant>
      <Variant label="rows={8}, clearable">
        <InputField
          aria-label="Multiline with eight rows"
          clearable
          defaultValue="Several lines of text"
          multiline
          name="overview_multiline_rows"
          rows={8}
        />
      </Variant>
      <Variant label="Error">
        <InputField
          aria-label="Multiline error"
          defaultValue="Filled"
          error
          multiline
          name="overview_multiline_error"
        />
      </Variant>
    </Variants>
    <Variants minWidth="240px" title="Long content">
      <Variant label="Single line">
        <InputField aria-label="Long value" clearable defaultValue={longValue} name="overview_long" />
      </Variant>
      <Variant label="Multiline">
        <InputField
          aria-label="Long multiline value"
          defaultValue={longValue}
          multiline
          name="overview_long_multiline"
          rows={3}
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

export const Default = (args: InputFieldProps) => {
  const [, updateArgs] = useArgs();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (args.value !== undefined) {
      updateArgs({ value: e.target.value });
    }
    args.onChange?.(e);
  };
  return <InputField {...args} onChange={handleChange} />;
};
export const WithPlaceholder = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} placeholder="Placeholder" value={value} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputFieldProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState('Focus');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputField {...args} ref={ref} value={value} onChange={handleChange} />;
};
export const Filled = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};
export const Error = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} error value={value} onChange={handleChange} />;
};
export const Disabled = (args: InputFieldProps) => {
  const [value, setValue] = useState('Filled');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} disabled value={value} onChange={handleChange} />;
};
export const Clearable = (args: InputFieldProps) => {
  const [value, setValue] = useState('Clearable');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputField {...args} clearable value={value} onChange={handleChange} />;
};
export const OnFocusAndBlurEvent = (args: InputFieldProps) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputField {...args} name="FocusAndBlur" value={value} onChange={handleChange} />;
};
