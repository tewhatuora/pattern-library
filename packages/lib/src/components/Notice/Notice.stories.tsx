import type { Meta, StoryObj } from '@storybook/react-vite';

import Docs from './Notice.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import icons from '../Icon/icons';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Notice } from './Notice';

const meta: Meta<typeof Notice> = {
  title: 'Transactional Components/Notice',
  component: Notice,
  argTypes: {
    variant: {
      options: ['positive', 'info', 'caution', 'critical'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    alternativeIcon: {
      options: [undefined, ...Object.keys(icons)],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notice>;

const variants = ['positive', 'info', 'caution', 'critical'] as const;

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="240px">
        {variants.map((variant) => (
          <Variant key={variant} label={variant}>
            <Notice label={`A short ${variant} notice`} variant={variant} />
          </Variant>
        ))}
      </Variants>
      <Variants minWidth="240px" title="Alternative icon">
        <Variant label="info, document icon">
          <Notice alternativeIcon="document" label="Results can take up to 3 days" variant="info" />
        </Variant>
      </Variants>
      <Variants minWidth="240px" title="Long message">
        <Variant label="Wraps">
          <Notice
            label="Results can take up to 3 days to arrive. We will send you a text message as soon as they are ready to view."
            variant="caution"
          />
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  args: {
    variant: 'info',
    label: 'A static message with a lighter visual treatment than alert',
  },
};
