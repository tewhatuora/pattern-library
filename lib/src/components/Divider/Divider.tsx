import React from 'react';
import clsx from 'clsx';

import * as styles from './Divider.css';

export type DividerProps = {
  variant: styles.Variant;
  isDecoration?: boolean;
  className?: string;
};

/**
 * A section break in content. Semantically equivalent to the `<hr>` HTML
 * element. Set the `isDecoration` prop to `true` if it is purely decorative and
 * doesn't represent a section break.
 * @param props
 * @constructor
 */
export const Divider = ({ variant = 'dark', isDecoration = false, className }: DividerProps) => {
  return (
    <hr className={clsx(styles.variants({ variant }), className)} role={isDecoration ? 'presentation' : undefined} />
  );
};

Divider.displayName = 'Divider';
