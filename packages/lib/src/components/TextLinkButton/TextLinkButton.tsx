import clsx from 'clsx';

import { forwardRef } from 'react';

import { Button, ButtonProps } from '../Button/Button';

import * as styles from './TextLinkButton.css';

export type TextLinkButtonProps = Omit<ButtonProps, 'variant' | 'disabled' | 'width' | 'justifyContent'>;

/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
 */
export const TextLinkButton = forwardRef<HTMLButtonElement, TextLinkButtonProps>(({ className, ...rest }, ref) => (
  <Button className={clsx(styles.TextLinkButton, className)} ref={ref} {...rest} variant="link" />
));

export default TextLinkButton;
