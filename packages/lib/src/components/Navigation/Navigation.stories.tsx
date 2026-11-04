import { ForwardedRef, forwardRef } from 'react';
import { expect, within } from 'storybook/test';

import { LinkComponentProps } from '@/src/types';

import { MenuListProps } from '@/src/components/Navigation/MenuList';

import { LinkProps } from '../Navigation/Link';

import { Navigation } from './Navigation';
import { NavigationProps } from './Root';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Navigation.docs.mdx';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';
import type { ContrastVariant } from '../../types';

export default {
  title: 'Patterns/Navigation',
  component: Navigation,
  subcomponents: {
    Root: Navigation.Root,
    Item: Navigation.Item,
    Menu: Navigation.Menu,
    MenuList: Navigation.MenuList,
    Side: Navigation.Side,
    Utility: Navigation.Utility,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

const navArgTypes = {
  open: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    control: {
      type: 'radio',
    },
    options: ['light', 'dark'],
  },
  withSearch: {
    control: {
      type: 'boolean',
    },
  },
  searchFormAction: {
    control: {
      type: 'text',
    },
  },
  searchFormMethod: {
    control: {
      type: 'select',
    },
    options: ['GET', 'POST'],
  },
  'aria-label': {
    control: { type: 'text' },
  },
  children: {
    control: false,
  },
};

// Open, so the mobile panel shows below desktop (closed, it's off screen). `open` has no effect on desktop.
const navArgs: Partial<NavigationProps> = {
  open: true,
  variant: 'light',
  withSearch: false,
  searchFormAction: '/',
  searchFormMethod: 'GET',
  'aria-label': 'Main',
};

const RouterLink = forwardRef((props: Omit<LinkComponentProps, 'ref'>, ref: ForwardedRef<HTMLAnchorElement>) => {
  return <a {...props} ref={ref} onClick={(e) => e.preventDefault()} />;
});

const ExampleNavigation = ({ variant, label }: { variant: ContrastVariant; label: string }) => (
  // On mobile and tablet the navigation is a fixed panel. The transform makes the box its containing block, so the
  // open panel shows inside the overview rather than over the page.
  <div className="navigation-overview-example" style={{ transform: 'translate(0, 0)' }}>
    <Navigation.Root
      aria-label={label}
      open
      utilityNavItems={[
        { href: '#', icon: 'language', label: 'Language' },
        { href: '#', icon: 'person', label: 'Name Surname' },
      ]}
      variant={variant}
      withSearch
    >
      <Navigation.Item href="#" label="With menu">
        <Navigation.Menu>
          <Navigation.MenuList heading="List one">
            <Navigation.Item href="#" label="Sub nav item 1" />
            <Navigation.Item href="#" label="Sub nav item 2" />
          </Navigation.MenuList>
          <Navigation.MenuList heading="List two">
            <Navigation.Item href="#" label="Sub nav item 3" />
            <Navigation.Item href="#" label="Sub nav item 4" />
          </Navigation.MenuList>
        </Navigation.Menu>
      </Navigation.Item>
      <Navigation.Item href="#" label="With mini menu">
        <Navigation.Menu mini>
          <Navigation.MenuList heading="List one">
            <Navigation.Item href="#" label="Sub nav item 5" />
            <Navigation.Item href="#" label="Sub nav item 6" />
          </Navigation.MenuList>
        </Navigation.Menu>
      </Navigation.Item>
      <Navigation.Item href="#" label="Selected" selected />
      <Navigation.Item href="#" label="Link" />
    </Navigation.Root>
  </div>
);

// Tall enough for the open mobile panel (its content, below the gap it leaves for the header), or for a desktop
// menu opened on hover. The panel's height comes from this box, so a shorter box makes the panel overflow it.
const exampleHeight = `
  .navigation-overview-example { height: 42rem; }
  @media (min-width: 1024px) { .navigation-overview-example { height: 22rem; } }
`;

/**
 * Menus open on hover or press, so aren't shown here. Below desktop the navigation is the open mobile panel, with
 * the search field and utility links, which only show there.
 */
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label='Navigation.Root variant="light"'>
        <style>{exampleHeight}</style>
        <ExampleNavigation label="Light example" variant="light" />
      </Variant>
      <Variant label='Navigation.Root variant="dark"'>
        <ExampleNavigation label="Dark example" variant="dark" />
      </Variant>
    </Variants>
    <Variants minWidth="200px">
      <Variant label="Navigation.Link">
        <Navigation.Link href="#">Link</Navigation.Link>
      </Variant>
      <Variant label="Navigation.Link selected">
        <Navigation.Link aria-current="page" href="#" selected>
          Link
        </Navigation.Link>
      </Variant>
      <Variant label="Navigation.Side">
        <Navigation.Side>
          <Navigation.Link href="#" selected>
            Link one
          </Navigation.Link>
          <Navigation.Link href="#">Link two</Navigation.Link>
          <Navigation.Link href="#">A longer link that wraps onto another line</Navigation.Link>
        </Navigation.Side>
      </Variant>
      <Variant label="Navigation.MenuList">
        <Navigation.MenuList heading="Heading">
          <Navigation.Item href="#" label="Sub nav item 1" subNav />
          <Navigation.Item href="#" label="Sub nav item 2" subNav />
        </Navigation.MenuList>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: NavigationProps) => (
  <Navigation.Root {...args}>
    <Navigation.Item href="#" label="Nav item 1" selected>
      <Navigation.Menu>
        <Navigation.MenuList heading="List one">
          <Navigation.Item href="#" label="Sub nav item 1" />
          <Navigation.Item href="#" label="Sub nav item 2" />
          <Navigation.Item href="#" label="Sub nav item 3" />
          <Navigation.Item href="#" label="Sub nav item 4" />
        </Navigation.MenuList>
        <Navigation.MenuList heading="List two">
          <Navigation.Item href="#" label="Sub nav item 5" />
          <Navigation.Item href="#" label="Sub nav item 6" />
          <Navigation.Item href="#" label="Sub nav item 7" />
          <Navigation.Item href="#" label="Sub nav item 8" />
        </Navigation.MenuList>
        <Navigation.MenuList heading="List three">
          <Navigation.Item href="#" label="Sub nav item 9" />
          <Navigation.Item href="#" label="Sub nav item 10" />
          <Navigation.Item href="#" label="Sub nav item 11" />
          <Navigation.Item href="#" label="Sub nav item 12" />
        </Navigation.MenuList>
        <Navigation.MenuList heading="List four">
          <Navigation.Item href="#" label="Sub nav item 13" />
          <Navigation.Item href="#" label="Sub nav item 14" />
          <Navigation.Item href="#" label="Sub nav item 15" />
          <Navigation.Item href="#" label="Sub nav item 16" />
        </Navigation.MenuList>
      </Navigation.Menu>
    </Navigation.Item>
    <Navigation.Item href="#" label="Nav item 2">
      <Navigation.Menu mini>
        <Navigation.MenuList heading="List one">
          <Navigation.Item href="#" label="Sub nav item 17" />
          <Navigation.Item href="#" label="Sub nav item 18" />
          <Navigation.Item href="#" label="Sub nav item 19" />
          <Navigation.Item href="#" label="Sub nav item 20" />
        </Navigation.MenuList>
      </Navigation.Menu>
    </Navigation.Item>
    <Navigation.Item href="#" label="Nav item 3" selected />
    <Navigation.Item href="#" label="Nav item 4" />
    <Navigation.Item href="#" label="Nav item 5" />
  </Navigation.Root>
);
Default.argTypes = {
  ...navArgTypes,
  // Up to two items: `{ href, icon, label }`
  utilityNavItems: {
    control: { type: 'object' },
  },
};
Default.args = navArgs;

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('navigation', { name: 'Main' })).toBeInTheDocument();
  await expect(canvas.getByRole('link', { name: 'Nav item 3' })).toHaveAttribute('aria-current', 'page');
  await expect(canvas.getByRole('link', { name: 'Nav item 4' })).not.toHaveAttribute('aria-current');
};

