import { Meta } from '@storybook/react';

export default {
  title: 'Templates/Layouts',
  argTypes: {},
  parameters: {},
  decorators: [
    // The `Header` has fixed position, so need to wrap it in a transform so it renders inside the story.
    (Story) => (
      <div style={{ transform: 'translate(0,0)' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export { default as ContentPage } from './ContentPage';
