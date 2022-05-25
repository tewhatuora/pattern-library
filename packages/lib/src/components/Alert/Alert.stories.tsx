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
  },
};

export const Default = (args: AlertProps) => {
  const text = `${args.variant} alert`;

  return <Alert {...args}>{args.children || text}</Alert>;
};
