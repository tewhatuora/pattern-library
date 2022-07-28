import {
  ChangeEvent,
  ChangeEventHandler,
  ForwardedRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  createElement,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { InputClearButton } from './InputClearButton';

import { useText } from '../../hooks/typography';

import * as styles from './InputField.css';

export const InputFieldStyles = styles;

export type BaseInputFieldProps = {
  type: HTMLInputTypeAttribute;
  id?: string;
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
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export type InputFieldProps = BaseInputFieldProps & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type OtherInputFieldProps = Omit<BaseInputFieldProps, 'type' | 'clearable' | 'rows' | 'multiline'>;

/**
 * Text field and background for an input field.
 * @param props
 * @constructor
 */
export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
  (
    {
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
      ...props
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const textSizeClasses = useText({ size: 'medium', weight: 'regular' });

    const valueProps = useMemo(() => {
      if (defaultValue) {
        return { defaultValue };
      }
      return { value };
    }, [value, defaultValue]);

    const handleClear = useCallback(() => {
      onChange?.({ target: { name, value: '' } } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    }, [name, onChange]);

    const inputEl = multiline && type === 'text' ? 'textarea' : 'input';

    const hasClearButton = Boolean(clearable && value?.length);

    const inputElement = createElement(inputEl, {
      disabled,
      id,
      name,
      placeholder,
      required,
      type,
      rows,
      onChange,
      'aria-invalid': error,
      ...valueProps,
      ...props,
      className: clsx(
        {
          [styles.input.base]: true,
          [styles.input.multiline]: multiline,
          [styles.input.clearable]: hasClearButton,
        },
        textSizeClasses,
        props.className,
      ),
      ref,
    });

    return (
      <div className={styles.field}>
        {inputElement}
        {hasClearButton && (
          <Box position="relative">
            <InputClearButton fieldType={type} onClear={handleClear} />
          </Box>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
