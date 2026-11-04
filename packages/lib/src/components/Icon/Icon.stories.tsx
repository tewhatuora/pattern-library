import { PropsWithChildren } from 'react';

import { Icon, IconProps } from './Icon';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import icons, { IconMap, IconType, decorative, functional, social } from './icons';
import { vars } from '../../themes/vars.css';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

// `semantic` is a group of tokens, not a colour
const colors = Object.keys(vars.color).filter((color) => color !== 'semantic') as Exclude<
  keyof typeof vars.color,
  'semantic'
>[];

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    variant: {
      options: ['decorativeIcons', 'functionalIcons', 'socialIcons', 'tagIcon'],
      control: { type: 'select' },
    },
    alt: {
      control: { type: 'text' },
    },
    onClick: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  args: {
    icon: 'alert',
    color: 'primary110',
    variant: 'decorativeIcons',
  },
};

const variants = ['decorativeIcons', 'functionalIcons', 'socialIcons', 'tagIcon'] as const;
const sampleIcons = ['alert', 'tick', 'chevron_right', 'info'] as const;
const row = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' } as const;

/** Sizes and colours. The Decorative, Functional and Social stories show every icon. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="200px" title="Variant (size)">
      {variants.map((variant) => (
        <Variant key={variant} label={variant}>
          <div style={row}>
            {sampleIcons.map((icon) => (
              <Icon color="primary110" icon={icon} key={icon} variant={variant} />
            ))}
          </div>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="110px" title="Colour">
      {colors
        .filter((color) => color.endsWith('100') && color !== 'transparent100')
        .map((color) => (
          <Variant key={color} label={color}>
            <Icon color={color} icon="alert" />
          </Variant>
        ))}
    </Variants>
    <Variants dark minWidth="110px" title="On a dark background">
      <Variant label="neutral0">
        <Icon color="neutral0" icon="alert" />
      </Variant>
      <Variant label="Inherited colour">
        <Box color="neutral0">
          <Icon icon="tick" />
        </Box>
      </Variant>
    </Variants>
    <Variants minWidth="160px" title="Options">
      <Variant label="Stroked icon (child)">
        <Icon color="primary110" icon="child" />
      </Variant>
      <Variant label="Filled icon (person)">
        <Icon color="primary110" icon="person" />
      </Variant>
      <Variant label='With alt (role="img")'>
        <Icon alt="Warning" color="primary110" icon="alert" />
      </Variant>
      <Variant label="Inline with text">
        <div style={row}>
          <Icon color="primary110" icon="info" variant="functionalIcons" />
          <Text>Beside text</Text>
        </div>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Individual = (args: IconProps) => <Icon {...args} />;

export const InheritedColor = (args: IconProps) => {
  const { color, ...rest } = args;
  return (
    <Box alignItems="center" color={color} display="inlineFlex">
      <Icon {...rest} /> <Text>Inherits parent `color`</Text>
    </Box>
  );
};

const IconContainer = ({ children }: PropsWithChildren<any>) => (
  <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="spaceBetween">
    {children}
  </Box>
);

const renderIcons = (icons: IconMap, args: IconProps) => {
  return Object.keys(icons).map((value) => {
    const icon = value as IconType;
    return <Icon color={args.color} icon={icon} key={icon} />;
  });
};

export const Decorative = (args: IconProps) => {
  return <IconContainer>{renderIcons(decorative, args)}</IconContainer>;
};

export const Functional = (args: IconProps) => {
  return <IconContainer>{renderIcons(functional, args)}</IconContainer>;
};

export const Social = (args: IconProps) => {
  return <IconContainer>{renderIcons(social, args)}</IconContainer>;
};
