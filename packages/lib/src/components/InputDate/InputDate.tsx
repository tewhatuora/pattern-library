import { ForwardedRef, MutableRefObject, forwardRef, useCallback } from 'react';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, OtherInputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
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
    const handleChange = useCallback(
      (e) => {
        const field: 'day' | 'month' | 'year' = e.target.name.split(`${name}_`)?.[1];
        const newValue: InputDateValue = { ...value };

        newValue[field] = e.target.value;

        onChange(newValue);
      },
      [name, value, onChange],
    );

    const refObj = ref !== null && typeof ref !== 'function' ? ref.current : null;
    const dayRef = refObj?.day || null;
    const monthRef = refObj?.month || null;
    const yearRef = refObj?.year || null;

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
        <div className={styles.field}>
          <Box flexGrow={1}>
            <InputLabel error={!!errors?.day} id={`${id}_day`} label="Day" />
            <InputField
              disabled={disabled}
              id={`${id}_day`}
              name={`${name}_day`}
              ref={dayRef}
              required={required}
              type="number"
              value={value?.day}
              onChange={handleChange}
            />
          </Box>
          <Box flexGrow={1}>
            <InputLabel error={!!errors?.month} id={`${id}_month`} label="Month" />
            <InputField
              disabled={disabled}
              id={`${id}_month`}
              name={`${name}_month`}
              ref={monthRef}
              required={required}
              type="number"
              value={value?.month}
              onChange={handleChange}
            />
          </Box>
          <Box flexGrow={1}>
            <InputLabel error={!!errors?.year} id={`${id}_year`} label="Year" />
            <InputField
              disabled={disabled}
              id={`${id}_year`}
              name={`${name}_year`}
              ref={yearRef}
              required={required}
              type="number"
              value={value?.year}
              onChange={handleChange}
            />
          </Box>
        </div>
        <InputMessage errorMessage={errorMessage} helperText={helperText} />
      </div>
    );
  },
);

InputDate.displayName = 'InputPhone';
