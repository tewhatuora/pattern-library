import { memo } from 'react';
import type { PressEvent } from '@react-aria/interactions';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/ButtonRoot';
import { IconType } from '../Icon/icons';

type CloseButtonProps = {
  /** Called when the button is pressed. */
  onClose: (e: PressEvent) => void;
  className?: string;
  /**
   * Icon to show.
   * @default 'cross'
   */
  icon?: IconType;
  /**
   * Icon set the `icon` is looked up in, which also sets its size.
   * @default 'functionalIcons'
   */
  variant?: 'decorativeIcons' | 'functionalIcons' | 'socialIcons' | 'tagIcon';
};

/**
 * Icon-only button with the accessible name "Close".
 * It has no styling of its own, so pass a `className`.
 *
 * @example
 * <CloseButton className={styles.closeButton} onClose={() => setOpen(false)} />
 */
export const CloseButton = memo(
  ({ onClose, className, icon = 'cross', variant = 'functionalIcons' }: CloseButtonProps) => (
    <ButtonRoot aria-label="Close" className={className} onPress={onClose}>
      <Icon icon={icon} variant={variant} />
    </ButtonRoot>
  ),
);
