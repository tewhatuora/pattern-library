import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Avatar.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initial: 'A',
  },
};
