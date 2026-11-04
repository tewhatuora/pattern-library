import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './ToggleSwitch.docs.mdx';

export default {
  title: 'Transactional Components/ToggleSwitch',
  component: ToggleSwitch,
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
    heading: {
      control: {
        type: 'text',
      },
    },
    defaultChecked: {
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
    required: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      control: false,
    },
  },
  args: {
    // Links the visible label to the switch, so each story is named
    id: 'toggle-switch',
    label: 'Label',
    disabled: false,
    error: false,
    required: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const states = [
  { label: 'Off', defaultChecked: false },
  { label: 'On', defaultChecked: true },
];

// Each switch needs a unique id, as its label is linked to it
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px">
      {states.map(({ label, defaultChecked }) => (
        <Variant key={label} label={label}>
          <ToggleSwitch defaultChecked={defaultChecked} id={`switch-${label}`} label="Email notifications" />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="With heading">
      {states.map(({ label, defaultChecked }) => (
        <Variant key={label} label={label}>
          <ToggleSwitch
            defaultChecked={defaultChecked}
            heading="Notifications"
            id={`switch-heading-${label}`}
            label="Email notifications"
          />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Disabled">
      {states.map(({ label, defaultChecked }) => (
        <Variant key={label} label={label}>
          <ToggleSwitch
            defaultChecked={defaultChecked}
            disabled
            heading="Notifications"
            id={`switch-disabled-${label}`}
            label="Email notifications"
          />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="240px" title="Error">
      {states.map(({ label, defaultChecked }) => (
        <Variant key={label} label={label}>
          <ToggleSwitch
            defaultChecked={defaultChecked}
            error
            heading="Notifications"
            id={`switch-error-${label}`}
            label="Email notifications"
          />
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="280px" title="Long label">
      <Variant label="Wraps beside the switch">
        <ToggleSwitch
          defaultChecked
          heading="Appointment reminders"
          id="switch-long"
          label="Send me a text message the day before each appointment, and again an hour before it starts"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;
export const WithHeading = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;
WithHeading.args = {
  heading: 'Heading',
};
export const Checked = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;
Checked.args = {
  defaultChecked: true,
  heading: 'Heading',
};
export const Disabled = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;
Disabled.args = {
  disabled: true,
  heading: 'Heading',
};
export const DisabledAndChecked = (args: ToggleSwitchProps) => (
  <ToggleSwitch {...args} defaultChecked disabled heading="Heading" />
);
DisabledAndChecked.args = {
  defaultChecked: true,
  disabled: true,
  heading: 'Heading',
};
