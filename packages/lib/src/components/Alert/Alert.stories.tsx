import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Docs from './Alert.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import icons from '../Icon/icons';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Transactional Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: ['positive', 'informative', 'cautionary', 'critical'],
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    alternativeIcon: {
      options: [undefined, ...Object.keys(icons)],
      control: { type: 'select' },
    },
    onClose: {
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
type Story = StoryObj<typeof Alert>;

const variants = ['positive', 'informative', 'cautionary', 'critical'] as const;

export const Overview: Story = {
  render: () => (
    <VariantSections>
      <Variants minWidth="260px">
        {variants.map((variant) => (
          <Variant key={variant} label={variant}>
            <Alert variant={variant}>A short {variant} message</Alert>
          </Variant>
        ))}
      </Variants>
      <Variants minWidth="260px" title="With close button">
        {variants.map((variant) => (
          <Variant key={variant} label={variant}>
            <Alert variant={variant} onClose={() => {}}>
              A short {variant} message
            </Alert>
          </Variant>
        ))}
      </Variants>
      <Variants minWidth="260px" title="Alternative icon">
        <Variant label="informative, document icon">
          <Alert alternativeIcon="document" variant="informative">
            Your results are ready
          </Alert>
        </Variant>
      </Variants>
      <Variants minWidth="260px" title="Long message">
        <Variant label="Wraps, with close button">
          <Alert variant="critical" onClose={() => {}}>
            Your session has expired because you have been inactive for a while. Sign in again to continue where you
            left off.
          </Alert>
        </Variant>
      </Variants>
    </VariantSections>
  ),
  parameters: { controls: { disable: true } },
};

export const Default: Story = {
  args: {
    children: 'Alert',
    variant: 'positive',
  },
};

export const WithCloseButton: Story = {
  args: {
    children: 'Alert with a close button',
    variant: 'informative',
    onClose: fn(),
  },
};
