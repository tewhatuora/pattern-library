import { Icon, IconProps } from './Icon';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import icons, { decorative, functional, social } from './icons';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
      defaultValue: 'alert',
    },
    color: {
      options: Object.keys(vars.color),
      control: { type: 'select' },
      defaultValue: 'primary110',
    },
  },
};

export const Individual = (args: IconProps) => <Icon {...args} />;

export const InheritedColor = (args: IconProps) => {
  const { color, ...rest } = args;
  return (
    <Box display="inlineFlex" color={args.color}>
      <Icon {...rest} />
      <Text>Inherits parent `color`</Text>
    </Box>
  );
};

const IconContainer = ({ children }) => (
  <Box display="flex" justifyContent="spaceBetween" flexDirection="row">
    {children}
  </Box>
);

const renderIcons = (icons, args) => {
  return Object.keys(icons).map((icon) => <Icon icon={icon} key={icon} color={args.color} />);
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
