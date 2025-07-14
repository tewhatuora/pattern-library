import { ForwardedRef, PropsWithChildren, forwardRef } from 'react';

import { AnchorLink, AnchorLinkProps } from './AnchorLink';
import DocsPage from '../../../utils/DocsPage';

import Docs from './AnchorLink.docs.mdx';

export default {
  title: 'Components/AnchorLink',
  component: AnchorLink,
  argTypes: {
    to: {
      control: {
        type: 'text',
      },
    },
    noIcon: {
      control: {
        type: 'boolean',
      },
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
    },
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    component: {
      control: false,
    },
  },
  args: {
    to: '#',
    children: 'Anchor link',
    'aria-label': 'Anchor link',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: AnchorLinkProps) => <AnchorLink {...args} />;

const RouterLink = forwardRef((props: PropsWithChildren<AnchorLinkProps>, ref: ForwardedRef<any>) => {
  return (
    <a {...props} ref={ref} onClick={(e) => e.preventDefault()}>
      {props.children}
    </a>
  );
});

export const AsComponent = (args: AnchorLinkProps) => <AnchorLink {...args} component={RouterLink} />;
