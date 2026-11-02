import { ForwardedRef, InputHTMLAttributes, forwardRef, useCallback, useState } from 'react';

import { InputLabelProps } from '../InputLabel/InputLabel';
import { BaseInputFieldProps, OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import { InputText } from '../InputText/InputText';

enum PasswordFieldType {
  Password = 'password',
  Text = 'text',
}

export type InputPasswordProps = {
  /**
   * Add `*` to the label when `required`.
   * @default true
   */
  showRequiredAsterisk?: boolean;
} & Omit<InputLabelProps, 'tertiaryLabel' | 'tertiaryLabelAs' | 'onTertiaryLabelClick' | 'href' | 'htmlFor'> &
  InputMessageProps &
  OtherInputFieldProps &
  Pick<BaseInputFieldProps, 'clearable'> &
  // Other input attributes, e.g. `autoComplete="current-password"` or `"new-password"` for password managers
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof BaseInputFieldProps | 'type'>;

/**
 * A password field with a Show/Hide button in the label row that reveals the text. Set `autoComplete` to
 * `current-password` or `new-password` so password managers fill it correctly.
 *
 * @example
 * <InputPassword autoComplete="current-password" label="Password" name="password" />
 */
export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    {
      id,
      name,
      label,
      subheading,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      tertiaryLabelTooltip,
      placeholder,
      error,
      errorMessage,
      helperText,
      value,
      required,
      showRequiredAsterisk = true,
      disabled,
      clearable,
      defaultValue,
      onBlur,
      onChange,
      onFocus,
      ...inputProps
    }: InputPasswordProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [type, setType] = useState<PasswordFieldType>(PasswordFieldType.Password);
    /**
     * Handle showing/hiding the password value
     */
    const handleToggle = useCallback(() => {
      setType(type === PasswordFieldType.Password ? PasswordFieldType.Text : PasswordFieldType.Password);
    }, [type]);

    return (
      <InputText
        {...inputProps}
        clearable={clearable}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error || !!errorMessage}
        errorMessage={errorMessage}
        helperText={helperText}
        id={id}
        label={label}
        name={name}
        placeholder={placeholder}
        ref={ref}
        required={required}
        showRequiredAsterisk={showRequiredAsterisk}
        subheading={subheading}
        tertiaryLabel={type === PasswordFieldType.Password ? 'Show' : 'Hide'}
        tertiaryLabelAs="button"
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        tertiaryLabelTooltip={tertiaryLabelTooltip}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onTertiaryLabelClick={handleToggle}
      />
    );
  },
);

InputPassword.displayName = 'InputPassword';
