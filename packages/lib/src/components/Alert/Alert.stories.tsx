import type { Meta, StoryObj } from '@storybook/react';

import Docs from './Alert.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'Alert',
    variant: 'positive',
  },
};
