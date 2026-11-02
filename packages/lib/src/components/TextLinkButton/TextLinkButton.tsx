import { clsx } from 'clsx';

import { forwardRef } from 'react';

import { Button, ButtonProps } from '../Button/Button';

import * as styles from './TextLinkButton.css';

import { UseTextProps } from '../../hooks/typography';

export type TextLinkButtonProps = {
  /**
   * Font weight token.
   * @default 'link-normal'
   */
  weight?: UseTextProps['weight'];
  /** Underline the text at rest. Without it the underline only shows on hover. */
  showUnderline?: boolean;
} & Omit<ButtonProps, 'variant' | 'disabled' | 'width' | 'justifyContent'>;

/**
 * A button that looks like a link, for actions rather than navigation. Use `TextLink` to go to another
 * page. It has no visited state.
 *
 * @example
 * <TextLinkButton onPress={() => setOpen(true)}>Show details</TextLinkButton>
 */
export const TextLinkButton = forwardRef<HTMLButtonElement, TextLinkButtonProps>(
  ({ weight = 'link-normal', className, showUnderline = false, ...rest }, ref) => {
    return (
      <Button
        className={clsx(styles.link({ underline: showUnderline }), styles.TextLinkButton, className)}
        ref={ref}
        {...rest}
        variant="link"
        weight={weight}
      />
    );
  },
);
