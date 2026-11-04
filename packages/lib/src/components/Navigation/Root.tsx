import { Children, PropsWithChildren, RefObject, createContext, useId, useRef } from 'react';
import { clsx } from 'clsx';

import { Stack } from '../Stack/Stack';
import { InputSearch } from '../InputSearch/InputSearch';
import { Divider } from '../Divider/Divider';
import { Item } from './Item';
import { Utility, UtilityNavItemProps } from './Utility';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { ContrastVariant } from '../../types';

import * as styles from './Navigation.css';
import * as helpers from '../../css/helpers.css';

export const NavigationStyles = styles;

export const NavigationContext = createContext<{ element: RefObject<HTMLElement | null> | null }>({ element: null });

export type NavigationProps = {
  /**
   * Background of the navigation: `light` is a light background with dark text, `dark` is a dark gradient
   * with light text. Passed on to the items.
   * @default 'light'
   */
  variant?: ContrastVariant;
  /** Whether the mobile navigation panel is open. Drive it from your menu button. It has no effect on desktop. */
  open: boolean;
  /** Show a search field at the top of the mobile and tablet navigation. */
  withSearch?: boolean;
  /**
   * URL the search form submits to.
   * @default '/'
   */
  searchFormAction?: string;
  /**
   * HTTP method of the search form.
   * @default 'GET'
   */
  searchFormMethod?: 'POST' | 'GET';
  /** Up to two links with icons, e.g. language and account, shown at the bottom of the mobile navigation. More than two throws. */
  utilityNavItems?: UtilityNavItemProps[];
  /**
   * Accessible name of the `nav` landmark. Make it distinct when a page has more than one.
   * @default 'Main'
   */
  'aria-label'?: string;
};

/**
 * Site navigation. Children must be `Navigation.Item`s. An item with a nested `Navigation.Menu` opens a
 * sub menu, otherwise it's a link. On mobile and tablet the navigation becomes a panel controlled by `open`.
 *
 * @example
 * <Navigation.Root open={open} searchFormAction="/search" searchFormMethod="GET" variant="light" withSearch>
 *   <Navigation.Item href="/home" label="Home" selected />
 *   <Navigation.Item href="/services" label="Services">
 *     <Navigation.Menu>
 *       <Navigation.MenuList heading="Vaccines">
 *         <Navigation.Item href="/services/flu" label="Flu" />
 *         <Navigation.Item href="/services/covid" label="COVID-19" />
 *       </Navigation.MenuList>
 *     </Navigation.Menu>
 *   </Navigation.Item>
 * </Navigation.Root>
 */
export const Root = ({
  variant = 'light',
  open,
  withSearch,
  searchFormAction = '/',
  searchFormMethod = 'GET',
  children,
  utilityNavItems,
  'aria-label': ariaLabel = 'Main',
}: PropsWithChildren<NavigationProps>) => {
  const searchId = useId();
  const navEl = useRef<HTMLElement>(null);
  const hasNavItems = !!Children.count(children);

  return (
    <NavigationContext.Provider value={{ element: navEl }}>
      <nav
        aria-label={ariaLabel}
        className={clsx(styles.navigation[variant], {
          [styles.open]: open,
        })}
        ref={navEl}
      >
        <Stack space="medium">
          {withSearch && (
            <form action={searchFormAction} className={clsx(helpers.upToTablet.block)} method={searchFormMethod}>
              <InputSearch id={searchId} name="search" placeholder="Search" />
            </form>
          )}
          {hasNavItems && (
            <ul className={clsx(styles.navList)}>
              <AllowedChildren
                errorMessage="Only `Navigation.Item` components are allowed as children of `Navigation.Root`"
                propsForChild={() => ({
                  variant,
                })}
                types={[Item]}
              >
                {children}
              </AllowedChildren>
            </ul>
          )}
          {!!utilityNavItems?.length && (
            <div className={helpers.upToTablet.block}>
              <Stack space="medium">
                {hasNavItems && <Divider variant={variant} />}
                <Utility items={utilityNavItems} variant={variant} />
              </Stack>
            </div>
          )}
        </Stack>
      </nav>
    </NavigationContext.Provider>
  );
};

Root.displayName = 'Root';
