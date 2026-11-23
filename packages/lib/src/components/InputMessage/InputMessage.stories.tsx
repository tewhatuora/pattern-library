import { InputMessage, InputMessageProps } from './InputMessage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/InputMessage',
  component: InputMessage,
  parameters: {
    controls: {
      exclude: ['labelProps', 'descriptionProps', 'errorMessageProps'],
    },
  },
  argTypes: {
    // Not used by InputMessage
    id: { control: false },
    helperText: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="240px">
      <Variant label="Helper text">
        <InputMessage helperText="Helper text" />
      </Variant>
      <Variant label="Error message">
        <InputMessage errorMessage="Error message" />
      </Variant>
      <Variant label="Helper text and error message">
        <InputMessage errorMessage="Error message" helperText="Helper text" />
      </Variant>
      <Variant label="Disabled (error message hidden)">
        <InputMessage disabled errorMessage="Error message" helperText="Helper text" />
      </Variant>
    </Variants>
    <Variants minWidth="240px" title="Long content">
      <Variant label="Long helper text and error message">
        <InputMessage
          errorMessage="A long error message that explains what went wrong and how to fix it, over several lines"
          helperText="Long helper text that describes what to enter in the field, wrapping onto more lines"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: InputMessageProps) => {
  return <InputMessage {...args} />;
};
Default.args = {
  helperText: 'Helper text',
  errorMessage: 'Error message',
  disabled: false,
};

export const HelperText = (args: InputMessageProps) => {
  return <InputMessage {...args} helperText="Helper text" />;
};

export const ErrorMessage = (args: InputMessageProps) => {
  return <InputMessage {...args} errorMessage="Error message" />;
};
