import { Alert, AlertProps } from './Alert';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Alert.docs.mdx';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: AlertProps) => {
  const text = `${args.variant} alert`;

  return <Alert {...args}>{args.children || text}</Alert>;
};
Default.args = {
  variant: 'positive',
};
