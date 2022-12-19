import { useState } from 'react';

import {
  Alert,
  Button,
  Card,
  Column,
  Container,
  Footer,
  Header,
  Heading,
  InputDate,
  InputDropdown,
  InputPhone,
  InputSearch,
  InputText,
  Navigation,
  RadioButton,
  RadioGroup,
  Row,
  Stack,
  Text,
  TextLink,
} from '../../packages/lib/src/components';

const ExampleLogo = () => (
  <>
    <Text size="small">LOGO</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

const FormPage = () => {
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
                <Column center columns={8}>
                  <Stack space="large">
                    <Stack space="xsmall">
                      <TextLink href="/" icon="arrow_left" iconPosition="left">
                        Normal
                      </TextLink>
                      <Heading level="2">Heading</Heading>
                    </Stack>
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
                            <form action="/" method="POST">
                              <Stack space="medium">
                                <InputText id="heading" label="Heading" name="heading" type="text" />
                                <InputText
                                  errorMessage="Error message"
                                  helperText="Helper text"
                                  id="heading2"
                                  label="Heading"
                                  name="heading2"
                                  type="text"
                                />
                                <InputPhone id="phone" label="Phone" name="phone" placeholder="e.g. 027 345 0000" />
                                <InputDate helperText="For example, 31 3 1980" label="Date" name="date" />
                                <InputDropdown
                                  label="Heading"
                                  name="heading3"
                                  options={[
                                    {
                                      value: '',
                                      label: '',
                                    },
                                    {
                                      value: '1',
                                      label: 'Option 1',
                                    },
                                    {
                                      value: '2',
                                      label: 'Option 2',
                                    },
                                    {
                                      value: '3',
                                      label: 'Option 3',
                                    },
                                  ]}
                                />
                                <RadioGroup helperText="Helper text" label="Heading" name="radio1">
                                  <RadioButton id="value_one" label="Content one" value="one" />
                                  <RadioButton id="value_two" label="Content two" value="two" />
                                  <RadioButton id="value_three" label="Content three" value="three" />
                                </RadioGroup>
                                <RadioGroup
                                  errorMessage="Error message"
                                  helperText="Helper text"
                                  label="Heading"
                                  name="radio2"
                                >
                                  <RadioButton id="value_one" label="Content one" value="one" />
                                  <RadioButton id="value_two" label="Content two" value="two" />
                                  <RadioButton id="value_three" label="Content three" value="three" />
                                </RadioGroup>
                                <Alert variant="informative" onClose={() => {}}>
                                  This is an informative message
                                </Alert>
                                <Row>
                                  <Column columns={3}>
                                    <Button type="button" variant="secondary">
                                      Quit
                                    </Button>
                                  </Column>
                                  <Column columns={3}>
                                    <Button type="submit" variant="primary">
                                      Continue
                                    </Button>
                                  </Column>
                                </Row>
                              </Stack>
                            </form>
                          </Stack>
                        </Column>
                      </Row>
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

export default FormPage;
