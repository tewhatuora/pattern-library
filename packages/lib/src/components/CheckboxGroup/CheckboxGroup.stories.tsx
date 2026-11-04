import { useState } from 'react';

import icons from '../Icon/icons';

import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './CheckboxGroup.docs.mdx';

export default {
  title: 'Transactional Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
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
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    showRequiredAsterisk: {
      control: { type: 'boolean' },
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
      control: { type: 'text' },
    },
    onTertiaryLabelClick: { control: false },
    id: { control: false },
    children: { control: false },
  },
  args: {
    label: 'Label',
    helperText: 'Helper text',
    disabled: false,
    error: false,
    required: false,
    showRequiredAsterisk: true,
    tertiaryLabelAs: 'button',
    tertiaryLabelIconPosition: 'left',
  },
  parameters: {
    controls: {
      // ARIA wiring props, and label props the group ignores
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps', 'as', 'htmlFor'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Checkbox ids must be unique on the page, so each group in the Overview gets its own prefix
// Disabled fields are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

const checkboxes = (prefix: string) => [
  <Checkbox checked id={`${prefix}-email`} key="email" label="Email" />,
  <Checkbox checked={false} id={`${prefix}-phone`} key="phone" label="Phone" />,
  <Checkbox checked={false} heading="Post" id={`${prefix}-post`} key="post" label="To your postal address" />,
];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px">
      <Variant label="Label and helper text">
        <CheckboxGroup helperText="Choose all that apply" label="Contact methods">
          {checkboxes('cbg-default')}
        </CheckboxGroup>
      </Variant>
      <Variant label="Label only">
        <CheckboxGroup label="Contact methods">{checkboxes('cbg-label-only')}</CheckboxGroup>
      </Variant>
      <Variant label="Subheading and tertiary label">
        <CheckboxGroup
          label="Contact methods"
          subheading="How should we reach you?"
          tertiaryLabel="Optional"
          tertiaryLabelAs="text"
        >
          {checkboxes('cbg-subheading')}
        </CheckboxGroup>
      </Variant>
      <Variant label="Required">
        <CheckboxGroup helperText="Choose at least one" label="Contact methods" required>
          {checkboxes('cbg-required')}
        </CheckboxGroup>
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="States">
      <Variant label="Error">
        <CheckboxGroup
          error
          errorMessage="Choose at least one contact method"
          helperText="Choose all that apply"
          label="Contact methods"
        >
          {checkboxes('cbg-error')}
        </CheckboxGroup>
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <CheckboxGroup disabled helperText="Choose all that apply" label="Contact methods">
            {checkboxes('cbg-disabled')}
          </CheckboxGroup>
        </div>
      </Variant>
      <Variant label="Mixed child states">
        <CheckboxGroup label="Notifications">
          {[
            <Checkbox checked id="cbg-mixed-all" indeterminate key="all" label="All notifications" />,
            <Checkbox checked id="cbg-mixed-news" key="news" label="Newsletter" />,
            <Checkbox checked={false} disabled id="cbg-mixed-sms" key="sms" label="Text messages (unavailable)" />,
            <Checkbox checked={false} error id="cbg-mixed-reminders" key="reminders" label="Reminders" />,
          ]}
        </CheckboxGroup>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long content">
      <Variant label="Wraps">
        <CheckboxGroup
          helperText="We'll only use the methods you choose to contact you about your appointments and results"
          label="Which of these contact methods are you happy for us to use?"
        >
          {[
            <Checkbox
              checked
              id="cbg-long-email"
              key="email"
              label="Email, to the address saved in your profile, which you can change at any time"
            />,
            <Checkbox checked={false} id="cbg-long-phone" key="phone" label="Phone" />,
          ]}
        </CheckboxGroup>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

export const Default = (args: CheckboxGroupProps) => {
  const [checkbox1State, setCheckbox1State] = useState<boolean>(true);
  const [checkbox2State, setCheckbox2State] = useState<boolean>(false);
  const [checkbox3State, setCheckbox3State] = useState<boolean>(true);
  const [checkbox4State, setCheckbox4State] = useState<boolean>(false);
  const [checkbox5State, setCheckbox5State] = useState<boolean>(false);
  const [checkbox6State, setCheckbox6State] = useState<boolean>(false);

  return (
    <CheckboxGroup {...args}>
      <Checkbox checked={!!checkbox1State} id="checkbox_1" label="Checkbox 1" onCheckedChange={setCheckbox1State} />
      <Checkbox checked={!!checkbox2State} id="checkbox_2" label="Checkbox 2" onCheckedChange={setCheckbox2State} />
      <Checkbox
        checked={checkbox3State}
        id="checkbox_3"
        indeterminate
        label="Checkbox 3"
        onCheckedChange={setCheckbox3State}
      />
      <Checkbox
        checked={!!checkbox4State}
        heading="Checkbox"
        id="checkbox_4"
        label="with heading"
        onCheckedChange={setCheckbox4State}
      />
      <Checkbox
        checked={!!checkbox5State}
        disabled
        heading="Disabled checkbox"
        id="checkbox_5"
        label="with heading"
        onCheckedChange={setCheckbox5State}
      />
      <Checkbox
        checked={!!checkbox6State}
        error
        heading="Checkbox"
        id="checkbox_6"
        label="with error"
        onCheckedChange={setCheckbox6State}
      />
    </CheckboxGroup>
  );
};
