import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Notice.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Notice } from './Notice';

const meta: Meta<typeof Notice> = {
  title: 'Components/Notice',
  component: Notice,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notice>;

export const Default: Story = {
  args: {
    variant: 'info',
    label: 'A static message with a lighter visual treatment than alert',
  },
};
