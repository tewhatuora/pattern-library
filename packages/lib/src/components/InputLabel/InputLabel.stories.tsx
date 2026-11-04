import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputLabel.docs.mdx';

export default {
  title: 'Transactional Components/InputLabel',
  component: InputLabel,
  argTypes: {
    as: {
      options: ['label', 'legend', 'div', 'span'],
      control: { type: 'select' },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    htmlFor: { control: 'text' },
    onTertiaryLabelClick: { control: false },
    subheading: {
      control: {
        type: 'text',
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
    tertiaryLabelTooltip: {
      control: {
        type: 'text',
      },
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
  },
  args: {
    label: 'Label',
    tertiaryLabelIconPosition: 'left',
  },
  parameters: {
    controls: {
      exclude: ['labelProps'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Disabled labels are exempt from WCAG contrast (1.4.3 inactive components): skip the check inside them only
const disabledContrastExempt = {
  a11y: { config: { rules: [{ id: 'color-contrast', selector: '*:not([data-disabled-example] *)' }] } },
};

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px" title="States">
      <Variant label="Default">
        <InputLabel label="Label" subheading="Subheading" tertiaryLabel="Tertiary label" />
      </Variant>
      <Variant label="Error">
        <InputLabel error label="Label" subheading="Subheading" tertiaryLabel="Tertiary label" />
      </Variant>
      <Variant label="Disabled">
        <div data-disabled-example>
          <InputLabel disabled label="Label" subheading="Subheading" tertiaryLabel="Tertiary label" />
        </div>
      </Variant>
      <Variant label="Required">
        <InputLabel label="Label" required />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Parts">
      <Variant label="Label only">
        <InputLabel label="Label" />
      </Variant>
      <Variant label="Subheading">
        <InputLabel label="Label" subheading="Subheading" />
      </Variant>
      <Variant label="Tertiary label">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Tertiary label as">
      <Variant label="button">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" tertiaryLabelAs="button" />
      </Variant>
      <Variant label="a (link)">
        <InputLabel href="#" label="Label" tertiaryLabel="Tertiary label" tertiaryLabelAs="a" />
      </Variant>
      <Variant label="text">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" tertiaryLabelAs="text" />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Tertiary label icon">
      <Variant label="button, icon left">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" tertiaryLabelIcon="info" />
      </Variant>
      <Variant label="button, icon right">
        <InputLabel
          label="Label"
          tertiaryLabel="Tertiary label"
          tertiaryLabelIcon="info"
          tertiaryLabelIconPosition="right"
        />
      </Variant>
      <Variant label="text, icon left">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" tertiaryLabelAs="text" tertiaryLabelIcon="info" />
      </Variant>
      <Variant label="text, icon right">
        <InputLabel
          label="Label"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="text"
          tertiaryLabelIcon="info"
          tertiaryLabelIconPosition="right"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Tertiary label tooltip">
      <Variant label="button">
        <InputLabel label="Label" tertiaryLabel="Tertiary label" tertiaryLabelTooltip="Tooltip text" />
      </Variant>
      <Variant label="text">
        <InputLabel
          label="Label"
          tertiaryLabel="Tertiary label"
          tertiaryLabelAs="text"
          tertiaryLabelTooltip="Tooltip text"
        />
      </Variant>
    </Variants>
    <Variants minWidth="260px" title="Long content">
      <Variant label="Long label, subheading and tertiary label">
        <InputLabel
          label="A long label that wraps onto a second line when space runs out"
          required
          subheading="A long subheading that also wraps onto more lines on narrow screens"
          tertiaryLabel="Long tertiary label"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true }, ...disabledContrastExempt };

export const Default = (args: InputLabelProps) => {
  return <InputLabel {...args} />;
};

export const Heading = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" />;
};
export const WithError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" />;
};
export const WithSubHeading = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" subheading="Subheading" />;
};
export const WithSubHeadingAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" subheading="Subheading" />;
};
export const WithTertiaryLabel = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" tertiaryLabel="Tertiary label" />;
};
export const WithTertiaryLabelAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" tertiaryLabel="Tertiary label" />;
};
export const WithSubHeadingAndTertiaryLabel = (args: InputLabelProps) => {
  return <InputLabel {...args} label="Heading" subheading="Subheading" tertiaryLabel="Tertiary label" />;
};
export const WithSubHeadingAndTertiaryLabelAndError = (args: InputLabelProps) => {
  return <InputLabel {...args} error label="Heading" subheading="Subheading" tertiaryLabel="Tertiary label" />;
};
