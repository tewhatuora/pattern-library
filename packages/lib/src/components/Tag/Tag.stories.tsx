import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Tag.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Tag Component',
  },
};
