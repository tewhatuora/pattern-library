import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Column } from '../Columns/Column';
import { Text } from '../Text/Text';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Item } from './Item';

import * as styles from './Menu.css';

export const NavigationMenuListStyles = styles;

export type NavigationMenuListProps = {
  heading: string;
};

/**
 * Navigation menu list
 * @constructor
 */
export const MenuList = ({ heading, children }: PropsWithChildren<NavigationMenuListProps>) => {
  return (
    <Column columns={3}>
      <Text weight="bold">{heading}</Text>
      <ul className={clsx(styles.subNavList)}>
        <AllowedChildren
          errorMessage="Only `Navigation.Item` components are allowed as children of `Navigation.MenuList`"
          propsForChild={() => ({
            subNav: true,
          })}
          types={[Item]}
        >
          {children}
        </AllowedChildren>
      </ul>
    </Column>
  );
};

MenuList.displayName = 'Navigation.MenuList';
