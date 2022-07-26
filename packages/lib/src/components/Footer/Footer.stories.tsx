import { Footer, FooterProps, Navigation } from './Footer';

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

export const Default = (args: FooterProps) => {
  return (
    <Footer {...args}>
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
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
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
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
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
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
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
    </Footer>
  );
};

export const MoreThanSevenImprintItemsShouldThrowError = (args: FooterProps) => {
  return <Footer {...args} />;
};
MoreThanSevenImprintItemsShouldThrowError.arguments({
  imprintItems: [...imprintItems, ...imprintItems, ...imprintItems],
});
