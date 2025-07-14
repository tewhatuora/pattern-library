import { ForwardedRef, PropsWithChildren, forwardRef } from 'react';

import { TextLink, TextLinkProps } from './TextLink';
import DocsPage from '../../../utils/DocsPage';

import Docs from './TextLink.docs.mdx';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  argTypes: {
    to: {
      control: {
        type: 'text',
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
    'aria-label': 'Text link',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: TextLinkProps) => <TextLink {...args}>Text link</TextLink>;

export const Visited = (args: TextLinkProps) => (
  <TextLink {...args} to="">
    Text link
  </TextLink>
);

const RouterLink = forwardRef((props: PropsWithChildren<TextLinkProps>, ref: ForwardedRef<any>) => {
  return (
    <a {...props} ref={ref} onClick={(e) => e.preventDefault()}>
      {props.children}
    </a>
  );
});

export const AsComponent = (args: TextLinkProps) => (
  <TextLink {...args} component={RouterLink}>
    Text link
  </TextLink>
);
