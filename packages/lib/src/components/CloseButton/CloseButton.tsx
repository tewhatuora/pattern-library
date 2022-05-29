import { memo } from 'react';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/Button';

type CloseButtonProps = {
  onClose: (e: any) => void;
  className?: string;
  icon: string | number;
  variant: 'decorativeIcons' | 'functionalIcons' | 'socialIcons' | 'tagIcon' | undefined;
};

/**
 * Accessible close button that
 * shows a close icon
 * @param props
 * @constructor
 */
export const CloseButton = memo((props: CloseButtonProps) => (
  <ButtonRoot label="Close" className={props.className} onPress={props.onClose}>
    <Icon icon={props.icon} variant={props.variant} />
  </ButtonRoot>
));
