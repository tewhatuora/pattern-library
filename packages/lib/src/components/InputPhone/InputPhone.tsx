import { ForwardedRef, LegacyRef, RefObject, forwardRef, useCallback } from 'react';
import PhoneInput, { Country } from 'react-phone-number-input';
import { useTextField } from '@react-aria/textfield';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputClearButton } from '../InputField/InputClearButton';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { CountryDropdown } from './CountryDropdown';

import { useText } from '../../hooks/typography';

import * as inputStyles from '../InputField/InputField.css';
import * as styles from './InputPhone.css';

export const InputPhoneStyles = styles;

export type InputPhoneOnChangeFn = (value: string) => void;

export type InputPhoneProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'onChange'> & {
    /** Clearable option, shows a clear button */
    clearable?: boolean;
    /** International phone number format */
    international?: boolean;
    defaultCountry?: Country;
    onChange?: InputPhoneOnChangeFn;
  };

/**
 * An input field for phone numbers.
 * @constructor
 */
export const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>(
  (
    {
      id,
      name,
      errorMessage,
      label,
      value,
      disabled,
      required,
      subheading,
      placeholder,
      helperText,
      clearable,
      international,
      defaultCountry = 'NZ',
      href,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      onTertiaryLabelClick,
      onChange,
    }: InputPhoneProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const textSizeClasses = useText({ size: 'medium', weight: 'regular' });
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
      {
        id,
        name,
        label,
        placeholder,
        value,
        description: helperText,
        errorMessage,
        type: 'tel',
      },
      ref as RefObject<HTMLInputElement>,
    );

    const handleClear = useCallback(() => {
      onChange?.('');
    }, [onChange]);

    return (
      <div>
        <InputLabel
          error={!!errorMessage}
          href={href}
          htmlFor={id}
          label={label}
          labelProps={labelProps}
          required={required}
          subheading={subheading}
          tertiaryLabel={tertiaryLabel}
          tertiaryLabelAs={tertiaryLabelAs}
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        <div className={inputStyles.field}>
          <PhoneInput
            id={id}
            {...inputProps}
            className={clsx(
              inputStyles.input.phone,
              styles.input,
              {
                [inputStyles.input.base]: !errorMessage,
              },
              textSizeClasses,
            )}
            countryOptionsOrder={['NZ', 'AU', 'US', 'CA', 'GB']}
            countrySelectComponent={CountryDropdown}
            defaultCountry={defaultCountry}
            disabled={disabled}
            displayInitialValueAsLocalNumber
            inputComponent={InputField}
            international={international}
            invalid={(!!errorMessage).toString()}
            name={name}
            placeholder={placeholder}
            ref={ref as LegacyRef<any>}
            required={required}
            value={value}
            onChange={onChange || (() => null)}
          />
          {!!clearable && !!value?.length && <InputClearButton onClear={handleClear} />}
        </div>
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

InputPhone.displayName = 'InputPhone';
