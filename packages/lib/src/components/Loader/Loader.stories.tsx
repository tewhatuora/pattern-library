import type { Meta } from '@storybook/react';

import Docs from './Loader.docs.mdx';
import DocsPage from '../../../utils/DocsPage';

import { Loader, LoaderProps } from './Loader';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
  args: {
    message: 'Loading',
  },
};

export default meta;

export const Default = (args: LoaderProps) => {
  return (
    <ContrastWrapper variant={args.variant === 'light' ? 'dark' : 'light'}>
      <Loader {...args} />
    </ContrastWrapper>
  );
};
