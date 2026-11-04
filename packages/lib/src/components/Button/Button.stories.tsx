import { Button, ButtonProps } from './Button';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './Button.docs.mdx';

export default {
  title: 'Transactional Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'select' },
    },
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    weight: {
      options: ['regular', 'medium', 'bold', 'black'],
      control: { type: 'select' },
    },
    as: {
      options: ['button', 'a'],
      control: { type: 'radio' },
    },
    href: {
      control: { type: 'text' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    onPress: {
      control: false,
    },
    onClick: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  args: {
    iconPosition: 'right',
    children: 'Button',
    disabled: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const variants = ['primary', 'secondary', 'tertiary', 'link'] as const;

export const Overview = () => (
  <VariantSections>
    <Variants>
      {variants.map((variant) => (
        <Variant key={variant} label={variant}>
          <Button variant={variant}>Button</Button>
        </Variant>
      ))}
    </Variants>
    <Variants title="Icon left">
      {variants.map((variant) => (
        <Variant key={variant} label={variant}>
          <Button icon="chevron_left" iconPosition="left" variant={variant}>
            Button
          </Button>
        </Variant>
      ))}
    </Variants>
    <Variants title="Icon right">
      {variants.map((variant) => (
        <Variant key={variant} label={variant}>
          <Button icon="chevron_right" variant={variant}>
            Button
          </Button>
        </Variant>
      ))}
    </Variants>
    <Variants title="Disabled">
      {variants.map((variant) => (
        <Variant key={variant} label={variant}>
          <Button disabled variant={variant}>
            Button
          </Button>
        </Variant>
      ))}
    </Variants>
    <Variants title="Long label">
      <Variant label="Wraps and grows">
        <Button>A long label that wraps onto a second line when space runs out</Button>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Primary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Primary.args = {
  variant: 'primary',
};
export const Secondary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Secondary.args = {
  variant: 'secondary',
};
export const Tertiary = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
Tertiary.args = {
  variant: 'tertiary',
};
export const WithIcon = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
WithIcon.args = {
  icon: 'link',
};

export const Default = (args: ButtonProps) => <Button {...args}>{args.children || 'Button'}</Button>;
export const OnPress = (args: ButtonProps) => (
  <Button
    {...args}
    onPress={() => {
      alert('Button pressed!');
    }}
  >
    {args.children || 'Button'}
  </Button>
);
