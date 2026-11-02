import { useState } from 'react';
import { Link, Route, Routes } from 'react-router';

import { Container, Header, Navigation, Stack, Text, ThemeProvider } from '@healthnz/pattern-library';
import { neutral } from '@healthnz/pattern-library-themes';

import Example from './Example';
import YourDetails from './YourDetails';

const App = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleToggleNavigation = () => {
    setNavigationOpen((navOpen) => !navOpen);
  };

  return (
    <ThemeProvider theme={neutral}>
      <Stack color="primary100" space="xxlarge">
        <Header.Root>
          <Header.Main>
            <Header.Left>
              <Header.Logo>
                <Link to="/">
                  <Text size="small">LOGO</Text>
                  <Text size="small" weight="bold">
                    Placeholder
                  </Text>
                </Link>
              </Header.Logo>
            </Header.Left>
            <Header.Right>
              <Navigation.Utility
                items={[
                  { href: '#', icon: 'language', label: 'Language' },
                  { href: '#', icon: 'person', label: 'Name Surname' },
                ]}
                variant="light"
              />
            </Header.Right>
            <Header.MenuButton open={navigationOpen} onToggle={handleToggleNavigation} />
          </Header.Main>
        </Header.Root>
        <Stack color="primary100" space="xxlarge">
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
            <Navigation.Item component={(props) => <Link {...props} to="/forms" />} href="/forms" label="Forms" />
            <Navigation.Item href="#" label="Nav item 4" />
            <Navigation.Item href="#" label="Nav item 5" />
          </Navigation.Root>
          <Container>
            <Stack space="medium">
              <Routes>
                <Route element={<Example />} path="/" />
                <Route
                  element={<YourDetails dateOfBirth="13 September 1994" firstName="TYREE" lastName="GUNN" />}
                  path="/forms"
                />
              </Routes>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
