import { Alert, AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Default = (args: AlertProps) => {
  const text = args.variant || 'Alert';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Alert {...args}>{label}</Alert>;
};
