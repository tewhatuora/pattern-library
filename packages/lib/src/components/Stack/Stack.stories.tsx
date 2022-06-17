import { Stack, StackProps } from './Stack';
import { Box } from '../Box/Box';
import { vars } from '../../themes/vars.css';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    space: {
      options: ['', ...Object.keys(vars.space)],
      control: { type: 'select' },
    },
    horizontal: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = (args: StackProps) => (
  <Stack {...args}>
    {[...Array(5)].map((x) => (
      <Box
        alignItems="center"
        backgroundColor="info25"
        borderColor="info100"
        borderWidth="small"
        color="info100"
        display="flex"
        justifyContent="center"
        key={x}
        padding="medium"
      >
        Item {x}
      </Box>
    ))}
  </Stack>
);
