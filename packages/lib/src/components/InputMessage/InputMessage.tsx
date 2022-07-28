import { HTMLAttributes } from 'react';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import * as styles from './InputMessage.css';

export const InputMessageStyles = styles;

export type InputMessageProps = {
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
};

/**
 * Further content for an input field.
 * @constructor
 */
export const InputMessage = ({
  helperText,
  errorMessage,
  disabled,
  descriptionProps,
  errorMessageProps,
}: InputMessageProps) => {
  if (!helperText && !errorMessage) {
    return null;
  }

  return (
    <div className={styles.message}>
      {!!helperText && (
        <Text className={styles.helperText} size="xsmall" weight="regular">
          <span {...descriptionProps}>{helperText}</span>
        </Text>
      )}
      {!!errorMessage && !disabled && (
        <Text className={styles.errorMessage} color="error100" size="xsmall" weight="regular">
          <Icon className={styles.errorMessageIcon} icon="alert_filled" variant="functionalIcons" />
          <span {...errorMessageProps}>{errorMessage}</span>
        </Text>
      )}
    </div>
  );
};

InputMessage.displayName = 'InputMessage';
