import { Divider, DividerProps } from './Divider';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Divider.docs.mdx';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      exclude: ['asChild'],
    },
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: DividerProps) => (
  // Wrapper with height to be able to show the vertical variant
  <div style={{ height: 50 }}>
    <Divider {...args} />
  </div>
);
