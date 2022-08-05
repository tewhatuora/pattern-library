import { Box } from '../Box/Box';
import { Column, ColumnProps } from './Column';
import { Row } from './Row';
import { Text } from '../Text/Text';

export default {
  title: 'Layout/Column',
  component: Column,
  argTypes: {
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
};

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
