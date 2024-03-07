import { ForwardedRef, PropsWithChildren, forwardRef } from 'react';

import { ComponentStory } from '@storybook/react';

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
      defaultValue: undefined,
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
      defaultValue: 'Text link',
    },
    'aria-label': {
      control: {
        type: 'text',
      },
      defaultValue: 'Text link',
    },
    component: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const Template: ComponentStory<typeof TextLink> = (args: TextLinkProps) => <TextLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  to: '#',
};

export const Visited = Template.bind({});

Visited.args = {
  to: '',
};

const RouterLink = forwardRef((props: PropsWithChildren<TextLinkProps>, ref: ForwardedRef<any>) => {
  return (
    <a {...props} ref={ref} onClick={(e) => e.preventDefault()}>
      {props.children}
    </a>
  );
});

export const AsComponent = Template.bind({});
AsComponent.args = {
  component: RouterLink,
};
