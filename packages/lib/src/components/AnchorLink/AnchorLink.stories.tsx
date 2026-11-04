import { ForwardedRef, forwardRef } from 'react';

import { LinkComponentProps } from '@/src/types';

import { AnchorLink, AnchorLinkProps } from './AnchorLink';
import { Text } from '../Text/Text';
import { vars } from '../../themes/vars.css';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './AnchorLink.docs.mdx';

export default {
  title: 'Patterns/AnchorLink',
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
    size: {
      options: Object.keys(vars.textSize),
      control: { type: 'select' },
    },
    weight: {
      options: Object.keys(vars.textWeight),
      control: { type: 'select' },
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
    className: {
      control: false,
    },
    elementType: {
      control: false,
    },
  },
  args: {
    to: '#',
    size: 'medium',
    weight: 'link-normal',
    noIcon: false,
    showUnderline: false,
    noVisited: false,
    children: 'Anchor link',
    'aria-label': 'Anchor link',
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
          <AnchorLink size={size} to="#">
            Anchor link
          </AnchorLink>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="140px" title="Weight">
      {weights.map((weight) => (
        <Variant key={weight} label={weight}>
          <AnchorLink to="#" weight={weight}>
            Anchor link
          </AnchorLink>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="140px" title="Options">
      <Variant label="noIcon">
        <AnchorLink noIcon to="#">
          Anchor link
        </AnchorLink>
      </Variant>
      <Variant label="showUnderline">
        <AnchorLink showUnderline to="#">
          Anchor link
        </AnchorLink>
      </Variant>
      <Variant label="Visited (links to this page)">
        <AnchorLink to="">Anchor link</AnchorLink>
      </Variant>
      <Variant label="noVisited">
        <AnchorLink noVisited to="">
          Anchor link
        </AnchorLink>
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="In context">
      <Variant label="Inside Text (always underlined)">
        <Text>
          Jump to <AnchorLink to="#">eligibility</AnchorLink> to check before you book.
        </Text>
      </Variant>
      <Variant label="Long label wraps">
        <AnchorLink to="#">A long anchor link label that wraps onto a second line when space runs out</AnchorLink>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: AnchorLinkProps) => <AnchorLink {...args} />;

const RouterLink = forwardRef((props: Omit<LinkComponentProps, 'ref'>, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <a {...props} ref={ref} onClick={(e) => e.preventDefault()}>
      {props.children}
    </a>
  );
});

export const AsComponent = (args: AnchorLinkProps) => <AnchorLink {...args} component={RouterLink} />;
