import { Footer, Navigation } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

export const Default = () => {
  return (
    <Footer
      socialLinkHrefs={{
        twitter: 'http://twitter.com',
        instagram: 'http://instagram.com',
        linkedin: 'http://linkedin.com',
        tiktok: 'http://tiktok.com',
        facebook: 'http://facebook.com',
      }}
    >
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
    </Footer>
  );
};

export const WithoutSocialLinks = () => {
  return (
    <Footer>
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
    </Footer>
  );
};

export const FiveNavigations = () => {
  return (
    <Footer
      socialLinkHrefs={{
        twitter: 'http://twitter.com',
        instagram: 'http://instagram.com',
        linkedin: 'http://linkedin.com',
        tiktok: 'http://tiktok.com',
        facebook: 'http://facebook.com',
      }}
    >
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
      <Navigation />
    </Footer>
  );
};
