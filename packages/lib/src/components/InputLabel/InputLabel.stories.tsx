import { InputLabel, InputLabelProps } from './InputLabel';

export default {
  title: 'Components/Accordion',
  component: InputLabel,
  argTypes: {},
};

export const Default = (args: InputLabelProps) => {
  return <InputLabel {...args} />;
};
Default.args = {
  label: 'Heading',
  subheading: 'Subheading',
  tertiaryLabel: 'Tertiary label',
};

// VideoPauseAdvert.advertising.allowMultipleAop
