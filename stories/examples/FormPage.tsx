import { useState } from 'react';
import {
  Header,
  Navigation,
  Container,
  Row,
  Column,
  Stack,
  Text,
  Footer,
  Card,
  Button,
  Heading,
  InputText,
  InputPhone,
  InputDate,
  InputDropdown,
  TextLink,
  RadioGroup,
  RadioButton,
  Alert,
} from '../../packages/lib/src/components';

const FormPage = () => {
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
              <Row>
                <Column columns={8} center>
                  <Stack space="large">
                    <Stack space="xsmall">
                      <TextLink icon="arrow_left" iconPosition="left" href="/">
                        Normal
                      </TextLink>
                      <Heading level="2">Heading</Heading>
                    </Stack>
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
                            <form action="/" method="POST">
                              <Stack space="medium">
                                <InputText type="text" label="Heading" name="heading" id="heading" />
                                <InputText
                                  type="text"
                                  label="Heading"
                                  name="heading2"
                                  id="heading2"
                                  helperText="Helper text"
                                  errorMessage="Error message"
                                />
                                <InputPhone label="Phone" name="phone" id="phone" placeholder="e.g. 027 345 0000" />
                                <InputDate label="Date" name="date" helperText="For example, 31 3 1980" />
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
                                <RadioGroup name="radio1" label="Heading" helperText="Helper text">
                                  <RadioButton id="value_one" label="Content one" value="one" />
                                  <RadioButton id="value_two" label="Content two" value="two" />
                                  <RadioButton id="value_three" label="Content three" value="three" />
                                </RadioGroup>
                                <RadioGroup
                                  name="radio2"
                                  label="Heading"
                                  helperText="Helper text"
                                  errorMessage="Error message"
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

export default FormPage;
