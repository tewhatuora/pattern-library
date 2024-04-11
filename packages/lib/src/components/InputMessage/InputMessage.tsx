import { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import * as styles from './InputMessage.css';

export const InputMessageStyles = styles;

export type InputMessageProps = {
  /** id attribute */
  id?: string;
  /** Helper text to describe a field */
  helperText?: string;
  /** Error message */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Field description accessibility attributes */
  descriptionProps?: HTMLAttributes<HTMLElement>;
  /** Error message accessibility attributes */
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  className?: string;
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
  className,
}: InputMessageProps) => {
  if (!helperText && !errorMessage) {
    return null;
  }

  return (
    <div className={clsx(styles.message, className)}>
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
