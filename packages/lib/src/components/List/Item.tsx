import { clsx } from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import { useText } from '../../hooks/typography';

import * as styles from './List.css';

export type ListItemProps = {
  icon?: IconType;
  /**
   * Which side of the text the icon is on.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  /** Bold line above the content. */
  heading?: string;
} & HTMLAttributes<HTMLLIElement>;

/** A list entry with optional icon and heading. Other props go to the `li`. */
export const Item = ({ icon, iconPosition = 'left', heading, children, ...rest }: PropsWithChildren<ListItemProps>) => {
  const textStyles = useText({ weight: 'bullet', size: 'medium' });

  return (
    <li {...rest} className={clsx(textStyles, rest.className)}>
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
