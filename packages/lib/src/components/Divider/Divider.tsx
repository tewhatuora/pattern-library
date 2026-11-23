import { clsx } from 'clsx';
import * as Separator from '@radix-ui/react-separator';

import * as styles from './Divider.css';

export const DividerStyles = styles;

export type DividerProps = styles.Variants & Separator.SeparatorProps;

/**
 * A section break in content. Built on the [Radix UI Separator](https://www.radix-ui.com/docs/primitives/components/separator).
 * Semantically equivalent to `<hr>`. Set `decorative` if it is only visual and does not mark a section break,
 * so screen readers skip it. `orientation` is `"horizontal"` unless set.
 * `variant` picks the line colour to suit the background: `"dark"` (default) is the light line for dark backgrounds, `"light"` the dark line for light ones.
 *
 * @example
 * <Divider decorative variant="light" />
 */
export const Divider = ({ variant = 'dark', className, ...rest }: DividerProps) => {
  return <Separator.Root className={clsx(styles.variants({ variant }), className)} {...rest} />;
};

Divider.displayName = 'Divider';
