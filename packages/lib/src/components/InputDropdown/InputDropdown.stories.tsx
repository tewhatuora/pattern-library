import { FocusEvent, useEffect, useRef, useState } from 'react';

import { expect, fn, userEvent, within } from 'storybook/test';

import { InputDropdown, InputDropdownProps } from './InputDropdown';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputDropdown.docs.mdx';

export default {
  title: 'Transactional Components/InputDropdown',
  component: InputDropdown,
  argTypes: {
    id: { control: false },
    name: { control: { type: 'text' } },
    options: { control: { type: 'object' } },
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
    showRequiredAsterisk: {
      control: {
        type: 'boolean',
      },
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
    // The stories manage the selection themselves
    value: { control: false },
    defaultValue: { control: false },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    onSelectBlur: { control: false },
    onSelectFocus: { control: false },
    onTertiaryLabelClick: { control: false },
    className: { control: false },
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    helperText: 'Helper text',
    tertiaryLabel: 'Tertiary label',
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
    name: 'select_1',
    error: false,
    disabled: false,
    required: false,
    showRequiredAsterisk: true,
  },
  parameters: {
    controls: {
      // ARIA wiring props, and label props the select doesn't pass on
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps', 'as', 'htmlFor'],
    },
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

// Disabled fields are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

const regions = [
  { value: 'akl', label: 'Auckland' },
  { value: 'wlg', label: 'Wellington' },
  { value: 'chc', label: 'Christchurch' },
  { value: 'other', label: 'Somewhere else', disabled: true },
];

// Each dropdown gets its own id and name, as they're shown together
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px">
      <Variant label="Placeholder">
        <InputDropdown
          id="dd-placeholder"
          label="Region"
          name="dd-placeholder"
          options={regions}
          placeholder="Select a region"
        />
      </Variant>
      <Variant label="Filled">
        <InputDropdown defaultValue="wlg" id="dd-filled" label="Region" name="dd-filled" options={regions} />
      </Variant>
      <Variant label="Helper text">
        <InputDropdown
          helperText="Where you live most of the time"
          id="dd-helper"
          label="Region"
          name="dd-helper"
          options={regions}
          placeholder="Select a region"
        />
      </Variant>
      <Variant label="Subheading, tertiary label, required">
        <InputDropdown
          id="dd-required"
          label="Region"
          name="dd-required"
          options={regions}
          placeholder="Select a region"
          required
          subheading="Where you live"
          tertiaryLabel="Why we ask"
          tertiaryLabelAs="text"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="States">
      <Variant label="Error message">
        <InputDropdown
          errorMessage="Select a region"
          id="dd-error"
          label="Region"
          name="dd-error"
          options={regions}
          placeholder="Select a region"
        />
      </Variant>
      <Variant label="Error, no message">
        <InputDropdown
          defaultValue="akl"
          error
          id="dd-error-flag"
          label="Region"
          name="dd-error-flag"
          options={regions}
        />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputDropdown
            defaultValue="akl"
            disabled
            id="dd-disabled"
            label="Region"
            name="dd-disabled"
            options={regions}
          />
        </div>
      </Variant>
      <Variant label="Disabled, placeholder">
        <div data-disabled-example>
          <InputDropdown
            disabled
            helperText="Not available yet"
            id="dd-disabled-placeholder"
            label="Region"
            name="dd-disabled-placeholder"
            options={regions}
            placeholder="Select a region"
          />
        </div>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long content">
      <Variant label="Long label and option">
        <InputDropdown
          defaultValue="long"
          id="dd-long"
          label="Which of our clinics would you like to go to for your appointment?"
          name="dd-long"
          options={[
            { value: 'long', label: 'The Wellington Regional Hospital outpatient clinic, Newtown' },
            { value: 'short', label: 'Kenepuru' },
          ]}
        />
      </Variant>
      <Variant label="Long placeholder">
        <InputDropdown
          id="dd-long-placeholder"
          label="Clinic"
          name="dd-long-placeholder"
          options={regions}
          placeholder="Select the clinic you would like to go to for your appointment"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

export const Default = (args: InputDropdownProps) => {
  const [value, setValue] = useState(undefined);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return <InputDropdown {...args} options={args.options ?? options} value={value} onChange={handleChange} />;
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

export const Uncontrolled = (args: InputDropdownProps) => (
  <InputDropdown {...args} defaultValue="2" name="select_7" options={options} />
);
// Explicit handlers: Storybook fails a play function that calls an implicit action
Uncontrolled.args = { onBlur: fn(), onChange: fn(), onFocus: fn(), onSelectBlur: fn(), onSelectFocus: fn() };
Uncontrolled.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const select = within(canvasElement).getByRole('combobox');

  // Starts on defaultValue, and can still be changed without a value/onChange pair
  await expect(select).toHaveValue('2');
  await userEvent.selectOptions(select, '4');
  await expect(select).toHaveValue('4');
};
