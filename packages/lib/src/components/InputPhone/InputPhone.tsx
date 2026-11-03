import { ForwardedRef, LegacyRef, RefObject, forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import PhoneInput, { Country } from 'react-phone-number-input';
import { useTextField } from '@react-aria/textfield';
import { clsx } from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputClearButton } from '../InputField/InputClearButton';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { CountryDropdown } from './CountryDropdown';

import { useText } from '../../hooks/typography';

import * as inputStyles from '../InputField/InputField.css';
import * as styles from './InputPhone.css';

export const InputPhoneStyles = styles;

export type InputPhoneOnChangeFn = (value: string | undefined) => void;

export type InputPhoneProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'onChange'> & {
    /** Show a clear button while there is a value. Clearing calls `onChange` with `undefined`, as emptying the field does. */
    clearable?: boolean;
    /** Show and format the number in international form, with its country calling code. */
    international?: boolean;
    /**
     * Country selected initially, as an ISO 3166-1 alpha-2 code, e.g. `AU`. Numbers entered with a
     * country calling code, e.g. `+61`, switch the country.
     * @default 'NZ'
     */
    defaultCountry?: Country;
    /** Called with the number in E.164 format, e.g. `+64211234567`, or `undefined` when the field is emptied. */
    onChange?: InputPhoneOnChangeFn;
    /**
     * Add `*` to the label when `required`.
     * @default true
     */
    showRequiredAsterisk?: boolean;
  };

/**
 * A phone number field with a country selector. `value` and `onChange` use E.164 format
 * (`+64211234567`), so keep the number in state and pass it back as `value`.
 *
 * @example
 * <InputPhone label="Mobile number" name="mobile" value={mobile} onChange={setMobile} />
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
      tertiaryLabelTooltip,
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
      onChange?.(undefined);

      // Focus input on clear
      internalRef.current?.focus();
    }, [onChange]);

    return (
      <div>
        <InputLabel
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
          tertiaryLabelTooltip={tertiaryLabelTooltip}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        <div className={inputStyles.field}>
          <PhoneInput
            id={id}
            {...inputProps}
            aria-invalid={!!errorMessage || undefined}
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
