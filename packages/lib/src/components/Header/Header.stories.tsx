import { Text } from '../Text/Text';
import { Header, HeaderProps } from './Header';
import Docs from './Header.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

const logoComponent = (
  <>
    <Text size="small">My COVID</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    utilityNavItems: {
      control: {
        type: 'array',
      },
      defaultValue: [
        {
          href: '#',
          icon: 'language',
          label: 'Language',
        },
        {
          href: '#',
          icon: 'person',
          label: 'Name Surname',
        },
      ],
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: HeaderProps) => <Header {...args} logoComponent={logoComponent} />;
