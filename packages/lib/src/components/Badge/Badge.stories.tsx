import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Badge.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'info',
  },
};