export const WithUtilityNavigation = (args: NavigationProps) => {
  return (
    <Navigation.Root
      {...args}
      utilityNavItems={[
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
      ]}
    >
      <Navigation.Item href="#" label="Nav item 1" selected>
        <Navigation.Menu>
          <Navigation.MenuList heading="List one">
            <Navigation.Item href="#" label="Sub nav item 1" />
            <Navigation.Item href="#" label="Sub nav item 2" />
            <Navigation.Item href="#" label="Sub nav item 3" />
            <Navigation.Item href="#" label="Sub nav item 4" />
          </Navigation.MenuList>
          <Navigation.MenuList heading="List two">
            <Navigation.Item href="#" label="Sub nav item 5" />
            <Navigation.Item href="#" label="Sub nav item 6" />
            <Navigation.Item href="#" label="Sub nav item 7" />
            <Navigation.Item href="#" label="Sub nav item 8" />
          </Navigation.MenuList>
          <Navigation.MenuList heading="List three">
            <Navigation.Item href="#" label="Sub nav item 9" />
            <Navigation.Item href="#" label="Sub nav item 10" />
            <Navigation.Item href="#" label="Sub nav item 11" />
            <Navigation.Item href="#" label="Sub nav item 12" />
          </Navigation.MenuList>
          <Navigation.MenuList heading="List four">
            <Navigation.Item href="#" label="Sub nav item 13" />
            <Navigation.Item href="#" label="Sub nav item 14" />
            <Navigation.Item href="#" label="Sub nav item 15" />
            <Navigation.Item href="#" label="Sub nav item 16" />
          </Navigation.MenuList>
        </Navigation.Menu>
      </Navigation.Item>
      <Navigation.Item href="#" label="Nav item 2">
        <Navigation.Menu mini>
          <Navigation.MenuList heading="List one">
            <Navigation.Item href="#" label="Sub nav item 1" />
            <Navigation.Item href="#" label="Sub nav item 2" />
            <Navigation.Item href="#" label="Sub nav item 3" />
            <Navigation.Item href="#" label="Sub nav item 4" />
          </Navigation.MenuList>
        </Navigation.Menu>
      </Navigation.Item>
      <Navigation.Item href="#" label="Nav item 3" />
      <Navigation.Item href="#" label="Nav item 4" />
      <Navigation.Item href="#" label="Nav item 5" />
    </Navigation.Root>
  );
};
WithUtilityNavigation.argTypes = navArgTypes;
WithUtilityNavigation.args = navArgs;

