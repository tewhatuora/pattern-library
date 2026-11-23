import { PropsWithChildren } from 'react';

import { Row, RowProps } from './Row';
import { Column } from './Column';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

const columnLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gutters = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'] as const;

export default {
  title: 'Layout/Row',
  component: Row,
  parameters: {
    controls: {
      include: ['noGutters', 'offset', 'gutter', 'tablet', 'desktop', 'wide', 'className'],
    },
  },
  argTypes: {
    noGutters: {
      control: { type: 'boolean' },
    },
    offset: {
      control: { type: 'boolean' },
    },
    gutter: {
      options: gutters,
      control: { type: 'select' },
    },
    tablet: {
      options: columnLengths,
      control: { type: 'select' },
    },
    desktop: {
      options: columnLengths,
      control: { type: 'select' },
    },
    wide: {
      options: columnLengths,
      control: { type: 'select' },
    },
    // Not used by Row: set the width on the Column instead
    columns: {
      control: false,
    },
    className: {
      control: { type: 'text' },
    },
  },
  args: {
    gutter: 'medium',
    noGutters: false,
    offset: false,
  },
};

const Example = ({ children }: PropsWithChildren<any>) => (
  <Box backgroundColor="primary25" borderColor="primary100" borderWidth="small" marginY="medium" paddingY="medium">
    <Text align="center" as="div">
      {children}
    </Text>
  </Box>
);

const Cell = ({ children }: PropsWithChildren) => (
  <Box backgroundColor="primary25" borderColor="primary100" borderWidth="small" paddingY="small">
    <Text align="center" as="div">
      {children}
    </Text>
  </Box>
);

const splits: { label: string; columns: (1 | 2 | 3 | 4 | 6 | 8 | 12)[] }[] = [
  { label: '12', columns: [12] },
  { label: '6 + 6', columns: [6, 6] },
  { label: '8 + 4', columns: [8, 4] },
  { label: '4 + 4 + 4', columns: [4, 4, 4] },
  { label: '3 + 3 + 3 + 3', columns: [3, 3, 3, 3] },
  { label: '2 × 6', columns: [2, 2, 2, 2, 2, 2] },
];

/** Columns stack on mobile, so narrow the window to see the mobile layout. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Column splits (12 column grid from tablet up, stacked on mobile)">
      {splits.map(({ label, columns }) => (
        <Variant key={label} label={label}>
          <Row>
            {columns.map((cols, i) => (
              // Cells never reorder
              // eslint-disable-next-line react/no-array-index-key
              <Column columns={cols} key={i}>
                <Cell>{cols}</Cell>
              </Column>
            ))}
          </Row>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="100%" title="Gutter">
      {[...gutters].map((gutter) => (
        <Variant key={gutter} label={gutter}>
          <Row gutter={gutter}>
            {[4, 4, 4].map((cols, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Column columns={cols as 4} key={i}>
                <Cell>4</Cell>
              </Column>
            ))}
          </Row>
        </Variant>
      ))}
      <Variant label="noGutters">
        <Row noGutters>
          {[4, 4, 4].map((cols, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Column columns={cols as 4} key={i}>
              <Cell>4</Cell>
            </Column>
          ))}
        </Row>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Nested and offset">
      <Variant label="Row nested in an 8 column Column uses an 8 column grid">
        <Row>
          <Column columns={8}>
            <Box borderColor="primary100" borderWidth="small" padding="small">
              <Row>
                <Column columns={4}>
                  <Cell>4 of 8</Cell>
                </Column>
                <Column columns={4}>
                  <Cell>4 of 8</Cell>
                </Column>
              </Row>
            </Box>
          </Column>
          <Column columns={4}>
            <Cell>4</Cell>
          </Column>
        </Row>
      </Variant>
      <Variant label="offset: pulls the nested row into the parent's gutters (tablet up)">
        <Row>
          <Column columns={12}>
            <Box borderColor="primary100" borderWidth="small" padding="small">
              <Row offset>
                <Column columns={6}>
                  <Cell>6</Cell>
                </Column>
                <Column columns={6}>
                  <Cell>6</Cell>
                </Column>
              </Row>
            </Box>
          </Column>
        </Row>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
