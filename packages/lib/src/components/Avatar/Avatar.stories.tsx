import type { Meta, StoryObj } from '@storybook/react-vite';

import Docs from './Avatar.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Transactional Components/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    initial: {
      control: { type: 'text' },
    },
    'aria-label': {
      control: { type: 'text' },
    },
    className: {
      control: false,
    },
  },
  args: {
    variant: 'small',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="120px">
        <Variant label="small">
          <Avatar initial="A" variant="small" />
        </Variant>
        <Variant label="large">
          <Avatar initial="A" variant="large" />
        </Variant>
      </Variants>
      <Variants minWidth="120px" title="Wide initials">
        <Variant label="small, W">
          <Avatar initial="W" variant="small" />
        </Variant>
        <Variant label="large, W">
          <Avatar initial="W" variant="large" />
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  args: {
    initial: 'A',
  },
};
