import { Header, Navigation, Container, Stack, Text, ImageBlock, Footer } from '../../packages/lib/src/components';
import { useState } from 'react';

const LandingPage = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setNavigationOpen((navOpen) => !navOpen);
  };

  return (
    <div style={{ paddingTop: '9.6rem' }}>
      <Stack space="xxlarge" color="primary100">
        <Header
          utilityNavItems={[
            {
              href: '#',
              icon: 'language',
              label: 'Language',
            },
            {
              href: '#',
              icon: 'person',
              label: 'Name Surname',
            },
          ]}
          logoLinkHref="/"
          logoComponent={
            <>
              <Text size="small">LOGO</Text>
              <Text size="small" weight="bold">
                Placeholder
              </Text>
            </>
          }
          onToggleNavigation={handleToggleNavigation}
          searchFormAction="/"
          searchFormMethod="GET"
          withSearch
        />
        <Stack space="xlarge" backgroundColor="primary5">
          <Navigation.Root open={navigationOpen} searchFormAction="/" searchFormMethod="GET" withSearch>
            <Navigation.Item href="#" label="Nav item 1" selected>
              <Navigation.Menu>
                <Navigation.MenuList heading="List one">
                  <Navigation.Item href="#" label="Sub nav item 1" />
                  <Navigation.Item href="#" label="Sub nav item 2" />
                  <Navigation.Item href="#" label="Sub nav item 3" />
                  <Navigation.Item href="#" label="Sub nav item 4" />
                </Navigation.MenuList>
                <Navigation.MenuList heading="List two">
                  <Navigation.Item href="#" label="Sub nav item 5" />
                  <Navigation.Item href="#" label="Sub nav item 6" />
                  <Navigation.Item href="#" label="Sub nav item 7" />
                  <Navigation.Item href="#" label="Sub nav item 8" />
                </Navigation.MenuList>
                <Navigation.MenuList heading="List three">
                  <Navigation.Item href="#" label="Sub nav item 9" />
                  <Navigation.Item href="#" label="Sub nav item 10" />
                  <Navigation.Item href="#" label="Sub nav item 11" />
                  <Navigation.Item href="#" label="Sub nav item 12" />
                </Navigation.MenuList>
                <Navigation.MenuList heading="List four">
                  <Navigation.Item href="#" label="Sub nav item 13" />
                  <Navigation.Item href="#" label="Sub nav item 14" />
                  <Navigation.Item href="#" label="Sub nav item 15" />
                  <Navigation.Item href="#" label="Sub nav item 16" />
                </Navigation.MenuList>
              </Navigation.Menu>
            </Navigation.Item>
            <Navigation.Item href="#" label="Nav item 2">
              <Navigation.Menu mini>
                <Navigation.MenuList heading="List one">
                  <Navigation.Item href="#" label="Sub nav item 17" />
                  <Navigation.Item href="#" label="Sub nav item 18" />
                  <Navigation.Item href="#" label="Sub nav item 19" />
                  <Navigation.Item href="#" label="Sub nav item 20" />
                </Navigation.MenuList>
              </Navigation.Menu>
            </Navigation.Item>
            <Navigation.Item href="/forms" label="Nav item 3" />
            <Navigation.Item href="#" label="Nav item 4" />
            <Navigation.Item href="#" label="Nav item 5" />
          </Navigation.Root>
          <Container>
            <Stack space="medium">
              <ImageBlock
                src="https://placehold.jp/404040/ffffff/500x500.png?text=ImageBlock"
                shape="square"
                heading="Heading"
                subheading="Subheading"
                primaryButton={{ label: 'Primary', as: 'button' }}
                secondaryButton={{ label: 'Secondary', as: 'button' }}
              >
                <Text>Content</Text>
              </ImageBlock>
              <p>&nbsp;</p>
            </Stack>
          </Container>
        </Stack>
        <Footer
          imprintItems={[
            { text: '© Te Whatu Ora | Health New Zealand' },
            { text: 'Copyright', href: '#' },
            { text: 'Privacy policy', href: '#' },
          ]}
          socialLinkHrefs={{
            twitter: 'http://twitter.com',
            instagram: 'http://instagram.com',
            linkedin: 'http://linkedin.com',
            tiktok: 'http://tiktok.com',
            facebook: 'http://facebook.com',
          }}
        >
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
      </Stack>
    </div>
  );
};

export default LandingPage;
