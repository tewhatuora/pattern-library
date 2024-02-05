import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ForwardedRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  createElement,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { InputClearButton } from './InputClearButton';

import { useText } from '../../hooks/typography';

import * as styles from './InputField.css';

export const InputFieldStyles = styles;

export type BaseInputFieldProps = {
  /** Input type attribute */
  type: HTMLInputTypeAttribute;
  /** id attribute */
  id?: string;
  /** name attribute */
  name: string;
  /** Field placeholder */
  placeholder?: string;
  /** Error state */
  error?: boolean;
  /** Field value */
  value?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Clearable option, shows a clear button */
  clearable?: boolean;
  /** Multiline option, combine with type = `text` for a textarea */
  multiline?: boolean;
  /** Number of rows for a `multiline` field */
  rows?: number;
  /** Required attribute */
  required?: boolean;
  /** Default value to populate the field with */
  defaultValue?: string;
  /** Function to call when the field value changes */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Function to call when the field is left */
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Function to call when the field is focused */
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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
      onBlur,
      onChange,
      onFocus,
      value,
      ...props
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const internalRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useImperativeHandle<HTMLInputElement | HTMLTextAreaElement | null, HTMLInputElement | HTMLTextAreaElement | null>(
      ref,
      () => internalRef.current,
    );

    const textSizeClasses = useText({ size: 'medium', weight: 'regular' });

    const valueProps = useMemo(() => {
      if (defaultValue) {
        return { defaultValue };
      }
      return { value };
    }, [value, defaultValue]);

    const handleClear = useCallback(() => {
      onChange?.({ target: { name, value: '' } } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);

      // Focus input on clear
      internalRef.current?.focus();
    }, [name, onChange]);

    const inputEl = multiline && type === 'text' ? 'textarea' : 'input';

    const hasClearButton = Boolean(!disabled && clearable && value?.length);

    const inputElement = createElement(inputEl, {
      disabled,
      id,
      name,
      placeholder,
      required,
      type,
      rows,
      onBlur,
      onChange,
      onFocus,
      'aria-invalid': error,
      ...valueProps,
      ...props,
      className: clsx(
        {
          [styles.input.base]: true,
          [styles.input.multiline]: multiline,
          [styles.input.clearable]: clearable,
        },
        textSizeClasses,
        props.className,
      ),
      ref: internalRef,
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
