import type { Meta, StoryObj } from '@storybook/react-vite';

import Docs from './Badge.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Transactional Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['positive', 'info', 'neutral', 'caution', 'critical'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    tabIndex: {
      control: { type: 'number' },
    },
    onClick: {
      control: false,
    },
    onMouseEnter: {
      control: false,
    },
    onMouseLeave: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const variants = ['positive', 'info', 'neutral', 'caution', 'critical'] as const;

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="120px">
        {variants.map((variant) => (
          <Variant key={variant} label={variant}>
            <Badge variant={variant}>Badge</Badge>
          </Variant>
        ))}
      </Variants>
      <Variants title="Long label">
        <Variant label="In a narrow column">
          <div style={{ maxWidth: '160px' }}>
            <Badge variant="info">A longer badge label that wraps onto another line</Badge>
          </div>
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'info',
  },
};
