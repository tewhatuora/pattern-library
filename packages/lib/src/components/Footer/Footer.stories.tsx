import { Footer, FooterList, FooterListItem, FooterProps } from './Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import Docs from './Footer.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    variant: {
      defaultValue: 'light',
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
    chromatic: { viewports: [1600] },
  },
};

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

export const Default = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <FooterList heading="List one">
        <FooterListItem href="#" label="Sub nav item 17 Sub nav item 17" />
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
NoNavigations.args = {
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

export const MoreThanSevenImprintItemsShouldThrowError = (args: FooterProps) => {
  return (
    <ErrorBoundary>
      <Footer {...args} />
    </ErrorBoundary>
  );
};
MoreThanSevenImprintItemsShouldThrowError.args = {
  imprintItems: [...imprintItems, ...imprintItems, ...imprintItems],
};
