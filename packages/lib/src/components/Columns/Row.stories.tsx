import { Row, RowProps } from './Row';
import { Column, ColumnProps } from './Column';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';

export default {
  title: 'Layout/Row',
  component: Row,
};

const Example = (props) => (
  <div
    style={{
      padding: '2rem 0',
      backgroundColor: '#eaeaea',
    }}
  >
    <Text align="center" as="div">
      {props.children}
    </Text>
  </div>
);

export const Grid = (args: RowProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
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
    </div>
  );
};

export const NoGutters = (args: RowProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
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
    </div>
  );
};

const Card = (props) => (
  <div
    style={{
      padding: '2rem 0',
      borderRadius: '0.8rem',
      boxShadow: '0rem 0.4rem 3rem 0rem #4040401a',
      backgroundColor: '#fff',
    }}
  >
    {props.children}
  </div>
);
export const LayoutExample = () => {
  return (
    <div style={{ padding: '10rem 0', backgroundColor: '#f8f7ff' }}>
      <Container>
        <Row>
          <Column columns={8}>
            <Heading level={2}>Heading</Heading>
            <Card>
              <Row>
                <Column center columns={6}>
                  <Heading level={3}>Heading</Heading>
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
            <Heading level={2}>Heading</Heading>
            <Card>
              <Text align="center" as="div">
                Lorem ipsum dolor sit amet,
              </Text>
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
    </div>
  );
};
