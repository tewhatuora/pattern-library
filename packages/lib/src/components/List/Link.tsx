import { clsx } from 'clsx';
import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import { useText } from '../../hooks/typography';

import * as styles from './List.css';

export type ListLinkProps = {
  /** Icon shown after the text. */
  icon?: IconType;
  /** Bold line above the content, inside the link. */
  heading?: string;
  /** Destination of the link. */
  href: string;
} & HTMLAttributes<HTMLLIElement>;

/** A list entry that is a link. `className` and other props go to the `li`, not the `a`. */
export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<ListLinkProps>>(
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
