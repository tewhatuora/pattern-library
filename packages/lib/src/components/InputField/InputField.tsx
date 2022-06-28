import { ChangeEvent, ChangeEventHandler, InputHTMLAttributes, createElement, useCallback, useMemo } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { ButtonRoot } from '../Button/Button';

import { useText } from '../../hooks/typography';

import * as styles from './InputField.css';
import { clearIcon } from '../Icon/Icon.css';

export const InputFieldStyles = styles;

export type InputFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type InputFieldProps = {
  type: InputFieldType;
  id: string;
  name: string;
  placeholder?: string;
  error?: boolean;
  value?: string;
  disabled?: boolean;
  clearable?: boolean;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<InputFieldType>;

export type OtherInputFieldProps = Omit<InputFieldProps, 'type' | 'clearable' | 'rows' | 'multiline'>;

/**
 * Text field and background for an input field.
 * @param error
 * @param id
 * @param name
 * @param defaultValue
 * @param disabled
 * @param clearable
 * @param required
 * @param placeholder
 * @param multiline
 * @param type
 * @param rows
 * @param onChange
 * @param value
 * @constructor
 */
export const InputField = ({
  error,
  id,
  name,
  defaultValue,
  disabled,
  clearable,
  required,
  placeholder,
  multiline,
  type = 'text',
  rows,
  onChange,
  value,
}: InputFieldProps) => {
  const textSizeClasses = useText({ size: 'medium', weight: 'regular' });

  const valueProps = useMemo(() => {
    if (defaultValue) {
      return { defaultValue };
    }
    return { value };
  }, [value, defaultValue]);

  const handleClear = useCallback(() => {
    onChange({ target: { name, value: '' } } as ChangeEvent<HTMLInputElement>);
  }, [name, onChange]);

  const inputEl = multiline && type === 'text' ? 'textarea' : 'input';
  const elements = [];

  const inputElement = createElement(inputEl, {
    className: clsx(
      {
        [styles.input.error]: error,
        [styles.input.base]: !error,
        [styles.input.multiline]: multiline,
      },
      textSizeClasses,
    ),
    disabled,
    id,
    name,
    placeholder,
    required,
    type,
    rows,
    onChange,
    key: 'input',
    ...valueProps,
  });

  elements.push(inputElement);

  if (clearable && value?.length) {
    elements.push(
      <ButtonRoot className={styles.clearButton} key="clear" onPress={handleClear}>
        <Icon className={clearIcon} color="primary100" icon="clear_field" variant="functionalIcons" />
      </ButtonRoot>,
    );
  }

  return <div className={styles.field}>{elements}</div>;
};

InputField.displayName = 'InputField';
