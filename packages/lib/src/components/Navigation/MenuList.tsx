import { PropsWithChildren } from 'react';

import { Text } from '../Text/Text';

import * as styles from './Menu.css';

export const MenuListStyles = styles;

export type MenuListProps = {
  /** Heading above the links. Also used as a React key, so keep it unique within a menu. */
  heading: string;
};

/** A headed group of links inside a `Navigation.Menu`. */
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
