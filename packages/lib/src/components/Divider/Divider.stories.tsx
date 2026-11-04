import type { Meta, StoryObj } from '@storybook/react-vite';

import Docs from './Divider.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { Text } from '../Text/Text';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Transactional Components/Divider',
  component: Divider,
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    decorative: {
      control: { type: 'boolean' },
    },
    asChild: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  args: {
    decorative: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// A vertical divider fills its parent's height, so give it a row to sit in
const VerticalRow = ({ variant }: { variant: 'light' | 'dark' }) => {
  const textStyle = variant === 'dark' ? { color: '#fff' } : undefined;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
      <Text style={textStyle}>Left</Text>
      <Divider orientation="vertical" variant={variant} />
      <Text style={textStyle}>Right</Text>
    </div>
  );
};

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="100%" title="Horizontal">
        <Variant label="light (for light backgrounds)">
          <Divider variant="light" />
        </Variant>
      </Variants>
      <Variants dark minWidth="100%">
        <Variant label="dark (for dark backgrounds)">
          <Divider variant="dark" />
        </Variant>
      </Variants>
      <Variants minWidth="240px" title="Vertical">
        <Variant label="light">
          <VerticalRow variant="light" />
        </Variant>
      </Variants>
      <Variants dark minWidth="240px">
        <Variant label="dark">
          <VerticalRow variant="dark" />
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  // Gives a vertical divider a height to fill
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', height: '48px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: 'horizontal',
    variant: 'light',
  },
};
