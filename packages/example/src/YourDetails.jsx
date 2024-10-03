import {
  Box,
  Stack,
  Card,
  TextLinkButton,
  Heading,
  Column,
  Row,
  Text,
  Divider,
  InputText,
  List,
  TextLink,
  Button
} from '@healthnz/pattern-library';

const YourDetails = (props) => {
  return (
    <Box backgroundColor="annotation5">
      <Row>
        <Column columns={12}>
          <Stack space="medium">
            <Stack horizontal space="medium">
              <TextLinkButton as="a" href="/" icon="arrow_left" iconPosition="left">Previous step</TextLinkButton>
            </Stack>
            <Heading level="2">Your details</Heading>
            <Card>
              <Stack space="medium">
                <Text as="p" weight="regular">These details will appear on your vaccine pass.</Text>
                <div>
                  <Text weight="bold">First name</Text>
                  <Text weight="regular">{props.firstName}</Text>
                </div>
                <div>
                  <Text weight="bold">Last name</Text>
                  <Text weight="regular">{props.lastName}</Text>
                </div>
                <div>
                  <Text weight="bold">Date of birth</Text>
                  <Text weight="regular">{props.dateOfBirth}</Text>
                </div>
                <Divider variant="light" />
                <form action="/" method="POST">
                  <Stack space="medium">
                    <InputText
                      helperText="Your pass will be sent to this email address"
                      label="Email address"
                      name="email"
                      id="email"
                    />
                    <Divider variant="light" />
                    <Heading level="3">Changing your details</Heading>
                    <List.Root type="ul">
                      <List.Item>
                        You can't edit your name or date of birth. These details come from your <TextLink href="#">NHI number</TextLink>
                      </List.Item>
                      <List.Item>
                        If you would like to update your details complete this <TextLink href="#" icon="link">change of details form</TextLink>
                      </List.Item>
                    </List.Root>
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
            <p>&nbsp;</p>
          </Stack>
        </Column>
      </Row>
    </Box>
  );
}

export default YourDetails;
