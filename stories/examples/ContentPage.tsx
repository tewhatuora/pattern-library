import { useState } from 'react';

import {
  AnchorLink,
  Breadcrumbs,
  Button,
  Card,
  Column,
  Container,
  Divider,
  Header,
  Heading,
  InputSearch,
  Navigation,
  Row,
  Stack,
  Text,
} from '../../packages/lib/src/components';

const ContentPage = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setNavigationOpen((navOpen) => !navOpen);
  };

  return (
    <div style={{ paddingTop: '6rem' }}>
      <Stack color="primary100" space="xxlarge">
        <Header.Root>
          <Header.Left>
            <Header.TeWhatuOraLogo href="https://www.tewhatuora.govt.nz/" />
          </Header.Left>

          <Header.Right>
            <Navigation.Utility
              items={[
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
              variant="light"
            />

            <InputSearch id="search" name="search" placeholder="Search" />
          </Header.Right>

          <Header.MenuButton open={navigationOpen} onToggle={handleToggleNavigation} />
        </Header.Root>

        <Stack backgroundColor="primary5" space="xlarge">
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
              <Breadcrumbs>
                <AnchorLink noIcon to="#100">
                  First
                </AnchorLink>
                <AnchorLink noIcon to="#200">
                  Second
                </AnchorLink>
                <AnchorLink noIcon to="#300">
                  Third
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Fourth
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Fifth
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Sixth
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Seventh
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Eighth
                </AnchorLink>
                <AnchorLink noIcon to="#400">
                  Ninth
                </AnchorLink>
                <Text>Tenth</Text>
              </Breadcrumbs>
              <Row>
                <Column center columns={8}>
                  <Stack space="large">
                    <Heading level="2">Heading</Heading>
                    <Card>
                      <Row>
                        <Column center columns={6}>
                          <Stack space="medium">
                            <Heading level="3">Heading</Heading>
                            <Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                              consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio perspiciatis
                              porro quaerat quasi quia, repellendus unde vel voluptatibus.
                            </Text>
                            <Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                              consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio perspiciatis
                              porro quaerat quasi quia, repellendus unde vel voluptatibus.
                            </Text>
                            <Heading level="3">Heading</Heading>
                            <Heading level="3">Heading</Heading>
                            <Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                              consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio perspiciatis
                              porro quaerat quasi quia, repellendus unde vel voluptatibus.
                            </Text>
                            <Divider variant="light" />
                            <Heading level="3">Heading</Heading>
                            <Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                              consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio perspiciatis
                              porro quaerat quasi quia, repellendus unde vel voluptatibus.
                            </Text>
                            <Row>
                              <Column columns={3}>
                                <Button variant="primary">Primary</Button>
                              </Column>
                              <Column columns={3}>
                                <Button variant="secondary">Secondary</Button>
                              </Column>
                            </Row>
                          </Stack>
                        </Column>
                      </Row>
                    </Card>
                    <Heading level="2">Heading</Heading>
                  </Stack>
                </Column>
              </Row>
            </Stack>
          </Container>
          <p />
        </Stack>
        {/* <Footer
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
        </Footer> */}
      </Stack>
    </div>
  );
};

export default ContentPage;
