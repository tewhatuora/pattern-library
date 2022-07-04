import { ForwardedRef, forwardRef, useCallback, useState } from 'react';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

enum PasswordFieldType {
  Password = 'password',
  Text = 'text',
}

export type InputPasswordProps = Omit<
  InputLabelProps,
  'tertiaryLabel' | 'tertiaryLabelAs' | 'onTertiaryLabelClick' | 'href' | 'htmlFor'
> &
  InputMessageProps &
  OtherInputFieldProps;

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
      placeholder,
      error,
      errorMessage,
      helperText,
      value,
      required,
      disabled,
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
      <div>
        <InputLabel
          error={error || !!errorMessage}
          htmlFor={id}
          label={label}
          subheading={subheading}
          tertiaryLabel={type === PasswordFieldType.Password ? 'Show' : 'Hide'}
          tertiaryLabelAs="button"
          onTertiaryLabelClick={handleToggle}
        />
        <InputField
          defaultValue={defaultValue}
          disabled={disabled}
          error={error || !!errorMessage}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
        <InputMessage errorMessage={errorMessage} helperText={helperText} />
      </div>
    );
  },
);

InputPassword.displayName = 'InputPassword';
