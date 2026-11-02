import { Meta } from '@storybook/react-vite';

import ContentPageTemplate from './ContentPage';

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

// Declared rather than re-exported so the Storybook Vitest plugin picks it up as a story
export const ContentPage = ContentPageTemplate;
