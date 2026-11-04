import type { Meta } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import Docs from './Loader.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Loader, LoaderProps } from './Loader';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

const meta: Meta<typeof Loader> = {
  title: 'Transactional Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  argTypes: {
    variant: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
    message: {
      control: { type: 'text' },
    },
  },
  args: {
    message: 'Loading',
    variant: 'dark',
  },
};

export default meta;

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="160px">
      <Variant label="dark (for light backgrounds)">
        <Loader message="Loading" variant="dark" />
      </Variant>
      <Variant label="No message">
        <Loader message="" variant="dark" />
      </Variant>
      <Variant label="Long message">
        <Loader message="Loading your test results, this can take up to a minute" variant="dark" />
      </Variant>
    </Variants>
    <Variants dark minWidth="160px">
      <Variant label="light (for dark backgrounds)">
        <Loader message="Loading" variant="light" />
      </Variant>
      <Variant label="No message">
        <Loader message="" variant="light" />
      </Variant>
      <Variant label="Long message">
        <Loader message="Loading your test results, this can take up to a minute" variant="light" />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: LoaderProps) => {
  return (
    <ContrastWrapper variant={args.variant === 'light' ? 'dark' : 'light'}>
      <Loader {...args} />
    </ContrastWrapper>
  );
};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  await expect(within(canvasElement).getByRole('status')).toHaveTextContent('Loading');
};
