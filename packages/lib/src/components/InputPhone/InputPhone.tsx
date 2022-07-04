import { ForwardedRef, forwardRef, useCallback } from 'react';
import PhoneInput, { Country } from 'react-phone-number-input';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputClearButton } from '../InputField/InputClearButton';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { CountryDropdown } from './CountryDropdown';

import { useText } from '../../hooks/typography';

import * as inputStyles from '../InputField/InputField.css';
import * as styles from './InputPhone.css';

export type InputPhoneOnChangeFn = (value: string) => void;

export type InputPhoneProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  OtherInputFieldProps & {
    clearable?: boolean;
    international?: boolean;
    defaultCountry?: Country;
    onChange: (value: string) => void;
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
          subheading={subheading}
          tertiaryLabel={tertiaryLabel}
          tertiaryLabelAs={tertiaryLabelAs}
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        <div className={inputStyles.field}>
          <PhoneInput
            aria-describedby={`${errorMessage} ${helperText}`}
            className={clsx(
              {
                [inputStyles.input.error]: errorMessage,
                [inputStyles.input.base]: !errorMessage,
                [inputStyles.input.phone]: true,
                [styles.input]: true,
              },
              textSizeClasses,
            )}
            countryOptionsOrder={['NZ', 'AU', 'US', 'CA', 'GB']}
            countrySelectComponent={CountryDropdown}
            defaultCountry={defaultCountry}
            disabled={disabled}
            displayInitialValueAsLocalNumber
            id={id}
            inputComponent={InputField}
            international={international}
            invalid={(!!errorMessage).toString()}
            name={name}
            placeholder={placeholder}
            ref={ref}
            required={required}
            value={value}
            onChange={onChange}
          />
          {!!clearable && !!value?.length && <InputClearButton onClear={handleClear} />}
        </div>
        <InputMessage errorMessage={errorMessage} helperText={helperText} />
      </div>
    );
  },
);

InputPhone.displayName = 'InputPhone';
