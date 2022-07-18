import { ForwardedRef, PropsWithChildren, forwardRef } from 'react';

import { AnchorLinkProps } from '@/src/components/AnchorLink/AnchorLink';

import { LinkProps } from '@/src/components/Navigation/Link';

import { Navigation } from './Navigation';
import { NavigationProps } from './Root';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const navArgTypes = {
  open: {
    control: {
      type: 'boolean',
    },
    defaultValue: true,
  },
  variant: {
    control: {
      type: 'select',
      options: ['light', 'dark'],
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
      options: ['GET', 'POST'],
    },
  },
};

const RouterLink = forwardRef((props: PropsWithChildren<AnchorLinkProps>, ref: ForwardedRef<any>) => {
  return (
    <a {...props} ref={ref} onClick={(e) => e.preventDefault()}>
      {props.children}
    </a>
  );
});

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
          <Navigation.Item href="#" label="Sub nav item 5" />
          <Navigation.Item href="#" label="Sub nav item 6" />
          <Navigation.Item href="#" label="Sub nav item 7" />
          <Navigation.Item href="#" label="Sub nav item 8" />
        </Navigation.MenuList>
        <Navigation.MenuList heading="List four">
          <Navigation.Item href="#" label="Sub nav item 5" />
          <Navigation.Item href="#" label="Sub nav item 6" />
          <Navigation.Item href="#" label="Sub nav item 7" />
          <Navigation.Item href="#" label="Sub nav item 8" />
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
Default.argTypes = navArgTypes;

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
            <Navigation.Item href="#" label="Sub nav item 5" />
            <Navigation.Item href="#" label="Sub nav item 6" />
            <Navigation.Item href="#" label="Sub nav item 7" />
            <Navigation.Item href="#" label="Sub nav item 8" />
          </Navigation.MenuList>
          <Navigation.MenuList heading="List four">
            <Navigation.Item href="#" label="Sub nav item 5" />
            <Navigation.Item href="#" label="Sub nav item 6" />
            <Navigation.Item href="#" label="Sub nav item 7" />
            <Navigation.Item href="#" label="Sub nav item 8" />
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
};

export const LinkAsComponent = (args: LinkProps) => {
  return (
    <Navigation.Link {...args} component={RouterLink} href="#">
      Link
    </Navigation.Link>
  );
};
Link.argTypes = {
  selected: {
    control: { type: 'boolean' },
  },
};

export const Side = () => {
  return (
    <Navigation.Side>
      <Navigation.Link href="#link-one">Link one</Navigation.Link>
      <Navigation.Link href="#link-two">Link two</Navigation.Link>
      <Navigation.Link href="#link-three">Link three</Navigation.Link>
      <Navigation.Link href="#link-four">Link four</Navigation.Link>
      <Navigation.Link href="#link-five">Link five</Navigation.Link>
    </Navigation.Side>
  );
};
Side.argTypes = {};
