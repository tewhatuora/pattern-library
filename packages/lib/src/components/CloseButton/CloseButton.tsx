import { memo } from 'react';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/Button';
import { IconType } from '../Icon/icons';

type CloseButtonProps = {
  onClose: (e: any) => void;
  className?: string;
  icon?: IconType;
  variant?: 'decorativeIcons' | 'functionalIcons' | 'socialIcons' | 'tagIcon';
};

/**
 * Accessible close button that
 * shows a close icon
 * @param props
 * @constructor
 */
export const CloseButton = memo(
  ({ onClose, className, icon = 'cross', variant = 'functionalIcons' }: CloseButtonProps) => (
    <ButtonRoot aria-label="Close" className={className} onPress={onClose}>
      <Icon icon={icon} variant={variant} />
    </ButtonRoot>
  ),
);
