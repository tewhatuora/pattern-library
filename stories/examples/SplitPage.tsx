import { useState } from 'react';

import {
  Accordion,
  Button,
  Card,
  Column,
  Container,
  Footer,
  Header,
  Heading,
  InputSearch,
  List,
  Navigation,
  Row,
  Stack,
  Text,
} from '../../packages/lib/src/components';

const ExampleLogo = () => (
  <>
    <Text size="small">LOGO</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

const SplitPage = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setNavigationOpen((navOpen) => !navOpen);
  };

  return (
    <div style={{ paddingTop: '6rem' }}>
      <Stack color="primary100" space="xxlarge">
        <Header.Root>
          <Header.Left>
            <Header.Logo>
              <ExampleLogo />
            </Header.Logo>

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
              <Row>
                <Column columns={8}>
                  <Stack space="small">
                    <Heading level="2">Heading</Heading>
                    <Stack space="large">
                      <Card>
                        <Row>
                          <Column center columns={6}>
                            <Stack space="medium">
                              <Heading level="3">Heading</Heading>
                              <Text as="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
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
                      <Stack space="xsmall">
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-1">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-2">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-2">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                      </Stack>
                      <Heading level="2">Heading</Heading>
                      <Stack space="xsmall">
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-1">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-2">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                        <Card>
                          <Accordion.Root headingLevel={4} type="single">
                            <Accordion.Item value="item-2">
                              <Accordion.Trigger icon="document" label="Content" />
                              <Accordion.Content>
                                <Text>Content</Text>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </Card>
                      </Stack>
                      <p />
                    </Stack>
                  </Stack>
                </Column>
                <Column columns={4}>
                  <Stack space="small">
                    <Heading level="2">Heading</Heading>
                    <Card>
                      <List.Root dividers noMarkers type="ul">
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                        <List.Item>Content</List.Item>
                      </List.Root>
                    </Card>
                  </Stack>
                </Column>
              </Row>
            </Stack>
          </Container>
          <p />
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

export default SplitPage;
