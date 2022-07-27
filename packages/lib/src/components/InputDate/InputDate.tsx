import { ForwardedRef, MutableRefObject, forwardRef, useCallback } from 'react';
import { useField } from '@react-aria/label';
import clsx from 'clsx';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { InputText } from '../InputText/InputText';
import { Box } from '../Box/Box';

import * as styles from '../InputField/InputField.css';

export type InputDateValue = {
  day?: string;
  month?: string;
  year?: string;
};

type InputDateRefs = {
  day?: MutableRefObject<HTMLInputElement | null>;
  month?: MutableRefObject<HTMLInputElement | null>;
  year?: MutableRefObject<HTMLInputElement | null>;
};

export type InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => void;

export type InputDateProps = Omit<InputLabelProps, 'error'> &
  InputMessageProps &
  Omit<OtherInputFieldProps, 'value' | 'onChange'> & {
    errors?: {
      day?: string | undefined;
      month?: string | undefined;
      year?: string | undefined;
    };
    value?: InputDateValue;
    onChange: InputDateOnChangeFn;
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

    const handleChange = useCallback(
      (e) => {
        const field: 'day' | 'month' | 'year' = e.target.name.split(`${name}_`)?.[1];
        const newValue: InputDateValue = { ...value };

        newValue[field] = e.target.value;

        onChange?.(newValue);
      },
      [name, value, onChange],
    );

    return (
      <div>
        <InputLabel
          error={!!errorMessage}
          href={href}
          htmlFor={id}
          label={label}
          labelProps={labelProps}
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
              id={`${id}_day`}
              inputMode="numeric"
              label="Day"
              name={`${name}_day`}
              pattern="[0-9]*"
              ref={dayRef}
              required={required}
              type="number"
              value={value?.day}
              onChange={handleChange}
            />
          </Box>
          <Box className={styles.fieldSegment}>
            <InputText
              disabled={disabled}
              error={!!errors?.month}
              {...fieldProps}
              id={`${id}_month`}
              inputMode="numeric"
              label="Month"
              name={`${name}_month`}
              pattern="[0-9]*"
              ref={monthRef}
              required={required}
              type="number"
              value={value?.month}
              onChange={handleChange}
            />
          </Box>
          <Box className={styles.fieldSegment}>
            <InputText
              disabled={disabled}
              error={!!errors?.year}
              {...fieldProps}
              id={`${id}_year`}
              inputMode="numeric"
              label="Year"
              name={`${name}_year`}
              pattern="[0-9]*"
              ref={yearRef}
              required={required}
              type="number"
              value={value?.year}
              onChange={handleChange}
            />
          </Box>
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

InputDate.displayName = 'InputPhone';
