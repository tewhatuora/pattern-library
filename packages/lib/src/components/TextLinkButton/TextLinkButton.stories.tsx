import { TextLinkButton, TextLinkButtonProps } from './TextLinkButton';
import icons from '../Icon/icons';
import DocsPage from '../../../utils/DocsPage';

import Docs from './TextLinkButton.docs.mdx';

export default {
  title: 'Components/TextLinkButton',
  component: TextLinkButton,
  argTypes: {
    as: {
      control: {
        type: 'radio',
      },
      options: ['button', 'a'],
    },
    href: {
      if: { arg: 'as', eq: 'a' },
    },
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    onPress: {
      control: false,
    },
  },
  args: {
    as: 'button',
    iconPosition: 'right',
    children: 'Text Link',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: TextLinkButtonProps) => {
  return <TextLinkButton {...args}>{args.children}</TextLinkButton>;
};

export const WithLink = (args: TextLinkButtonProps) => {
  return (
    <TextLinkButton {...args} as="a" href="#example">
      {args.children}
    </TextLinkButton>
  );
};
