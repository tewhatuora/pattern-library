import { Stack, StackProps } from './Stack';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    controls: {
      include: ['as', 'space', 'horizontal', 'className'],
    },
  },
  argTypes: {
    as: {
      control: false,
    },
    space: {
      options: ['', ...Object.keys(vars.space)],
      control: { type: 'select' },
    },
    horizontal: {
      control: { type: 'boolean' },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = (args: StackProps) => (
  <Stack {...args}>
    {[...Array(5)].map((x, i) => (
      <Box
        alignItems="center"
        backgroundColor="primary25"
        borderColor="primary100"
        borderWidth="small"
        color="primary100"
        display="flex"
        justifyContent="center"
        key={x}
        padding="medium"
      >
        <Text>Item {i + 1}</Text>
      </Box>
    ))}
  </Stack>
);
