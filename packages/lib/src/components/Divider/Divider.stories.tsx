import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Divider.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'light',
  },
};
