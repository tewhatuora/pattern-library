import { ForwardedRef, LegacyRef, RefObject, forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import PhoneInput, { Country } from 'react-phone-number-input';
import { useTextField } from '@react-aria/textfield';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputClearButton } from '../InputField/InputClearButton';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { CountryDropdown } from './CountryDropdown';

import { useText } from '../../hooks/typography';

import * as inputTextStyles from '../InputText/InputText.css';
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
    /** show asterisk when field is required (default: `true`) */
    showRequiredAsterisk?: boolean;
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
      showRequiredAsterisk = true,
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
      onFocus,
      onChange,
      onBlur,
    }: InputPhoneProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => internalRef.current);

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
      internalRef as RefObject<HTMLInputElement>,
    );

    const handleClear = useCallback(() => {
      onChange?.('');

      // Focus input on clear
      internalRef.current?.focus();
    }, [onChange]);

    return (
      <div>
        <InputLabel
          className={inputTextStyles.fieldLabel}
          error={!!errorMessage}
          href={href}
          htmlFor={id}
          label={label}
          labelProps={labelProps}
          required={showRequiredAsterisk && required}
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
                'PhoneInput--error': errorMessage,
                [styles.clearable]: clearable,
              },
              textSizeClasses,
            )}
            countryOptionsOrder={['NZ', 'AU', 'US', 'CA', 'GB']}
            countrySelectComponent={CountryDropdown}
            defaultCountry={defaultCountry}
            disabled={disabled}
            displayInitialValueAsLocalNumber
            focusInputOnCountrySelection={false}
            inputComponent={InputField}
            international={international}
            invalid={(!!errorMessage).toString()}
            name={name}
            placeholder={placeholder}
            ref={internalRef as LegacyRef<any>}
            required={required}
            value={value}
            onBlur={onBlur}
            onChange={onChange || (() => null)}
            onFocus={onFocus}
          />
          {!!clearable && !!value?.length && <InputClearButton onClear={handleClear} />}
        </div>
        <InputMessage
          className={inputTextStyles.fieldMessage}
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
