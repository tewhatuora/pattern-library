import { TextLinkButton, TextLinkButtonProps } from './TextLinkButton';
import icons from '../Icon/icons';

export default {
  title: 'Components/TextLinkButton',
  component: TextLinkButton,
  argTypes: {
    as: {
      control: {
        type: 'radio',
      },
      options: ['button', 'a'],
      defaultValue: 'button',
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
      defaultValue: 'right',
      control: { type: 'radio' },
    },
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Text Link',
    },
    onPress: {
      control: false,
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
