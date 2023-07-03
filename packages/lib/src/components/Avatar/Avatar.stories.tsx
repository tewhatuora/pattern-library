import { Avatar, AvatarProps } from './Avatar';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Avatar.docs.mdx';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    initial: {
      defaultValue: 'A',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: AvatarProps) => {
  return <Avatar {...args} />;
};
