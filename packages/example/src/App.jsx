import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import '@te-whatu-ora/anatomic/styles';
import '@te-whatu-ora/anatomic-themes/styles';

import { ThemeProvider, Header, Stack, Container, Text, Navigation } from '@te-whatu-ora/anatomic';
import { myCovidRecord } from '@te-whatu-ora/anatomic-themes';

import Example from './Example';
import YourDetails from './YourDetails';

const App = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setNavigationOpen(navOpen => !navOpen)
  };

  return (
    <ThemeProvider theme={myCovidRecord.className}>
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
        withSearch
        onToggleNavigation={handleToggleNavigation}
        navigationOpen={navigationOpen}
      />
      <div style={{paddingTop: '9.6rem'}}>
        <Stack space="xxlarge" color="primary100">
          <Navigation.Root open={navigationOpen} withSearch>
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
            <Navigation.Item href="/forms" label="Forms" component={(props) => <Link {...props} to="/forms" />} />
            <Navigation.Item href="#" label="Nav item 4" />
            <Navigation.Item href="#" label="Nav item 5" />
          </Navigation.Root>
          <Container>
            <Stack space="medium">
              <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/forms" element={<YourDetails firstName="TYREE" lastName="GUNN" dateOfBirth="13 September 1994"/>} />
              </Routes>
            </Stack>
          </Container>
        </Stack>
      </div>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
