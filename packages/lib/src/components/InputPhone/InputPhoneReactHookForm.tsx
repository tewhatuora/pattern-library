import {
  ForwardedRef,
  LegacyRef,
  ReactElement,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PhoneInput, { Country } from 'react-phone-number-input/react-hook-form';
import { useTextField } from '@react-aria/textfield';
import clsx from 'clsx';

import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputClearButton } from '../InputField/InputClearButton';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { CountryDropdown } from './CountryDropdown';

import { useText } from '../../hooks/typography';

import * as inputTextStyles from '../InputText/InputText.css';
import * as inputStyles from '../InputField/InputField.css';
import * as styles from './InputPhone.css';

export const InputPhoneReactHookFormStyles = styles;

export type InputPhoneReactHookFormOnChangeFn = (value: string) => void;

export type InputPhoneReactHookFormProps<T extends FieldValues = FieldValues> = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'onChange' | 'name'> & {
    /** Clearable option, shows a clear button */
    clearable?: boolean;
    /** International phone number format */
    international?: boolean;
    defaultCountry?: Country;
    onChange?: InputPhoneReactHookFormOnChangeFn;
    /** show asterisk when field is required (default: `true`) */
    showRequiredAsterisk?: boolean;
    name: FieldPath<T>;
    control: Control<T>;
  };

/**
 * An input field for phone numbers.
 * @constructor
 */
const InputPhoneReactHookFormInner = <T extends FieldValues = FieldValues>(
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
    defaultCountry,
    href,
    tertiaryLabel,
    tertiaryLabelAs,
    tertiaryLabelIcon,
    tertiaryLabelIconPosition,
    onTertiaryLabelClick,
    onFocus,
    onBlur,
    control,
  }: InputPhoneReactHookFormProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const [showClearButton, setShowClearButton] = useState(false);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => internalRef.current);

  const {
    field: { onChange },
  } = useController({ name, control });

  const textSizeClasses = useText({ size: 'medium', weight: 'regular' });
  const {
    labelProps,
    inputProps: inputPropsBase,
    descriptionProps,
    errorMessageProps,
  } = useTextField(
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

  // Disabling eslint as we want to exclude `defaultValue` as the default value
  // will come from React Hook Form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { defaultValue, ...inputProps } = inputPropsBase;

  /**
   * Updates the clear button state.
   */
  const updateClearButton = useCallback(() => {
    if (clearable) {
      const inputValue = internalRef.current && internalRef.current.value;

      setShowClearButton(Boolean(inputValue));
    }
  }, [clearable]);

  /**
   * On mount, update the clear button state.
   */
  useEffect(() => {
    updateClearButton();
  }, [updateClearButton]);

  /**
   * On change, update clear button state.
   */
  const customOnChange = (newValue: string) => {
    updateClearButton();

    onChange(newValue);
  };

  const handleClear = useCallback(() => {
    onChange?.('');
    setShowClearButton(false);

    // Focus input on clear
    internalRef.current?.focus();
  }, [onChange, setShowClearButton]);

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
          aria-invalid={!!errorMessage}
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
          control={control}
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
          onChange={customOnChange || (() => null)}
          onFocus={onFocus}
        />
        {!!clearable && showClearButton && <InputClearButton onClear={handleClear} />}
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
};

export const InputPhoneReactHookForm = forwardRef(InputPhoneReactHookFormInner) as <
  T extends FieldValues = FieldValues,
>(
  props: InputPhoneReactHookFormProps<T> & { ref?: React.Ref<HTMLInputElement> },
) => ReactElement;

// InputPhoneReactHookForm.displayName = 'InputPhoneReactHookForm';
