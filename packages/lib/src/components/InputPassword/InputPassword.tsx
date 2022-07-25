import { ForwardedRef, HTMLInputTypeAttribute, RefObject, forwardRef, useCallback, useState } from 'react';
import { useTextField } from '@react-aria/textfield';

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
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      onChange,
      ...rest
    }: InputPasswordProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [type, setType] = useState<HTMLInputTypeAttribute>(PasswordFieldType.Password);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
      {
        id,
        name,
        label,
        placeholder,
        value,
        defaultValue,
        ...rest,
        type,
      },
      ref as RefObject<HTMLInputElement>,
    );

    /**
     * Handle showing/hiding the password value
     */
    const handleToggle = useCallback(() => {
      setType(type === PasswordFieldType.Password ? PasswordFieldType.Text : PasswordFieldType.Password);
    }, [type]);

    return (
      <div>
        <InputLabel
          disabled={disabled}
          error={error || !!errorMessage}
          htmlFor={id}
          label={label}
          labelProps={labelProps}
          subheading={subheading}
          tertiaryLabel={type === PasswordFieldType.Password ? 'Show' : 'Hide'}
          tertiaryLabelAs="button"
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          onTertiaryLabelClick={handleToggle}
        />
        <InputField
          {...inputProps}
          defaultValue={defaultValue}
          disabled={disabled}
          error={error || !!errorMessage}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
        <InputMessage
          descriptionProps={descriptionProps}
          disabled={disabled}
          errorMessage={errorMessage}
          errorMessageProps={errorMessageProps}
          helperText={helperText}
        />
      </div>
    );
  },
);

InputPassword.displayName = 'InputPassword';
