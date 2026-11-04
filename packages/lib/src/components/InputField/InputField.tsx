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
  useState,
} from 'react';
import { clsx } from 'clsx';

import { Box } from '../Box/Box';
import { InputClearButton } from './InputClearButton';

import { useText } from '../../hooks/typography';

import * as styles from './InputField.css';

export const InputFieldStyles = styles;

export type BaseInputFieldProps = {
  /**
   * Input `type`. `multiline` only takes effect when this is `text`.
   * @default 'text'
   */
  type?: HTMLInputTypeAttribute;
  id?: string;
  name: string;
  /** Hint text shown while the field is empty. It isn't a replacement for a label. */
  placeholder?: string;
  /** Marks the field invalid: error styling and `aria-invalid`. */
  error?: boolean;
  /** Controlled value. Pair with `onChange`. Omit to leave the field uncontrolled, and use `defaultValue`. */
  value?: string;
  disabled?: boolean;
  /**
   * Show a clear button while the field has text and isn't disabled. Clearing calls `onChange` with an empty
   * value and moves focus back to the field.
   */
  clearable?: boolean;
  /** Render a `textarea`. Only takes effect when `type` is `text`. */
  multiline?: boolean;
  /** Visible lines of a `multiline` field. Without it, the field is about five lines tall. */
  rows?: number;
  required?: boolean;
  /** Starting value of an uncontrolled field. Ignored when `value` is set. */
  defaultValue?: string;
  /** Called on every change, including when the clear button empties the field. */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export type InputFieldProps = BaseInputFieldProps & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export type OtherInputFieldProps = Omit<BaseInputFieldProps, 'type' | 'clearable' | 'rows' | 'multiline'>;

/**
 * The bare input or textarea with its styling and optional clear button. It has no label or messages, so
 * use `InputText` for a complete form field.
 *
 * @example
 * <InputField aria-label="Search" clearable name="search" type="search" />
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

    const isControlled = value !== undefined;
    // Tracks whether an uncontrolled field has text, so the clear button can be shown
    const [uncontrolledHasValue, setUncontrolledHasValue] = useState(!!defaultValue);

    const valueProps = useMemo(
      () => (isControlled ? { value } : { defaultValue }),
      [isControlled, value, defaultValue],
    );

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!isControlled) {
          setUncontrolledHasValue(!!e.target.value);
        }

        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleClear = useCallback(() => {
      const el = internalRef.current;

      if (!el) {
        return;
      }

      // Set the value with the native setter and dispatch a real input event, so React calls onChange with a
      // genuine event. This works for controlled and uncontrolled fields, and for form libraries using a ref.
      Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value')?.set?.call(el, '');
      el.dispatchEvent(new Event('input', { bubbles: true }));

      // Focus input on clear
      el.focus();
    }, []);

    const inputEl = multiline && type === 'text' ? 'textarea' : 'input';

    const hasClearButton = Boolean(!disabled && clearable && (isControlled ? value?.length : uncontrolledHasValue));

    const inputElement = createElement(inputEl, {
      disabled,
      id,
      name,
      placeholder,
      required,
      type,
      rows,
      onBlur,
      onChange: handleChange,
      onFocus,
      'aria-invalid': error,
      ...valueProps,
      ...props,
      className: clsx(
        {
          [styles.input.base]: true,
          [styles.input.multiline]: multiline,
          [styles.input.multilineDefaultHeight]: multiline && !rows,
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
