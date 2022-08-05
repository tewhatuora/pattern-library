import { Divider, DividerProps } from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    controls: {
      exclude: ['asChild'],
    },
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
};

export const Default = (args: DividerProps) => (
  // Wrapper with height to be able to show the vertical variant
  <div style={{ height: 50 }}>
    <Divider {...args} />
  </div>
);
