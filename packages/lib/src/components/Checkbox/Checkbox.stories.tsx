import { Checkbox, CheckboxProps } from './Checkbox';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './Checkbox.docs.mdx';

export default {
  title: 'Transactional Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: {
      // Hides the Box layout props, which aren't specific to Checkbox
      include: [
        'label',
        'heading',
        'id',
        'name',
        'required',
        'checked',
        'indeterminate',
        'disabled',
        'error',
        'onCheckedChange',
      ],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    heading: {
      control: {
        type: 'text',
      },
    },
    id: { control: false },
    name: { control: false },
    onCheckedChange: { control: false },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    // Links the visible label to the checkbox, so each story is named
    id: 'checkbox',
    checked: false,
    indeterminate: false,
  },
};

// Each Checkbox needs a unique id, as its label is linked to it
const overviewId = (label: string) => `checkbox-overview-${label.toLowerCase().replace(/\W+/g, '-')}`;

const states = [
  { label: 'Unchecked', checked: false },
  { label: 'Checked', checked: true },
  { label: 'Indeterminate', checked: true, indeterminate: true },
];

export const Overview = () => (
  <VariantSections>
    <Variants>
      {states.map((state) => (
        <Variant key={state.label} label={state.label}>
          <Checkbox {...state} id={overviewId(state.label)} />
        </Variant>
      ))}
    </Variants>
    <Variants title="Disabled">
      {states.map((state) => (
        <Variant key={state.label} label={state.label}>
          <Checkbox {...state} disabled id={overviewId(`Disabled ${state.label}`)} />
        </Variant>
      ))}
    </Variants>
    <Variants title="Error">
      {states.map((state) => (
        <Variant key={state.label} label={state.label}>
          <Checkbox {...state} error id={overviewId(`Error ${state.label}`)} />
        </Variant>
      ))}
    </Variants>
    <Variants title="Heading and required">
      <Variant label="With heading">
        <Checkbox checked={false} heading="Heading" id={overviewId('With heading')} label="Label" />
      </Variant>
      <Variant label="Required">
        <Checkbox checked={false} id={overviewId('Required')} label="Label" required />
      </Variant>
      <Variant label="Required with heading">
        <Checkbox checked={false} heading="Heading" id={overviewId('Required with heading')} label="Label" required />
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long label">
      <Variant label="Wraps beside the checkbox">
        <Checkbox
          checked
          heading="A heading that is long enough to wrap"
          id={overviewId('Long label')}
          label="A long label that wraps onto several lines when there isn't enough room for it on one line"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Checked = (args: CheckboxProps) => <Checkbox {...args} />;
Checked.args = {
  checked: true,
  label: 'Checked',
};
export const Indeterminate = (args: CheckboxProps) => <Checkbox {...args} />;
Indeterminate.args = {
  checked: true,
  indeterminate: true,
  label: 'Indeterminate',
};
export const Disabled = (args: CheckboxProps) => <Checkbox {...args} />;
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
Disabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};
export const CheckedAndDisabled = (args: CheckboxProps) => <Checkbox {...args} />;
CheckedAndDisabled.args = {
  disabled: true,
  checked: true,
  heading: 'Checked',
  label: 'Disabled',
};
CheckedAndDisabled.parameters = {
  a11y: {
    // Disabled controls and their labels are exempt from WCAG contrast (1.4.3 inactive components).
    config: { rules: [{ id: 'color-contrast', enabled: false }] },
  },
};
export const Error = (args: CheckboxProps) => <Checkbox {...args} />;
Error.args = {
  error: true,
  label: 'Error',
};

Default.args = {
  checked: true,
  indeterminate: false,
  label: 'Label',
  heading: 'Heading',
  required: false,
  id: 'checkbox',
};
