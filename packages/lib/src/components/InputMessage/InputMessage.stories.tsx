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
      control: false,
    },
    errorMessage: {
      control: false,
    },
  },
};

export const Default = (args: InputMessageProps) => {
  return <InputMessage {...args} errorMessage="Error message" helperText="Helper text" />;
};

export const HelperText = (args: InputMessageProps) => {
  return <InputMessage {...args} helperText="Helper text" />;
};

export const ErrorMessage = (args: InputMessageProps) => {
  return <InputMessage {...args} errorMessage="Error message" />;
};
