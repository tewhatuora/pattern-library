import { PropsWithChildren } from 'react';

import { AnchorLink, AnchorLinkProps } from './AnchorLink';

export default {
  title: 'Components/AnchorLink',
  component: AnchorLink,
  argTypes: {
    to: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
    target: {
      control: {
        type: 'select',
        options: ['_self', '_blank', '_parent', '_top'],
      },
    },
    rel: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Anchor link',
    },
    'aria-label': {
      control: {
        type: 'text',
      },
      defaultValue: 'Anchor link',
    },
  },
};

export const Default = (args: AnchorLinkProps) => <AnchorLink {...args} />;

const RouterLink = (props: PropsWithChildren<AnchorLinkProps>) => (
  <a {...props} onClick={(e) => e.preventDefault()}>
    {props.children}
  </a>
);

export const AsComponent = (args: AnchorLinkProps) => <AnchorLink {...args} component={<RouterLink {...args} />} />;
