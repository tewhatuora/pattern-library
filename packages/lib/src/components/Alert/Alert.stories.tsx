import { Alert, AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    onClose: {
      control: false,
    },
  },
};

export const Default = (args: AlertProps) => {
  const text = `${args.variant} alert`;

  return <Alert {...args}>{args.children || text}</Alert>;
};
Default.args = {
  variant: 'positive',
};
