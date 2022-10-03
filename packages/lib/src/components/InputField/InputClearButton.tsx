import { HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/ButtonRoot';
import * as styles from './InputField.css';
import { clearIcon } from '../Icon/Icon.css';

export const InputClearButtonStyles = styles;

export type InputClearButtonProps = {
  fieldType?: HTMLInputTypeAttribute;
  clearButton?: string;
  onClear: () => void;
};

/**
 * Button/icon to clear an input field
 * @constructor
 */
export const InputClearButton = ({ fieldType = 'text', onClear }: InputClearButtonProps) => {
  return (
    <ButtonRoot
      aria-label="Clear input field"
      className={clsx(styles.clearButtonBase, styles.clearButton[fieldType])}
      onPress={onClear}
    >
      <Icon className={clearIcon} color="primary100" icon="clear_field" variant="functionalIcons" />
    </ButtonRoot>
  );
};

InputClearButton.displayName = 'InputClearButton';
