import { PropsWithChildren, Ref, createElement, forwardRef } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button';

import * as styles from './Button.css';

export type ButtonRootProps = PropsWithChildren<ButtonProps>;

/**
 * Accessible button component without Button UI styles
 */
export const ButtonRoot = forwardRef((props: ButtonRootProps, ref: Ref<HTMLButtonElement> | null) => {
  const { as = 'button', type = 'button', className, ...buttonProps } = props;

  return createElement(as, {
    ref,
    type: as === 'button' ? type : undefined,
    className: clsx(styles.root, className),
    ...buttonProps,
  });
});
