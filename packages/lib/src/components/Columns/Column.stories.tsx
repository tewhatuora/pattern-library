import { Column, ColumnProps } from './Column';
import { Row } from './Row';
import { Text } from '../Text/Text';

const columnOptions = {
  control: 'select',
  options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

export default {
  title: 'Layout/Column',
  component: Column,
  argTypes: {
    mobile: columnOptions,
    tablet: columnOptions,
    desktop: columnOptions,
    wide: columnOptions,
  },
};

export const Default = (args: ColumnProps) => (
  <div style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ccc' }}>
    <Row>
      <Column {...args}>
        <div style={{ backgroundColor: '#eaeaea' }}>
          <Text align="center" as="div">
            Column
          </Text>
        </div>
      </Column>
    </Row>
  </div>
);
