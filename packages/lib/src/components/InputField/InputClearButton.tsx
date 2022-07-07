import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/Button';
import * as styles from './InputField.css';
import { clearIcon } from '../Icon/Icon.css';

export const InputClearButtonStyles = styles;

export type InputClearButtonProps = {
  onClear: () => void;
};

/**
 * Button/icon to clear an input field
 * @constructor
 */
export const InputClearButton = ({ onClear }: InputClearButtonProps) => {
  return (
    <ButtonRoot className={styles.clearButton} key="clear" onPress={onClear}>
      <Icon className={clearIcon} color="primary100" icon="clear_field" variant="functionalIcons" />
    </ButtonRoot>
  );
};

InputClearButton.displayName = 'InputClearButton';
