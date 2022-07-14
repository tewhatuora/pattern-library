import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Stack } from '../Stack/Stack';
import { InputSearch } from '../InputSearch/InputSearch';
import { Divider } from '../Divider/Divider';
import { Item } from './Item';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import * as styles from './Navigation.css';

export const NavigationStyles = styles;

export type NavigationProps = {
  variant: 'light' | 'dark';
  open: boolean;
  searchFormAction: string;
};

/**
 * Fixes on scroll at desktop.
 * Breaks to mobile when menu items can no longer fit. This will be content specific.
 * When Menu breaks to mobile, so does Navigation and Fly out
 * @constructor
 */
export const Root = ({
  variant = 'light',
  open,
  searchFormAction = '/',
  children,
}: PropsWithChildren<NavigationProps>) => {
  return (
    <nav
      className={clsx({
        [styles.navigation[variant]]: true,
        [styles.open]: open,
      })}
    >
      <Stack space="medium">
        <form action={searchFormAction} className={clsx(styles.mobileOnly)} method="GET">
          <InputSearch id="search" name="search" placeholder="Search" />
        </form>
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
        <Divider className={clsx(styles.mobileOnly)} variant={variant === 'light' ? 'dark' : 'light'} />
        <ul className={clsx(styles.navList, styles.mobileOnly)}>
          <Item href="#" label="Nav item" variant={variant} />
          <Item href="#" label="Nav item" variant={variant} />
        </ul>
      </Stack>
    </nav>
  );
};

Root.displayName = 'Navigation.Root';
