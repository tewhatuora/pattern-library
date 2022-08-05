import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = (args: BadgeProps) => {
  const text = args.variant || 'badge';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Badge {...args}>{args.children || label}</Badge>;
};
