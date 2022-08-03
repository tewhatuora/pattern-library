import { PropsWithChildren } from 'react';

import { Text } from '../Text/Text';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Item } from './Item';

import * as styles from './Menu.css';

export const MenuListStyles = styles;

export type MenuListProps = {
  heading: string;
};

/**
 * Navigation menu list
 * @constructor
 */
export const MenuList = ({ heading, children }: PropsWithChildren<MenuListProps>) => {
  return (
    <>
      <Text className={styles.subNavHeading} weight="bold">
        {heading}
      </Text>
      <ul className={styles.subNavList}>
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
    </>
  );
};

MenuList.displayName = 'Navigation.MenuList';
