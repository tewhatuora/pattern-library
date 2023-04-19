import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import { useText } from '../../hooks/typography';

import * as styles from './List.css';

export type ListItemProps = {
  /** Optional icon to display in the List Item */
  icon?: IconType;
  /** Optional heading text to display */
  heading?: string;
  /** Required href */
  href: string;
} & HTMLAttributes<HTMLLIElement>;

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<ListItemProps>>(
  ({ icon, heading, href, children, tabIndex, ...rest }, ref) => {
    const textStyles = useText({ weight: 'bullet', size: 'medium' });

    return (
      <li {...rest} className={clsx(textStyles, rest.className)}>
        <Box as="a" className={clsx(textStyles, styles.link)} href={href} ref={ref} tabIndex={tabIndex}>
          <span>
            {heading && <Text weight="bold">{heading}</Text>}
            <Text>{children}</Text>
          </span>
          {icon && <Icon className={clsx(styles.itemIcon)} icon={icon} variant="functionalIcons" />}
        </Box>
      </li>
    );
  },
);
