import {
  Stack,
  Card,
  TextLinkButton,
  Heading,
  Column,
  Row,
  Text,
  Divider,
  InputText,
  Button
} from '@te-whatu-ora/anatomic';

const YourDetails = (props) => {
  return (
    <Row>
      <Column columns={12}>
        <Stack space="medium">
          <Stack horizontal space="medium">
            <TextLinkButton as="a" href="/" icon="arrow_left" iconPosition="left">Previous</TextLinkButton>
          </Stack>
          <Heading level="2">Your details</Heading>
          <Card>
            <Stack space="medium">
              <div>
                <Text weight="bold">First name</Text>
                <Text weight="regular">{props.firstName}</Text>
              </div>
              <div>
                <Text weight="bold">Last name</Text>
                <Text weight="regular">{props.lastName}</Text>
              </div>
              <Divider variant="light" />
              <div>
                <Text weight="bold">Date of birth</Text>
                <Text weight="regular">{props.dateOfBirth}</Text>
              </div>
              <form action="/" method="POST">
                <Stack space="medium">
                  <InputText
                    helperText="Your pass will be sent to this email address"
                    label="Email address"
                    name="email"
                    id="email"
                  />
                  <Divider variant="light" />
                  <Button
                    type="submit"
                    variant="primary"
                  >
                    Request pass
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                  >
                    Quit
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Card>
        </Stack>
      </Column>
    </Row>
  );
}

export default YourDetails;
