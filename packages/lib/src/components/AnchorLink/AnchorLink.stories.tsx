import { AnchorLink, AnchorLinkProps } from './AnchorLink';

export default {
  title: 'Components/AnchorLink',
  component: AnchorLink,
  argTypes: {
    href: {
      control: {
        type: 'text',
        defaultValue: '#',
      },
    },
    children: {
      control: {
        type: 'text',
        defaultValue: 'Anchor link',
      },
    },
  },
};

export const Default = (args: AnchorLinkProps) => <AnchorLink {...args} />;
