import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { Box } from '../Box/Box';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './List.css';

export type ListItemProps = { icon?: IconType; iconPosition?: 'left' | 'right' } & HTMLAttributes<HTMLLIElement>;

export const Item = ({ className, children, icon, iconPosition = 'left', ...rest }: ListItemProps) => {
  return (
    <li className={clsx(className, styles.item)} {...rest}>
      <Box className={styles.innerListItem}>
        <Box className={clsx(styles.itemContent, styles.itemIconPosition[iconPosition])}>
          {icon && <Icon className={styles.itemIcon} icon={icon} variant="functionalIcons" />}
          <Box>{children}</Box>
        </Box>
      </Box>
    </li>
  );
};
