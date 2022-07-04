import { ForwardedRef, forwardRef } from 'react';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, InputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import * as styles from './InputText.css';
import { Box } from '../Box/Box';

export const InputFieldStyles = styles;

type MultilineFormFieldProps = {
  type: 'text';
  multiline?: boolean;
  rows?: number;
};

export type InputTextProps = InputLabelProps & InputMessageProps & InputFieldProps & MultilineFormFieldProps;

/**
 * Form field wrapper
 * @constructor
 */
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      type = 'text',
      id,
      name,
      label,
      subheading,
      tertiaryLabel,
      tertiaryLabelAs,
      tertiaryLabelIcon,
      tertiaryLabelIconPosition,
      onTertiaryLabelClick,
      href,
      placeholder,
      error,
      errorMessage,
      helperText,
      value,
      required,
      disabled,
      clearable,
      multiline,
      rows,
      defaultValue,
      onChange,
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box flexGrow={1}>
        <InputLabel
          error={error || !!errorMessage}
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
        <InputField
          clearable={clearable}
          defaultValue={defaultValue}
          disabled={disabled}
          error={error || !!errorMessage}
          id={id}
          multiline={multiline}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          rows={rows}
          type={type}
          value={value}
          onChange={onChange}
        />
        <InputMessage errorMessage={errorMessage} helperText={helperText} />
      </Box>
    );
  },
);

InputText.displayName = 'InputText';
