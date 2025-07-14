import { useState } from 'react';
import { Meta } from '@storybook/react';

import { Text } from '../Text/Text';
import * as Header from './Header';
import Docs from './Header.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Navigation } from '../Navigation/Navigation';
import { InputSearch } from '../InputSearch/InputSearch';
import { Badge } from '../Badge/Badge';

const ExampleLogo = () => (
  <>
    <Text size="small">My COVID</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

export default {
  title: 'Components/Header',
  component: Header.Root,
  decorators: [
    // The `Header` has fixed position, so need to wrap it in a transform so it renders inside the story.
    (Story) => (
      <div style={{ width: '100%', height: '6rem', transform: 'translate(0,0)' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
    },
  },
  args: {
    variant: 'light'
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} as Meta;

export const Default = (args: Header.HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Header.Root {...args}>
      <Header.Main>
        <Header.Left>
          <Header.Logo>
            <ExampleLogo />
            <Badge variant="info">Beta</Badge>
          </Header.Logo>
          <Header.TeWhatuOraLogo href="https://www.tewhatuora.govt.nz/" />
        </Header.Left>

        <Header.Right>
          <Navigation.Utility
            items={[
              {
                href: '#',
                icon: 'language',
                label: 'Language',
              }
            ]}
            variant={args.variant!}
          />

          <InputSearch id="search" name="search" placeholder="Search" />
        </Header.Right>
        <Header.MenuButton open={isMenuOpen} onToggle={() => setIsMenuOpen((open) => !open)} variant={args.variant!} />
      </Header.Main>
    </Header.Root>
  );
};
