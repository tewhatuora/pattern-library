import { ChangeEvent, FocusEvent, useEffect, useRef } from 'react';
import { useArgs } from 'storybook/preview-api';

import icons from '../Icon/icons';

import { InputPassword, InputPasswordProps } from './InputPassword';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputPassword.docs.mdx';

export default {
  title: 'Patterns/InputPassword',
  component: InputPassword,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    onChange: { control: false },
    onBlur: { control: false },
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
    autoComplete: {
      options: ['current-password', 'new-password', 'off'],
      control: { type: 'select' },
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
    tertiaryLabelIconPosition: 'left',
    subheading: 'Subheading',
    helperText: 'Helper text',
    value: undefined,
  },
  parameters: {
    controls: {
      // `as` is in the props type but InputPassword doesn't use it
      exclude: ['as', 'labelProps', 'descriptionProps', 'errorMessageProps'],
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
        <InputPassword
          autoComplete="off"
          helperText="Helper text"
          label="Password"
          name="overview_empty"
          placeholder="Placeholder"
        />
      </Variant>
      <Variant label="Filled (hidden)">
        <InputPassword autoComplete="off" defaultValue="Password1234" label="Password" name="overview_filled" />
      </Variant>
      <Variant label="Error message">
        <InputPassword
          autoComplete="off"
          defaultValue="Password1234"
          errorMessage="Your email or password is incorrect"
          label="Password"
          name="overview_error"
        />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputPassword
            autoComplete="off"
            defaultValue="Password1234"
            disabled
            label="Password"
            name="overview_disabled"
          />
        </div>
      </Variant>
      <Variant label="Required">
        <InputPassword autoComplete="off" label="Password" name="overview_required" required />
      </Variant>
      <Variant label="Clearable, filled">
        <InputPassword
          autoComplete="off"
          clearable
          defaultValue="Password1234"
          label="Password"
          name="overview_clearable"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Label parts">
      <Variant label="Subheading and helper text">
        <InputPassword
          autoComplete="off"
          helperText="At least 12 characters"
          label="Password"
          name="overview_subheading"
          subheading="Choose a new password"
        />
      </Variant>
      <Variant label="Show button, icon left">
        <InputPassword autoComplete="off" label="Password" name="overview_icon_left" tertiaryLabelIcon="password" />
      </Variant>
      <Variant label="Show button, icon right">
        <InputPassword
          autoComplete="off"
          label="Password"
          name="overview_icon_right"
          tertiaryLabelIcon="password"
          tertiaryLabelIconPosition="right"
        />
      </Variant>
      <Variant label="Show button with tooltip">
        <InputPassword
          autoComplete="off"
          label="Password"
          name="overview_tooltip"
          tertiaryLabelTooltip="Show the password as plain text"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Long content">
      <Variant label="Long label and messages">
        <InputPassword
          autoComplete="off"
          defaultValue="A very long passphrase that is wider than the field"
          errorMessage="A long error message that explains what went wrong and how to fix it, over several lines"
          helperText="Long helper text that describes what to enter in the field, wrapping onto more lines"
          label="A long label that wraps onto a second line when space runs out"
          name="overview_long"
          subheading="A long subheading that also wraps onto more lines on narrow screens"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

/** The playground: every prop has a control. Set `value` to make the field controlled; typing then updates it. */
export const Default = (args: InputPasswordProps) => {
  const [, updateArgs] = useArgs();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (args.value !== undefined) {
      updateArgs({ value: e.target.value });
    }
    args.onChange?.(e);
  };
  return <InputPassword {...args} onChange={handleChange} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputPasswordProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (ref?.current) {
      ref.current.focus();
    }
  }, [ref]);

  return <InputPassword {...args} defaultValue="Password1234" ref={ref} />;
};

export const Filled = (args: InputPasswordProps) => <InputPassword {...args} defaultValue="Password1234" />;
export const Error = (args: InputPasswordProps) => (
  <InputPassword {...args} defaultValue="Password1234" errorMessage="Your email or password is incorrect" />
);
export const Disabled = (args: InputPasswordProps) => <InputPassword {...args} defaultValue="Password1234" disabled />;

export const OnFocusAndBlurEvent = (args: InputPasswordProps) => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };
  return <InputPassword {...args} defaultValue="Password1234" onBlur={handleBlur} onFocus={handleFocus} />;
};
Disabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};
