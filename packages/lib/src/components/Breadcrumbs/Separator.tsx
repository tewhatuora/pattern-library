import { memo } from 'react';
import clsx from 'clsx';

import { Text } from '../Text/Text';

import * as styles from './Breadcrumbs.css';
import { sprinkles } from '../../css/atoms/sprinkles.css';
import * as stylesText from '../Text/Text.css';

/**
 * Breadcrumb separator
 */
export const Separator = memo(({ hidden }: { hidden?: boolean }) => (
  <li
    aria-hidden="true"
    className={clsx(styles.separator, {
      [sprinkles({ display: 'none' })]: hidden,
    })}
  >
    <Text className={stylesText.ignoreWeightOverride} weight="regular">
      /
    </Text>
  </li>
));

Separator.displayName = 'Separator';
