import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Stack } from '../Stack/Stack';
import { InputSearch } from '../InputSearch/InputSearch';
import { Divider } from '../Divider/Divider';
import { Item } from './Item';
import { Utility } from './Utility';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import * as styles from './Navigation.css';
import * as helpers from '../../css/helpers.css';

export const NavigationStyles = styles;

export type NavigationProps = {
  variant: 'light' | 'dark';
  open: boolean;
  searchFormAction: string;
  searchFormMethod: 'POST' | 'GET';
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
  searchFormMethod = 'GET',
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
        <form action={searchFormAction} className={clsx(helpers.upToTablet.block)} method={searchFormMethod}>
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
        <Divider className={helpers.upToTablet.block} variant={variant === 'light' ? 'dark' : 'light'} />
        <Utility className={helpers.upToTablet.block} variant={variant} />
      </Stack>
    </nav>
  );
};

Root.displayName = 'Navigation.Root';
