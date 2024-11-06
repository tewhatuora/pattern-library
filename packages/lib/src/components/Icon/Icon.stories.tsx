import { PropsWithChildren } from 'react';

import { Icon, IconProps } from './Icon';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import icons, { IconMap, IconType, decorative, functional, social } from './icons';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(vars.color),
      control: { type: 'select' },
    },
  },
  args: {
    icon: 'alert',
    color: 'primary110',
  },
};

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
  <Box display="flex" flexDirection="row" justifyContent="spaceBetween">
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
