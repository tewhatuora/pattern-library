import { FocusEventHandler, ForwardedRef, MutableRefObject, forwardRef, useCallback } from 'react';
import { useField } from '@react-aria/label';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { InputText } from '../InputText/InputText';
import { Box } from '../Box/Box';

import * as styles from '../InputField/InputField.css';
import * as inputTextStyles from '../InputText/InputText.css';

export const InputDateStyles = styles;

/** Value object for InputDate, containing `day`, `month` & `year` */
export type InputDateValue = {
  /** Day value */
  day?: string;
  /** Month value */
  month?: string;
  /** Year value */
  year?: string;
};

type InputDateRefs = {
  day?: MutableRefObject<HTMLInputElement | null>;
  month?: MutableRefObject<HTMLInputElement | null>;
  year?: MutableRefObject<HTMLInputElement | null>;
};

/** Function to call when either the day, month or year values change */
export type InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => void;

export type InputDateProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'value' | 'onChange'> & {
    /** Field error messages for `day`, `month` & `year` */
    errors?: {
      /** Error message for `day` value */
      day?: string | undefined;
      /** Error message for `month` value */
      month?: string | undefined;
      /** Error message for `year` value */
      year?: string | undefined;
    };
    /** Value object for InputDate, containing `day`, `month` & `year` */
    value?: InputDateValue;
    /** Function to call when either the day, month or year values change */
    onChange?: InputDateOnChangeFn;
    /** Function to call when either the day, month or year fields is left */
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /** Function to call when either the day, month or year fields are focused */
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /** show asterisk when field is required (default: `true`) */
    showRequiredAsterisk?: boolean;
  };

/**
 * An input field for entering a date.
 * @constructor
 */
export const InputDate = forwardRef<InputDateRefs, InputDateProps>(
  (
    {
      id,
      name,
      errorMessage,
      errors,
      label,
      disabled,
      required,
      showRequiredAsterisk = true,
      value,
      subheading,
      helperText,
      href,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      onTertiaryLabelClick,
      onChange,
      onBlur,
      onFocus,
    }: InputDateProps,
    ref: ForwardedRef<InputDateRefs>,
  ) => {
    const refObj = ref !== null && typeof ref !== 'function' ? ref.current : null;
    const dayRef = refObj?.day || null;
    const monthRef = refObj?.month || null;
    const yearRef = refObj?.year || null;

    const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
      label,
      description: helperText,
      errorMessage,
    });

    const handleFocus = useCallback(
      (e) => {
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleChange = useCallback(
      (e) => {
        const field: 'day' | 'month' | 'year' = e.target.name.split(`${name}_`)?.[1];
        const newValue: InputDateValue = { ...value };

        if (isNaN(e.target.value)) {
          e.target.value = value?.[field] ?? null;
        }

        newValue[field] = e.target.value;

        onChange?.(newValue);
      },
      [name, value, onChange],
    );

    const handleBlur = useCallback(
      (e) => {
        onBlur?.(e);
      },
      [onBlur],
    );

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
        <div className={clsx(styles.field, styles.fieldSegments)}>
          <Box className={styles.fieldSegment}>
            <InputText
              disabled={disabled}
              error={!!errors?.day}
              {...fieldProps}
              aria-labelledby={labelProps.id}
              id={`${id}_day`}
              inputMode="numeric"
              label="Day"
              max="31"
              min="1"
              name={`${name}_day`}
              pattern="[0-9]*"
              ref={dayRef}
              required={required}
              showRequiredAsterisk={showRequiredAsterisk}
              type="text"
              value={value?.day}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </Box>
          <Box className={styles.fieldSegment}>
            <InputText
              disabled={disabled}
              error={!!errors?.month}
              {...fieldProps}
              aria-labelledby={labelProps.id}
              id={`${id}_month`}
              inputMode="numeric"
              label="Month"
              max="12"
              min="1"
              name={`${name}_month`}
              pattern="[0-9]*"
              ref={monthRef}
              required={required}
              showRequiredAsterisk={showRequiredAsterisk}
              type="text"
              value={value?.month}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </Box>
          <Box className={styles.fieldSegment}>
            <InputText
              disabled={disabled}
              error={!!errors?.year}
              {...fieldProps}
              aria-labelledby={labelProps.id}
              id={`${id}_year`}
              inputMode="numeric"
              label="Year"
              min="1"
              name={`${name}_year`}
              pattern="[0-9]*"
              ref={yearRef}
              required={required}
              showRequiredAsterisk={showRequiredAsterisk}
              type="text"
              value={value?.year}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </Box>
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

InputDate.displayName = 'InputPhone';
