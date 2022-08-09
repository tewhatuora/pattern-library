import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './List.css';

export type ListItemProps = {
  /** Optional icon to display in the List Item */
  icon?: IconType;
  /** Icon position relative to the List Item text */
  iconPosition?: 'left' | 'right';
  /** Optional heading text to display */
  heading?: string;
} & HTMLAttributes<HTMLLIElement>;

export const Item = ({ icon, iconPosition = 'left', heading, children, ...rest }: PropsWithChildren<ListItemProps>) => {
  return (
    <li {...rest}>
      <Box className={clsx(styles.itemContent, styles.itemIconPosition[iconPosition])}>
        {icon && <Icon className={styles.itemIcon} icon={icon} variant="functionalIcons" />}
        <Box>
          {heading && <Text weight="bold">{heading}</Text>}
          <Text>{children}</Text>
        </Box>
      </Box>
    </li>
  );
};
