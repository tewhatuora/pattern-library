import { memo } from 'react';
import clsx from 'clsx';

import * as styles from './Breadcrumbs.css';
import { Text } from '../Text/Text';

/**
 * Breadcrumb separator
 */
export const Separator = memo(({ hidden }: { hidden?: boolean }) => (
  <li
    aria-hidden="true"
    className={clsx(styles.separator, {
      [styles.hidden]: hidden,
    })}
  >
    <Text>/</Text>
  </li>
));

Separator.displayName = 'Separator';
