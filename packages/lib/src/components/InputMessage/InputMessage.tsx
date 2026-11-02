import { HTMLAttributes } from 'react';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';

import * as styles from './InputMessage.css';

export const InputMessageStyles = styles;

export type InputMessageProps = {
  /** Not used by `InputMessage`. Field components use it as the field's `id`. */
  id?: string;
  /** Hint shown below the field, e.g. the format expected. */
  helperText?: string;
  /** Shown below the field with an alert icon, after any `helperText`. Hidden when `disabled`. */
  errorMessage?: string;
  disabled?: boolean;
  /** Spread on the helper text, so the field can reference it with `aria-describedby`. From react-aria `useField`. */
  descriptionProps?: HTMLAttributes<HTMLElement>;
  /** Spread on the error text, so the field can reference it with `aria-describedby`. From react-aria `useField`. */
  errorMessageProps?: HTMLAttributes<HTMLElement>;
};

/**
 * Helper text and error message shown below a field. Renders nothing when neither is set.
 *
 * @example
 * <InputMessage errorMessage="Enter an email address" helperText="We only use this to contact you" />
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
