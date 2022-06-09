import clsx from 'clsx';
import * as Separator from '@radix-ui/react-separator';

import * as styles from './Divider.css';

export const DividerStyles = styles;

export type DividerProps = {
  variant: styles.Variant;
} & Separator.SeparatorProps;

/**
 * A section break in content. Built on top of the [Radix UI Separator
 * component](https://www.radix-ui.com/docs/primitives/components/separator).
 * Semantically equivalent to the `<hr>` HTML element. Set the `decorative`
 * prop to `true` if it is purely decorative and doesn't represent a section
 * break.
 * @param props
 * @constructor
 */
export const Divider = ({ variant = 'dark', className, ...rest }: DividerProps) => {
  return <Separator.Root className={clsx(styles.variants({ variant }), className)} {...rest} />;
};

Divider.displayName = 'Divider';
