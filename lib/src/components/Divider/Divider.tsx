import React from 'react';

import * as styles from './Divider.css';

export type DividerProps = {
  variant: styles.Variant;
  isDecoration?: boolean;
};

/**
 * Divider component
 * @param props
 * @constructor
 */
export const Divider = ({ variant = 'dark', isDecoration = false }: DividerProps) => {
  return <hr className={styles.variants({ variant })} role={isDecoration ? 'presentation' : undefined} />;
};

Divider.displayName = 'Divider';
