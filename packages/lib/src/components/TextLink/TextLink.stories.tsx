import { PropsWithChildren } from 'react';

import icons from '../Icon/icons';
import { TextLink, TextLinkProps } from './TextLink';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
      defaultValue: '#',
    },
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      defaultValue: 'right',
      control: { type: 'radio' },
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Text link',
    },
  },
};

export const Default = (args: PropsWithChildren<TextLinkProps>) => {
  return <TextLink {...args}>{args.children}</TextLink>;
};

export const WithIcon = (args: PropsWithChildren<TextLinkProps>) => {
  return (
    <TextLink icon="info" iconPosition="left" {...args}>
      {args.children}
    </TextLink>
  );
};
