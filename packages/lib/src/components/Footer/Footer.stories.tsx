import { Navigation } from '../Navigation/Navigation';
import { Footer, FooterProps } from './Footer';

import MohLogo from './moh-logo.svg?component';
import UniteAgainstCovid19Logo from './unite-against-covid.svg?component';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const imprintItems = [
  { text: '© Ministry of Health | Manatū Hauora' },
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

const extraLogos = [
  <MohLogo key={null} props={{}} ref={null} style={{ width: '15.9rem' }} type="symbol" />,
  <UniteAgainstCovid19Logo key={null} props={{}} ref={null} style={{ width: '6.8rem' }} type="symbol" />,
];

export const Default = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17 Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
    </Footer>
  );
};
Default.args = {
  imprintItems,
  socialLinkHrefs,
  extraLogos,
};

export const NoNavigations = (args: FooterProps) => {
  return <Footer {...args} />;
};
NoNavigations.args = {
  imprintItems,
  socialLinkHrefs,
  extraLogos,
};

export const NoSocialLinks = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
    </Footer>
  );
};
NoSocialLinks.args = { imprintItems, extraLogos };

export const NoNavigationsOrSocialLinks = (args: FooterProps) => {
  return <Footer {...args} />;
};
NoNavigations.args = {
  imprintItems,
};

export const FiveNavigations = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
    </Footer>
  );
};
FiveNavigations.args = {
  imprintItems,
  socialLinkHrefs,
};

export const MoreThanFiveNavigationsShouldThrowError = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
      <Navigation.MenuList heading="List one">
        <Navigation.Item href="#" label="Sub nav item 17" />
        <Navigation.Item href="#" label="Sub nav item 18" />
        <Navigation.Item href="#" label="Sub nav item 19" />
        <Navigation.Item href="#" label="Sub nav item 20" />
      </Navigation.MenuList>
    </Footer>
  );
};

export const MoreThanSevenImprintItemsShouldThrowError = (args: FooterProps) => {
  return <Footer {...args} />;
};
MoreThanSevenImprintItemsShouldThrowError.args = {
  imprintItems: [...imprintItems, ...imprintItems, ...imprintItems],
};
