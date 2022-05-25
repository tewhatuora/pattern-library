import { memo } from 'react';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/Button';

type CloseButtonProps = {
  onClose: (e: any) => void;
  className?: string;
};

/**
 * Accessible close button that
 * shows a close icon
 * @param props
 * @constructor
 */
export const CloseButton = memo((props: CloseButtonProps) => (
  <ButtonRoot label="Close" className={props.className} onPress={props.onClose}>
    <Icon icon="cross" variant="functionalIcons" />
  </ButtonRoot>
));
