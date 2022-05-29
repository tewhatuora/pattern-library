import { Divider, DividerProps } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args: DividerProps) => (
  // Wrapper with height to be able to show the vertical variant
  <div style={{ height: 50 }}>
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'dark',
  decorative: false,
  orientation: 'horizontal',
};
