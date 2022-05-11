import React from 'react';

import { Column, ColumnProps } from './Column';
import { Columns } from './Columns';
import { Text } from '../Text/Text';

export default {
  title: 'Layout/Column',
  component: Column,
};

export const Default = (args: ColumnProps) => (
  <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
    <Columns>
      <Column {...args}>
        <div style={{ backgroundColor: '#eaeaea' }}>
          <Text align="center" as="div">
            Column
          </Text>
        </div>
      </Column>
    </Columns>
  </div>
);
