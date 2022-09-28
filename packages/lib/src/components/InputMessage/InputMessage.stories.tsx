import { InputMessage, InputMessageProps } from './InputMessage';

export default {
  title: 'Forms/InputMessage',
  component: InputMessage,
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
  },
  argTypes: {
    id: { control: false },
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
