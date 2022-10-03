import { PropsWithChildren, useEffect, useState } from 'react';

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
    logoLinkHref: {
      defaultValue: '/',
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

const RouterLink = ({ children, ...rest }: PropsWithChildren<any>) => (
  <a {...rest} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

export const Default = (args: HeaderProps) => {
  const [navigationOpen, setNavigationOpen] = useState(args.navigationOpen);
  const handleToggleNavigation = () => setNavigationOpen(!navigationOpen);

  useEffect(() => {
    setNavigationOpen(args.navigationOpen);
  }, [args.navigationOpen]);

  return (
    <Header
      {...args}
      logoComponent={logoComponent}
      navigationOpen={navigationOpen}
      onToggleNavigation={handleToggleNavigation}
    />
  );
};

export const CustomLogoLinkComponent = (args: HeaderProps) => {
  const [navigationOpen, setNavigationOpen] = useState(args.navigationOpen);
  const handleToggleNavigation = () => setNavigationOpen(!navigationOpen);

  useEffect(() => {
    setNavigationOpen(args.navigationOpen);
  }, [args.navigationOpen]);

  return (
    <Header
      {...args}
      logoComponent={logoComponent}
      logoLinkComponent={RouterLink}
      onToggleNavigation={handleToggleNavigation}
    />
  );
};