export const Link = (args: LinkProps) => {
  return (
    <Navigation.Link {...args} href="#">
      Link
    </Navigation.Link>
  );
};
Link.argTypes = {
  selected: {
    control: { type: 'boolean' },
  },
  className: {
    control: { type: 'text' },
  },
  component: {
    control: false,
  },
};

export const LinkAsComponent = (args: LinkProps) => {
  return (
    <Navigation.Link {...args} component={RouterLink} href="#">
      Link
    </Navigation.Link>
  );
};
LinkAsComponent.argTypes = {
  selected: {
    control: { type: 'boolean' },
  },
};

export const Side = () => {
  return (
    <Navigation.Side>
      <Navigation.Link href="#link-one" selected>
        Link one
      </Navigation.Link>
      <Navigation.Link href="#link-two">Link two</Navigation.Link>
      <Navigation.Link href="#link-three">Link three</Navigation.Link>
      <Navigation.Link href="#link-four">Link four</Navigation.Link>
      <Navigation.Link href="#link-five">Link five</Navigation.Link>
    </Navigation.Side>
  );
};
Side.argTypes = {
  children: {
    control: false,
  },
};

export const NavigationLinks = (args: MenuListProps) => (
  <Navigation.MenuList {...args}>
    <Navigation.Item href="#" label="Sub nav item 5" />
    <Navigation.Item href="#" label="Sub nav item 6" />
    <Navigation.Item href="#" label="Sub nav item 7" />
    <Navigation.Item href="#" label="Sub nav item 8" />
  </Navigation.MenuList>
);
NavigationLinks.argTypes = {
  heading: {
    control: {
      type: 'text',
    },
  },
};
