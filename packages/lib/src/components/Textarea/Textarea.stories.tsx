import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import { useArgs } from 'storybook/preview-api';

import { Textarea } from './Textarea';
import { InputTextProps } from '../InputText/InputText';
import icons from '../Icon/icons';
import Docs from './Textarea.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Textarea',
  component: Textarea,
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
    rows: {
      control: {
        type: 'number',
      },
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
  },
  args: {
    label: 'Label',
    subheading: 'Subheading',
    helperText: 'Helper text',
    value: 'Value',
    tertiaryLabel: 'Tertiary label',
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
  },
  parameters: {
    controls: {
      // Textarea is always multiline, and it always renders a textarea, so `type` has no effect
      exclude: ['multiline', 'type', 'labelProps', 'descriptionProps', 'errorMessageProps'],
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

const longValue =
  'A long value that wraps onto several lines. Textareas are for answers longer than a line, such as a ' +
  'description of a problem, so the text keeps wrapping as the person types, and the field can be resized.';

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px" title="States">
      <Variant label="Empty, with placeholder">
        <Textarea helperText="Helper text" label="Label" name="overview_empty" placeholder="Placeholder" />
      </Variant>
      <Variant label="Filled">
        <Textarea defaultValue="Filled" helperText="Helper text" label="Label" name="overview_filled" />
      </Variant>
      <Variant label="Error message">
        <Textarea
          defaultValue="Filled"
          errorMessage="Error message"
          helperText="Helper text"
          label="Label"
          name="overview_error"
        />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <Textarea defaultValue="Filled" disabled helperText="Helper text" label="Label" name="overview_disabled" />
        </div>
      </Variant>
      <Variant label="Required">
        <Textarea label="Label" name="overview_required" required />
      </Variant>
      <Variant label="Clearable, filled">
        <Textarea clearable defaultValue="Clearable" label="Label" name="overview_clearable" />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Label parts">
      <Variant label="Subheading and tertiary label">
        <Textarea
          label="Label"
          name="overview_label_parts"
          subheading="Subheading"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="button"
        />
      </Variant>
      <Variant label="Tertiary label as text, with icon">
        <Textarea
          label="Label"
          name="overview_tertiary_text"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="text"
          tertiaryLabelIcon="info"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Rows">
      <Variant label="Default">
        <Textarea label="Label" name="overview_rows_default" />
      </Variant>
      <Variant label="rows={10}">
        <Textarea label="Label" name="overview_rows_10" rows={10} />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Long content">
      <Variant label="Long value">
        <Textarea defaultValue={longValue} label="Label" name="overview_long_value" />
      </Variant>
      <Variant label="Long label and messages">
        <Textarea
          errorMessage="A long error message that explains what went wrong and how to fix it, over several lines"
          helperText="Long helper text that describes what to enter in the field, wrapping onto more lines"
          label="A long label that wraps onto a second line when space runs out"
          name="overview_long_label"
          subheading="A long subheading that also wraps onto more lines on narrow screens"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

/** The playground: every prop has a control. Typing updates the `value` control. */
export const Default = (args: InputTextProps) => {
  const [, updateArgs] = useArgs();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (args.value !== undefined) {
      updateArgs({ value: e.target.value });
    }
    args.onChange?.(e);
  };
  return <Textarea {...args} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputTextProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState('Focus');
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <Textarea {...args} ref={ref} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Filled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Error = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} error value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Disabled = (args: InputTextProps) => {
  const [value, setValue] = useState('Filled');
  return <Textarea {...args} disabled value={value} onChange={(e) => setValue(e.target.value)} />;
};
Disabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};

export const Clearable = (args: InputTextProps) => {
  const [value, setValue] = useState('Clearable');
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return <Textarea {...args} clearable value={value} onChange={handleChange} />;
};

export const OnFocusAndBlurEvent = (args: InputTextProps) => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };
  return <Textarea {...args} onBlur={handleBlur} onFocus={handleFocus} />;
};
