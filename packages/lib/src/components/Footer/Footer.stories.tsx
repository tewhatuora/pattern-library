import type { Meta } from '@storybook/react-vite';

import { Footer, FooterList, FooterListItem, FooterProps } from './Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Docs from './Footer.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Patterns/Footer',
  component: Footer,
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
    socialLinkHrefs: {
      control: { type: 'object' },
    },
    imprintItems: {
      control: { type: 'object' },
    },
    legalCopy: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'light',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
    chromatic: { viewports: [1600] },
  },
} satisfies Meta<FooterProps>;

const imprintItems = [
  { text: '© Te Whatu Ora | Health New Zealand' },
  { text: 'Copyright', href: '#' },
  { text: 'Privacy policy', href: '#' },
];

const socialLinkHrefs = {
  twitter: 'http://twitter.com',
  instagram: 'http://instagram.com',
  linkedin: 'http://linkedin.com',
  tiktok: 'http://tiktok.com',
  facebook: 'http://facebook.com',
};

const exampleLists = [
  <FooterList heading="Services" key="services">
    <FooterListItem href="#" label="Find a clinic" />
    <FooterListItem href="#" label="Book a vaccination" />
    <FooterListItem href="#" label="Your health records" />
  </FooterList>,
  <FooterList heading="About" key="about">
    <FooterListItem href="#" label="About us" />
    <FooterListItem href="#" label="Contact us" />
    <FooterListItem href="#" label="A long link label that wraps onto another line" />
  </FooterList>,
  <FooterList heading="Help" key="help">
    <FooterListItem href="#" label="Accessibility" />
    <FooterListItem href="#" label="Feedback" />
  </FooterList>,
];

// Each footer is shown in an `article`, so it isn't a page `contentinfo` landmark (a page may only have one)
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label='variant="light": lists, social links, legal copy and imprint'>
        <article>
          <Footer
            imprintItems={imprintItems}
            legalCopy="Crown copyright"
            socialLinkHrefs={socialLinkHrefs}
            variant="light"
          >
            {exampleLists}
          </Footer>
        </article>
      </Variant>
      <Variant label='variant="dark"'>
        <article>
          <Footer
            imprintItems={imprintItems}
            legalCopy="Crown copyright"
            socialLinkHrefs={socialLinkHrefs}
            variant="dark"
          >
            {exampleLists}
          </Footer>
        </article>
      </Variant>
      <Variant label="Minimal: imprint only, no lists or social links">
        <article>
          <Footer imprintItems={imprintItems} variant="light" />
        </article>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
    </Footer>
  );
};
Default.args = {
  imprintItems,
  socialLinkHrefs,
  legalCopy: 'Crown copyright',
};

export const NoNavigations = (args: FooterProps) => {
  return <Footer {...args} />;
};
NoNavigations.args = {
  imprintItems,
  socialLinkHrefs,
};

export const NoSocialLinks = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
    </Footer>
  );
};
NoSocialLinks.args = { imprintItems };

export const NoNavigationsOrSocialLinks = (args: FooterProps) => {
  return <Footer {...args} />;
};
NoNavigationsOrSocialLinks.args = {
  imprintItems,
};

export const FiveNavigations = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17" />
        <FooterListItem href="#" label="Sub nav item 18" />
        <FooterListItem href="#" label="Sub nav item 19" />
        <FooterListItem href="#" label="Sub nav item 20" />
      </FooterList>
    </Footer>
  );
};
FiveNavigations.args = {
  imprintItems,
  socialLinkHrefs,
};

export const MoreThanFiveNavigationsShouldThrowError = (args: FooterProps) => {
  return (
    <ErrorBoundary>
      <Footer {...args}>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
        <FooterList heading="List one">
          <FooterListItem href="#" label="Sub nav item 17" />
          <FooterListItem href="#" label="Sub nav item 18" />
          <FooterListItem href="#" label="Sub nav item 19" />
          <FooterListItem href="#" label="Sub nav item 20" />
        </FooterList>
      </Footer>
    </ErrorBoundary>
  );
};

MoreThanFiveNavigationsShouldThrowError.parameters = { chromatic: { disableSnapshot: true } };

export const MoreThanSevenImprintItemsShouldThrowError = (args: FooterProps) => {
  return (
    <ErrorBoundary>
      <Footer {...args} />
    </ErrorBoundary>
  );
};
MoreThanSevenImprintItemsShouldThrowError.parameters = { chromatic: { disableSnapshot: true } };
MoreThanSevenImprintItemsShouldThrowError.args = {
  imprintItems: [...imprintItems, ...imprintItems, ...imprintItems],
};
