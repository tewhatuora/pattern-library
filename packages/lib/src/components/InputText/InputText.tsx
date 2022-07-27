import { ForwardedRef, RefObject, forwardRef } from 'react';
import { useTextField } from '@react-aria/textfield';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, InputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import * as styles from './InputText.css';
import { Box } from '../Box/Box';

export const InputFieldStyles = styles;

type MultilineFormFieldProps = {
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
      ...rest
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const fieldType = multiline ? 'text' : type;
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
      {
        id,
        name,
        label,
        placeholder,
        value,
        description: helperText,
        defaultValue,
        errorMessage,
        type: fieldType,
        'aria-labelledby': rest['aria-labelledby'],
        'aria-describedby': rest['aria-describedby'],
      },
      ref as RefObject<HTMLInputElement>,
    );

    return (
      <Box flexGrow={1}>
        <InputLabel
          disabled={disabled}
          error={error || !!errorMessage}
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
        <InputField
          {...inputProps}
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
          type={fieldType}
          value={value}
          onChange={onChange}
          {...rest}
        />
        <InputMessage
          descriptionProps={descriptionProps}
          disabled={disabled}
          errorMessage={errorMessage}
          errorMessageProps={errorMessageProps}
          helperText={helperText}
        />
      </Box>
    );
  },
);

InputText.displayName = 'InputText';
