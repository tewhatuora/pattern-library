import { InputMessage, InputMessageProps } from './InputMessage';

export default {
  title: 'Input/InputMessage',
  component: InputMessage,
  argTypes: {
    helperText: {
      defaultValue: 'Helper text',
    },
    errorMessage: {
      defaultValue: 'Error message',
    },
  },
};

export const Default = (args: InputMessageProps) => {
  return <InputMessage {...args} />;
};
