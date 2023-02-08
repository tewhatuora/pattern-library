import { PropsWithChildren } from 'react';

import { Text } from '../Text/Text';

import * as styles from './Menu.css';

export const MenuListStyles = styles;

export type MenuListProps = {
  /** Heading for menu list **/
  heading: string;
};

/**
 * Navigation menu list
 * @constructor
 */
export const MenuList = ({ heading, children }: PropsWithChildren<MenuListProps>) => {
  return (
    <>
      <Text className={styles.subNavHeading} size="medium" weight="bold">
        {heading}
      </Text>
      <ul className={styles.subNavList}>{children}</ul>
    </>
  );
};

MenuList.displayName = 'MenuList';
