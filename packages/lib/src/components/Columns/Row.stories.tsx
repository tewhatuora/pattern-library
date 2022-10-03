import { PropsWithChildren } from 'react';

import { Row, RowProps } from './Row';
import { Column } from './Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';

export default {
  title: 'Layout/Row',
  component: Row,
  parameters: {
    controls: {
      include: ['noGutters', 'offset', 'gutter', 'className'],
    },
  },
};

const Example = ({ children }: PropsWithChildren<any>) => (
  <Box backgroundColor="primary25" borderColor="primary100" borderWidth="small" marginY="medium" paddingY="medium">
    <Text align="center" as="div">
      {children}
    </Text>
  </Box>
);

export const Grid = (args: RowProps<unknown>) => {
  return (
    <Box backgroundColor="primary5" paddingY="medium">
      <Container>
        <Row {...args}>
          <Column columns={12}>
            <Example>12</Example>
          </Column>
        </Row>

        <Row {...args}>
          <Column columns={6}>
            <Example>6</Example>
          </Column>
          <Column columns={6}>
            <Example>6</Example>
          </Column>
        </Row>

        <Row {...args}>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
        </Row>

        <Row {...args}>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export const NoGutters = (args: RowProps<unknown>) => {
  return (
    <Box backgroundColor="primary5" paddingY="medium">
      <Container>
        <Row {...args} noGutters>
          <Column columns={12}>
            <Example>12</Example>
          </Column>
        </Row>
      </Container>

      <Container>
        <Row {...args} noGutters>
          <Column columns={6}>
            <Example>6</Example>
          </Column>
          <Column columns={6}>
            <Example>6</Example>
          </Column>
        </Row>
      </Container>

      <Container>
        <Row {...args} noGutters>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
          <Column columns={4}>
            <Example>4</Example>
          </Column>
        </Row>
      </Container>

      <Container>
        <Row {...args} noGutters>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
          <Column columns={3}>
            <Example>3</Example>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export const LayoutExample = () => {
  return (
    <Box backgroundColor="primary5" paddingY="medium">
      <Container>
        <Row>
          <Column columns={8}>
            <Heading level="2">Heading</Heading>
            <Card>
              <Row offset>
                <Column center columns={6}>
                  <Heading level="3">Heading</Heading>
                  <Text as="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed
                    sit. Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis
                    maecenas facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu,
                    sed imperdiet volutpat.
                  </Text>
                  <Row>
                    <Column columns={3}>
                      <Button>Normal</Button>
                    </Column>
                    <Column columns={3}>
                      <Button variant="secondary">Normal</Button>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Card>

            <Row>
              <Column center columns={6}>
                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed
                  sit. Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas
                  facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet
                  volutpat.
                </Text>
              </Column>
            </Row>
          </Column>
          <Column columns={4}>
            <Heading level="2">Heading</Heading>
            <Card>
              <Text as="p">Lorem ipsum dolor sit amet,</Text>
            </Card>
          </Column>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Column columns={6} start={2}>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit.
              Dui turpis vestibulum, scelerisque tristique amet augue facilisis. Turpis dignissim duis maecenas
              facilisis. Dictumst quam orci eu venenatis in et faucibus ut diam. Pharetra turpis arcu, sed imperdiet
              volutpat.
            </Text>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

LayoutExample.parameters = {
  controls: { hideNoControlsWarning: true, exclude: /.+/g, include: [] },
};
