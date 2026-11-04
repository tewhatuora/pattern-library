import { ComponentType, useState } from 'react';
import { Meta } from '@storybook/react-vite';

import { Text } from '../Text/Text';
import * as Header from './Header';
import Docs from './Header.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Navigation } from '../Navigation/Navigation';
import { InputSearch } from '../InputSearch/InputSearch';
import { Badge } from '../Badge/Badge';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';
import type { ContrastVariant } from '../../types';

const ExampleLogo = () => (
  <>
    <Text size="small">My COVID</Text>
    <Text size="small" weight="bold">
      Placeholder
    </Text>
  </>
);

export default {
  title: 'Patterns/Header',
  component: Header.Root,
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: false,
    },
  },
  args: {
    variant: 'light',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
} as Meta;

// Shown in an `article`, so each example's `header` isn't a page banner landmark (a page may only have one)
const ExampleHeader = ({
  variant,
  searchId,
  menuOpen,
}: {
  variant: ContrastVariant;
  searchId: string;
  menuOpen?: boolean;
}) => (
  <article>
    <Header.Root variant={variant}>
      <Header.Main>
        <Header.Left>
          <Header.Logo>
            <ExampleLogo />
            <Badge variant="info">Beta</Badge>
          </Header.Logo>
          <Header.TeWhatuOraLogo href="#" />
        </Header.Left>
        <Header.Right>
          <Navigation.Utility items={[{ href: '#', icon: 'language', label: 'Language' }]} variant={variant} />
          <InputSearch id={searchId} name="search" placeholder="Search" />
        </Header.Right>
        <Header.MenuButton open={menuOpen} variant={variant} />
      </Header.Main>
    </Header.Root>
  </article>
);

/**
 * Below the desktop breakpoint `Header.Right` (utility links and search) hides and the menu button shows instead, so
 * resize the window to see both layouts.
 */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label='variant="light"'>
        <ExampleHeader searchId="overview-search-light" variant="light" />
      </Variant>
      <Variant label='variant="dark"'>
        <ExampleHeader searchId="overview-search-dark" variant="dark" />
      </Variant>
      <Variant label="Menu open (menu button, up to tablet)">
        <ExampleHeader menuOpen searchId="overview-search-open" variant="light" />
      </Variant>
      <Variant label="Logo only">
        <article>
          <Header.Root variant="light">
            <Header.Main>
              <Header.Left>
                <Header.TeWhatuOraLogo href="#" />
              </Header.Left>
            </Header.Main>
          </Header.Root>
        </article>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

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
              },
            ]}
            variant={args.variant ?? 'light'}
          />

          <InputSearch id="search" name="search" placeholder="Search" />
        </Header.Right>
        <Header.MenuButton
          open={isMenuOpen}
          variant={args.variant ?? 'light'}
          onToggle={() => setIsMenuOpen((open) => !open)}
        />
      </Header.Main>
    </Header.Root>
  );
};
Default.decorators = [
  // The `Header` has fixed position, so need to wrap it in a transform so it renders inside the story.
  (Story: ComponentType) => (
    <div style={{ width: '100%', height: '6rem', transform: 'translate(0,0)' }}>
      <Story />
    </div>
  ),
];
