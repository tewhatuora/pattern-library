import { TextLinkButton, TextLinkButtonProps } from './TextLinkButton';
import icons from '../Icon/icons';
import { Text } from '../Text/Text';
import { vars } from '../../themes/vars.css';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './TextLinkButton.docs.mdx';

export default {
  title: 'Transactional Components/TextLinkButton',
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
    weight: {
      options: Object.keys(vars.textWeight),
      control: { type: 'select' },
    },
    showUnderline: {
      control: { type: 'boolean' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },
    tabIndex: {
      control: { type: 'number' },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    onPress: {
      control: false,
    },
    onClick: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  args: {
    as: 'button',
    iconPosition: 'right',
    children: 'Text Link',
    weight: 'link-normal',
    showUnderline: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const weights = ['link-normal', 'regular', 'medium', 'bold'] as const;

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="200px" title="Weight">
      {weights.map((weight) => (
        <Variant key={weight} label={weight}>
          <TextLinkButton weight={weight}>Text link button</TextLinkButton>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="200px" title="Icon and underline">
      <Variant label="Icon right">
        <TextLinkButton icon="chevron_right">Text link button</TextLinkButton>
      </Variant>
      <Variant label="Icon left">
        <TextLinkButton icon="chevron_left" iconPosition="left">
          Text link button
        </TextLinkButton>
      </Variant>
      <Variant label="showUnderline">
        <TextLinkButton showUnderline>Text link button</TextLinkButton>
      </Variant>
      <Variant label='as="a"'>
        <TextLinkButton as="a" href="#example">
          Text link button
        </TextLinkButton>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="In context">
      <Variant label="Inside Text (always underlined)">
        <Text>
          Changed your mind? <TextLinkButton>Undo</TextLinkButton> the last change.
        </Text>
      </Variant>
      <Variant label="Long label wraps">
        <TextLinkButton icon="chevron_right">
          A long button label that wraps onto a second line when space runs out
        </TextLinkButton>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
