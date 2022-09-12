import '@te-whatu-ora/anatomic/styles';
import '@te-whatu-ora/anatomic-themes/styles';
import {Stack, Row, Column, Card, Button, Heading, Text, AnchorLink, Breadcrumbs} from '@te-whatu-ora/anatomic';

const Example = (props) => {
  return (
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
        {/*<Column columns={4}>*/}
        {/*  <Stack space="medium">*/}
        {/*    <span><Badge variant="positive">v1.0.0</Badge></span>*/}
        {/*    <InputDropdown*/}
        {/*      label="Theme"*/}
        {/*      value={theme}*/}
        {/*      options={[*/}
        {/*        {*/}
        {/*          label: 'Neutral',*/}
        {/*          value: neutral.className*/}
        {/*        },*/}
        {/*        {*/}
        {/*          label: 'My Covid Record',*/}
        {/*          value: myCovidRecord.className*/}
        {/*        },*/}
        {/*        {*/}
        {/*          label: 'My Health Account',*/}
        {/*          value: myHealthAccount.className*/}
        {/*        },*/}
        {/*      ]}*/}
        {/*      onChange={(e) => setTheme(e.target.value)}*/}
        {/*    />*/}
        {/*  </Stack>*/}
        {/*</Column>*/}
      </Row>
    </Stack>
  );
}

export default Example;
