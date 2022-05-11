import React from 'react';

import { Columns, ColumnsProps } from './Columns';
import { Column, ColumnProps } from './Column';
import { Text } from '../Text/Text';

export default {
  title: 'Layout/Columns',
  component: Columns,
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

export const Grid = (args: ColumnsProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
      <Columns {...args}>
        <Column columns={12}>
          <Example>12</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={6}>
          <Example>6</Example>
        </Column>
        <Column columns={6}>
          <Example>6</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
        <Column columns={4}>
          <Example>4</Example>
        </Column>
      </Columns>

      <Columns {...args}>
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
      </Columns>
    </div>
  );
};

export const NoGutters = (args: ColumnsProps) => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
      <Columns {...args}>
        <Column columns={12} noGutters>
          <Example>12</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={6} noGutters>
          <Example>6</Example>
        </Column>
        <Column columns={6} noGutters>
          <Example>6</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
        <Column columns={4} noGutters>
          <Example>4</Example>
        </Column>
      </Columns>

      <Columns {...args}>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
        <Column columns={3} noGutters>
          <Example>3</Example>
        </Column>
      </Columns>
    </div>
  );
};
