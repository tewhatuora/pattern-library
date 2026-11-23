import { PropsWithChildren } from 'react';

import { Box } from '../Box/Box';
import { Column, ColumnLength, ColumnProps } from './Column';
import { Row } from './Row';
import { Text } from '../Text/Text';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

const columnLengths: ColumnLength[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default {
  title: 'Layout/Column',
  component: Column,
  parameters: {
    controls: {
      include: ['columns', 'start', 'center', 'mobile', 'tablet', 'desktop', 'wide', 'className', 'children'],
    },
  },
  argTypes: {
    columns: {
      options: columnLengths,
      control: { type: 'select' },
    },
    start: {
      options: columnLengths,
      control: { type: 'select' },
    },
    mobile: {
      options: columnLengths,
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
    center: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: false,
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    columns: 6,
    start: 1,
    center: false,
  },
};

const Cell = ({ children }: PropsWithChildren) => (
  <Box backgroundColor="primary25" borderColor="primary100" borderWidth="small" paddingY="small">
    <Text align="center" as="div">
      {children}
    </Text>
  </Box>
);

/** Columns take the full width on mobile, so narrow the window to see the mobile layout. */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Width (columns of 12)">
      {columnLengths.map((columns) => (
        <Variant key={columns} label={`columns={${columns}}`}>
          <Row>
            <Column columns={columns}>
              <Cell>{columns}</Cell>
            </Column>
          </Row>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="100%" title="Position">
      <Variant label="start={4}">
        <Row>
          <Column columns={6} start={4}>
            <Cell>6, starting at line 4</Cell>
          </Column>
        </Row>
      </Variant>
      <Variant label="center">
        <Row>
          <Column center columns={6}>
            <Cell>6, centred</Cell>
          </Column>
        </Row>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Per breakpoint">
      <Variant label="columns={12} tablet={6} desktop={4} wide={3}: resize the window to see it change">
        <Row>
          <Column columns={12} desktop={4} tablet={6} wide={3}>
            <Cell>12 / 6 / 4 / 3</Cell>
          </Column>
        </Row>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: ColumnProps) => (
  <Box backgroundColor="primary5" paddingY="medium">
    <Row>
      <Column {...args}>
        <Box
          backgroundColor="primary25"
          borderColor="primary100"
          borderWidth="small"
          marginY="medium"
          paddingY="medium"
        >
          <Text align="center" as="div">
            {args.columns} column{args.columns > 1 && 's'}
          </Text>
        </Box>
      </Column>
    </Row>
  </Box>
);
