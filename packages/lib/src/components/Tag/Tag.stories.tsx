import { Tag, TagProps } from './Tag';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Tag.docs.mdx';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      defaultValue: 'Tag Component',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: TagProps) => {
  return (
    <Tag
      {...args}
      onClear={() => {
        alert('Tag closed!');
      }}
    >
      Tag with onClear
    </Tag>
  );
};
