import {
  Header,
  Navigation,
  Container,
  Row,
  Column,
  Stack,
  Text,
  Footer,
  Accordion,
  Card,
  Tabs,
  Button,
  Heading,
  Divider,
  Breadcrumbs,
  AnchorLink,
} from '../../packages/lib/src/components';
import { useState } from 'react';

const ContentPage = () => {
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
                <Column columns={8} center>
                  <Stack space="large">
                    <Heading level="2">Heading</Heading>
                    <Card>
                      <Row>
                        <Column columns={6} center>
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
                            <Accordion.Root type="single" headingLevel={4}>
                              <Accordion.Item value="item-1">
                                <Accordion.Trigger icon="document" label="Content" />
                                <Accordion.Content>
                                  <Text>Content</Text>
                                </Accordion.Content>
                              </Accordion.Item>
                              <Accordion.Item value="item-2">
                                <Accordion.Trigger icon="document" label="Content" />
                                <Accordion.Content>
                                  <Text>Content</Text>
                                </Accordion.Content>
                              </Accordion.Item>
                              <Accordion.Item value="item-3">
                                <Accordion.Trigger icon="document" label="Content" />
                                <Accordion.Content>
                                  <Text>Content</Text>
                                </Accordion.Content>
                              </Accordion.Item>
                              <Accordion.Item value="item-4">
                                <Accordion.Trigger icon="document" label="Content" />
                                <Accordion.Content>
                                  <Text>Content</Text>
                                </Accordion.Content>
                              </Accordion.Item>
                            </Accordion.Root>
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
                    <Card>
                      <Row>
                        <Column columns={6} center>
                          <Stack space="medium">
                            <Tabs.Root space="medium" defaultValue="tab-1" activationMode="automatic">
                              <Tabs.List>
                                <Tabs.Trigger value="tab-1">Tab item</Tabs.Trigger>
                                <Tabs.Trigger value="tab-2">Tab item</Tabs.Trigger>
                                <Tabs.Trigger value="tab-3">Tab item</Tabs.Trigger>
                                <Tabs.Trigger value="tab-4">Tab item</Tabs.Trigger>
                                <Tabs.Trigger value="tab-5">Tab item</Tabs.Trigger>
                              </Tabs.List>
                              <Tabs.Content value="tab-1">
                                <Stack space="medium">
                                  <Heading level="3">Tab one</Heading>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                </Stack>
                              </Tabs.Content>
                              <Tabs.Content value="tab-2">
                                <Stack space="medium">
                                  <Heading level="3">Tab two</Heading>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                </Stack>
                              </Tabs.Content>
                              <Tabs.Content value="tab-3">
                                <Stack space="medium">
                                  <Heading level="3">Tab three</Heading>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                </Stack>
                              </Tabs.Content>
                              <Tabs.Content value="tab-4">
                                <Stack space="medium">
                                  <Heading level="3">Tab four</Heading>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                </Stack>
                              </Tabs.Content>
                              <Tabs.Content value="tab-5">
                                <Stack space="medium">
                                  <Heading level="3">Tab five</Heading>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                  <Text as="p">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                                    consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio
                                    perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.
                                  </Text>
                                </Stack>
                              </Tabs.Content>
                            </Tabs.Root>
                          </Stack>
                        </Column>
                      </Row>
                    </Card>
                  </Stack>
                </Column>
              </Row>
            </Stack>
          </Container>
          <p></p>
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

export default ContentPage;
