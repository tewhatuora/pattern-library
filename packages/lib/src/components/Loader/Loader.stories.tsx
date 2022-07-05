import { Loader, LoaderProps } from './Loader';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Loader.docs.mdx';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    message: {
      defaultValue: 'Loading',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: LoaderProps) => {
  return <Loader {...args} />;
};
