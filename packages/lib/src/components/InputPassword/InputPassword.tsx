import { ForwardedRef, forwardRef, useCallback, useState } from 'react';

import { InputLabelProps } from '../InputLabel/InputLabel';
import { BaseInputFieldProps, OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import { InputText } from '../InputText/InputText';

enum PasswordFieldType {
  Password = 'password',
  Text = 'text',
}

export type InputPasswordProps = Omit<
  InputLabelProps,
  'tertiaryLabel' | 'tertiaryLabelAs' | 'onTertiaryLabelClick' | 'href' | 'htmlFor'
> &
  InputMessageProps &
  OtherInputFieldProps &
  Pick<BaseInputFieldProps, 'clearable'>;

/**
 * An input field for entering a password.
 * @constructor
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
      placeholder,
      error,
      errorMessage,
      helperText,
      value,
      required,
      disabled,
      clearable,
      defaultValue,
      onChange,
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
        subheading={subheading}
        tertiaryLabel={type === PasswordFieldType.Password ? 'Show' : 'Hide'}
        tertiaryLabelAs="button"
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        type={type}
        value={value}
        onChange={onChange}
        onTertiaryLabelClick={handleToggle}
      />
    );
  },
);

InputPassword.displayName = 'InputPassword';
