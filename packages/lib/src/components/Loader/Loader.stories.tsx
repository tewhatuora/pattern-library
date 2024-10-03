import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Loader.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    message: 'Loading',
  },
};
