import { Notice, NoticeProps } from './Notice';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Notice.docs.mdx';

export default {
  title: 'Components/Notice',
  component: Notice,
  argTypes: {
    label: {
      defaultValue: 'A static message with a lighter visual treatment than alert',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: NoticeProps) => {
  const text = args.variant || 'notice';
  const label = `${text.substr(0, 1).toUpperCase()}${text.substr(1, text.length)}`;

  return <Notice {...args}>{label}</Notice>;
};
