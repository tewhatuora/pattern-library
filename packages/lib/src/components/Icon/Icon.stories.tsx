import { Icon, IconProps } from './Icon';
import icons, { decorative, functional, social } from './icons';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
      defaultValue: 'alert',
    },
  },
};

export const Individual = (args: IconProps) => <Icon {...args} color="primary110" />;

const renderIcons = (icons) => {
  return Object.keys(icons).map((icon) => <Icon color="primary110" icon={icon} key={icon} />);
};

export const Decorative = () => {
  return <>{renderIcons(decorative)}</>;
};

export const Functional = () => {
  return <>{renderIcons(functional)}</>;
};

export const Social = () => {
  return <>{renderIcons(social)}</>;
};
