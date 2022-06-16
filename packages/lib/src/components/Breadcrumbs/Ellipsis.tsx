import { memo } from 'react';
import clsx from 'clsx';

import * as styles from './Breadcrumbs.css';
import { Text } from '../Text/Text';

type EllipsisProps = {
  hidden: boolean;
};

/**
 * Breadcrumbs ellipsis
 * Displays when there is not enough
 * room to show all breadcrumbs
 */
export const Ellipsis = memo(({ hidden }: EllipsisProps) => (
  <li aria-hidden="true" className={clsx(styles.ellipsis, { [styles.hidden]: hidden })}>
    <Text>&hellip;</Text>
  </li>
));

Ellipsis.displayName = 'Ellipsis';
