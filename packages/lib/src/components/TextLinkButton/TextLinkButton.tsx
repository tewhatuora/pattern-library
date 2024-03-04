import clsx from 'clsx';

import { forwardRef } from 'react';

import { Button, ButtonProps } from '../Button/Button';

import * as styles from './TextLinkButton.css';

import { UseTextProps } from '../../hooks/typography';

export type TextLinkButtonProps = {
  /** Font weight for `<Text>` */
  weight?: UseTextProps['weight'];
  /** Option to show underline when not hovered */
  showUnderline?: boolean;
} & Omit<ButtonProps, 'variant' | 'disabled' | 'width' | 'justifyContent'>;

/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
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

export default TextLinkButton;
