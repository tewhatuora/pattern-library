import { ForwardedRef, forwardRef } from 'react';

import { LinkComponentProps } from '@/src/types';

import { TextLink, TextLinkProps } from './TextLink';
import { Text } from '../Text/Text';
import icons from '../Icon/icons';
import { vars } from '../../themes/vars.css';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './TextLink.docs.mdx';

export default {
  title: 'Transactional Components/TextLink',
  component: TextLink,
  argTypes: {
    to: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: Object.keys(vars.textSize),
      control: { type: 'select' },
    },
    weight: {
      options: Object.keys(vars.textWeight),
      control: { type: 'select' },
    },
    icon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    showUnderline: {
      control: { type: 'boolean' },
    },
    noVisited: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select',
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
    className: {
      control: false,
    },
    elementType: {
      control: false,
    },
  },
  args: {
    to: '#',
    children: 'Text link',
    size: 'medium',
    weight: 'link-normal',
    iconPosition: 'right',
    showUnderline: false,
    noVisited: false,
    'aria-label': 'Text link',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const sizes = Object.keys(vars.textSize) as (keyof typeof vars.textSize)[];
const weights = ['link-normal', 'regular', 'medium', 'bold'] as const;

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="140px" title="Size">
      {sizes.map((size) => (
        <Variant key={size} label={size}>
          <TextLink size={size} to="#">
            Text link
          </TextLink>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="140px" title="Weight">
      {weights.map((weight) => (
        <Variant key={weight} label={weight}>
          <TextLink to="#" weight={weight}>
            Text link
          </TextLink>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="140px" title="Icon and underline">
      <Variant label="Icon right">
        <TextLink icon="chevron_right" to="#">
          Text link
        </TextLink>
      </Variant>
      <Variant label="Icon left">
        <TextLink icon="chevron_left" iconPosition="left" to="#">
          Text link
        </TextLink>
      </Variant>
      <Variant label="External (target _blank)">
        <TextLink icon="link" target="_blank" to="#">
          Text link
        </TextLink>
      </Variant>
      <Variant label="showUnderline">
        <TextLink showUnderline to="#">
          Text link
        </TextLink>
      </Variant>
    </Variants>
    <Variants minWidth="140px" title="Visited (links to this page)">
      <Variant label="Visited">
        <TextLink to="">Text link</TextLink>
      </Variant>
      <Variant label="noVisited">
        <TextLink noVisited to="">
          Text link
        </TextLink>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="In context">
      <Variant label="Inside Text (always underlined)">
        <Text>
          Read more about <TextLink to="#">booking an appointment</TextLink> before you visit.
        </Text>
      </Variant>
      <Variant label="Long label wraps">
        <TextLink icon="chevron_right" to="#">
          A long link label that wraps onto a second line when space runs out
        </TextLink>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: TextLinkProps) => <TextLink {...args}>{args.children || 'Text link'}</TextLink>;

export const Visited = (args: TextLinkProps) => (
  <TextLink {...args} to="">
    Text link
  </TextLink>
);

const RouterLink = forwardRef((props: Omit<LinkComponentProps, 'ref'>, ref: ForwardedRef<HTMLAnchorElement>) => {
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
