import { useState } from 'react';
import '@te-whatu-ora/anatomic/styles';
import '@te-whatu-ora/anatomic-themes/styles';

import { ThemeProvider, Header, Footer, Stack, Badge, Container, Row, Column, Card, Breadcrumbs, AnchorLink, Button, InputDropdown, Heading, Text, Navigation } from '@te-whatu-ora/anatomic';
import { neutral, myCovidRecord, myHealthAccount } from '@te-whatu-ora/anatomic-themes';


const App = (props) => {
  const [theme, setTheme] = useState(neutral.className);

  return (
    <ThemeProvider theme={theme}>
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
            <Text size="small">My COVID</Text>
            <Text size="small" weight="bold">
              Placeholder
            </Text>
          </>
        }
        beta
        withSearch
      />
      <div style={{paddingTop: '9.6rem'}}>
        <Stack space="xxlarge" color="primary100">
        <Navigation.Root withSearch>
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
          <Navigation.Item href="#" label="Nav item 3" />
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
              <Column columns={8}>
                <Card>
                  <Row>
                    <Column columns={6} center>
                      <Stack space="medium">
                        <Heading level="1">Example app</Heading>
                        <Text as="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis consequuntur cupiditate deleniti, doloribus facere id iste laborum nemo odio perspiciatis porro quaerat quasi quia, repellendus unde vel voluptatibus.</Text>
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
              </Column>
              <Column columns={4}>
                <Stack space="medium">
                  <span><Badge variant="positive">v1.0.0</Badge></span>
                <InputDropdown
                  label="Theme"
                  value={theme}
                  options={[
                    {
                      label: 'Neutral',
                      value: neutral.className
                    },
                    {
                      label: 'My Covid Record',
                      value: myCovidRecord.className
                    },
                    {
                      label: 'My Health Account',
                      value: myHealthAccount.className
                    },
                  ]}
                  onChange={(e) => setTheme(e.target.value)}
                />
                </Stack>
              </Column>
            </Row>
          </Stack>
        </Container>
        <Footer
          imprintItems={[
            { text: '© Ministry of Health | Manatū Hauora' },
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
        </Footer>
      </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
