import { memo } from 'react';

import { Icon } from '../Icon/Icon';

type CloseButtonProps = {
  onClose: () => void;
  className?: string;
  icon: string | number;
};

/**
 * Accessible close button that
 * shows a close icon
 * @param props
 * @constructor
 */
export const CloseButton = memo((props: CloseButtonProps) => (
  <button type="button" aria-label="Close" title="close" className={props.className} onClick={props.onClose}>
    <Icon icon={props.icon} variant="functionalIcons" />
  </button>
));
