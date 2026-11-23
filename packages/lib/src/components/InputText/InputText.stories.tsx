import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useArgs } from 'storybook/preview-api';

import { InputText, InputTextProps } from './InputText';
import icons from '../Icon/icons';
import Docs from './InputText.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/InputText',
  component: InputText,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    onTertiaryLabelClick: { control: false },
    className: { control: false },
    // Label props that InputText doesn't pass on
    as: { control: false },
    htmlFor: { control: false },
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
    tertiaryLabel: {
      control: {
        type: 'text',
      },
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
      control: {
        type: 'text',
      },
    },
    type: {
      options: ['email', 'number', 'password', 'search', 'tel', 'text', 'url'],
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    helperText: 'Helper text',
    tertiaryLabel: 'Tertiary label',
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
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

// Disabled fields are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px" title="States">
      <Variant label="Empty, with placeholder">
        <InputText helperText="Helper text" label="Label" name="overview_empty" placeholder="Placeholder" />
      </Variant>
      <Variant label="Filled">
        <InputText defaultValue="Filled" helperText="Helper text" label="Label" name="overview_filled" />
      </Variant>
      <Variant label="Error message">
        <InputText
          defaultValue="Filled"
          errorMessage="Error message"
          helperText="Helper text"
          label="Label"
          name="overview_error_message"
        />
      </Variant>
      <Variant label="Error, no message">
        <InputText defaultValue="Filled" error helperText="Helper text" label="Label" name="overview_error" />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputText
            defaultValue="Filled"
            disabled
            errorMessage="Hidden while disabled"
            helperText="Helper text"
            label="Label"
            name="overview_disabled"
            tertiaryLabel="Tertiary label"
          />
        </div>
      </Variant>
      <Variant label="Required">
        <InputText label="Label" name="overview_required" required />
      </Variant>
      <Variant label="Required, no asterisk">
        <InputText label="Label" name="overview_required_no_asterisk" required showRequiredAsterisk={false} />
      </Variant>
      <Variant label="Clearable, filled">
        <InputText clearable defaultValue="Clearable" label="Label" name="overview_clearable" />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Label parts">
      <Variant label="Label only">
        <InputText label="Label" name="overview_label_only" />
      </Variant>
      <Variant label="Subheading">
        <InputText label="Label" name="overview_subheading" subheading="Subheading" />
      </Variant>
      <Variant label="Tertiary label as button">
        <InputText
          label="Label"
          name="overview_tertiary_button"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="button"
        />
      </Variant>
      <Variant label="Tertiary label as link">
        <InputText
          href="#"
          label="Label"
          name="overview_tertiary_link"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="a"
        />
      </Variant>
      <Variant label="Tertiary label as text">
        <InputText label="Label" name="overview_tertiary_text" tertiaryLabel="Tertiary label" tertiaryLabelAs="text" />
      </Variant>
      <Variant label="Tertiary icon left">
        <InputText
          label="Label"
          name="overview_tertiary_icon_left"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="button"
          tertiaryLabelIcon="info"
          tertiaryLabelIconPosition="left"
        />
      </Variant>
      <Variant label="Tertiary icon right">
        <InputText
          label="Label"
          name="overview_tertiary_icon_right"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="button"
          tertiaryLabelIcon="info"
          tertiaryLabelIconPosition="right"
        />
      </Variant>
      <Variant label="Tertiary label with tooltip">
        <InputText
          label="Label"
          name="overview_tertiary_tooltip"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="button"
          tertiaryLabelTooltip="Tooltip text"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Multiline">
      <Variant label="multiline">
        <InputText
          helperText="Helper text"
          label="Label"
          multiline
          name="overview_multiline"
          placeholder="Placeholder"
        />
      </Variant>
      <Variant label="multiline, error message">
        <InputText
          defaultValue="Filled"
          errorMessage="Error message"
          label="Label"
          multiline
          name="overview_multiline_error"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Long content">
      <Variant label="Everything long">
        <InputText
          clearable
          defaultValue="A long value that is wider than the field, so the text is cut off"
          errorMessage="A long error message that explains what went wrong and how to fix it, over several lines"
          helperText="Long helper text that describes what to enter in the field, wrapping onto more lines"
          label="A long label that wraps onto a second line when space runs out"
          name="overview_long"
          required
          subheading="A long subheading that also wraps onto more lines on narrow screens"
          tertiaryLabel="Long tertiary label"
          tertiaryLabelAs="button"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

/** The playground: every prop has a control. Set `value` to make the field controlled; typing then updates it. */
export const Default = (args: InputTextProps) => {
  const [, updateArgs] = useArgs();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (args.value !== undefined) {
      updateArgs({ value: e.target.value });
    }
    args.onChange?.(e);
  };

  return <InputText {...args} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputTextProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState('Focus');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputText {...args} ref={ref} value={value} onChange={handleChange} />;
};

export const Filled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Error = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} error value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} disabled value={value} onChange={(e) => setValue(e.target.value)} />;
};
Disabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};

export const Clearable = (args: InputTextProps) => {
  const [value, setValue] = useState('Clearable');
  return <InputText {...args} clearable value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const OnFocusAndBlurEvent = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <InputText {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};
