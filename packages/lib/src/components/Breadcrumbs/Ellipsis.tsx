import { memo } from 'react';
import clsx from 'clsx';

import { Text } from '../Text/Text';

import * as styles from './Breadcrumbs.css';
import { sprinkles } from '../../css/atoms/sprinkles.css';

type EllipsisProps = {
  hidden: boolean;
};

/**
 * Breadcrumbs ellipsis
 * Displays when there is not enough
 * room to show all breadcrumbs
 */
export const Ellipsis = memo(({ hidden }: EllipsisProps) => (
  <li aria-label="Some pages skipped" className={clsx(styles.ellipsis, { [sprinkles({ display: 'none' })]: hidden })}>
    <Text weight="regular">&hellip;</Text>
  </li>
));

Ellipsis.displayName = 'Ellipsis';
