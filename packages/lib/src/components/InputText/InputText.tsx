import { ForwardedRef, forwardRef } from 'react';
import { useField } from '@react-aria/label';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputField, InputFieldProps } from '../InputField/InputField';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import * as styles from './InputText.css';
import { Box } from '../Box/Box';

export const InputTextStyles = styles;

type MultilineFormFieldProps = {
  multiline?: boolean;
  rows?: number;
};

export type InputTextProps = {
  /**
   * Add `*` to the label when `required`.
   * @default true
   */
  showRequiredAsterisk?: boolean;
} & InputLabelProps &
  InputMessageProps &
  InputFieldProps &
  MultilineFormFieldProps;

/**
 * A complete text field: label, input and helper or error message, wired together for accessibility. It
 * wraps `InputField`, so those props pass through. `errorMessage` also puts the field in the error state,
 * so `error` is only needed for an error with no message. Without an `id` one is generated.
 *
 * @example
 * <InputText
 *   errorMessage={emailError}
 *   helperText="We only use this to contact you"
 *   label="Email"
 *   name="email"
 *   type="email"
 * />
 */
export const InputText = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputTextProps>(
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
      tertiaryLabelTooltip,
      onTertiaryLabelClick,
      href,
      placeholder,
      error,
      errorMessage,
      helperText,
      value,
      required,
      showRequiredAsterisk = true,
      disabled,
      clearable,
      multiline,
      rows,
      defaultValue,
      onChange,
      labelProps: consumerLabelProps,
      descriptionProps: consumerDescriptionProps,
      errorMessageProps: consumerErrorMessageProps,
      // Label props that don't apply to the input element
      as,
      htmlFor,
      ...rest
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldType = multiline ? 'text' : type;
    const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField({
      id,
      label,
      description: helperText,
      errorMessage,
      'aria-labelledby': rest['aria-labelledby'],
      'aria-describedby': rest['aria-describedby'],
    });

    return (
      <Box flexGrow={1}>
        <InputLabel
          disabled={disabled}
          error={error || !!errorMessage}
          href={href}
          htmlFor={id}
          label={label}
          labelProps={{ ...consumerLabelProps, ...labelProps }}
          required={showRequiredAsterisk && required}
          subheading={subheading}
          tertiaryLabel={tertiaryLabel}
          tertiaryLabelAs={tertiaryLabelAs}
          tertiaryLabelIcon={tertiaryLabelIcon}
          tertiaryLabelIconPosition={tertiaryLabelIconPosition}
          tertiaryLabelTooltip={tertiaryLabelTooltip}
          onTertiaryLabelClick={onTertiaryLabelClick}
        />
        {/* fieldProps sets the id: the given id, or one react-aria generates that the label points to */}
        <InputField
          {...rest}
          {...fieldProps}
          clearable={clearable}
          defaultValue={defaultValue}
          disabled={disabled}
          error={error || !!errorMessage}
          multiline={multiline}
          name={name}
          placeholder={placeholder}
          ref={ref}
          required={required}
          rows={rows}
          type={fieldType}
          value={value}
          onChange={onChange}
        />
        <InputMessage
          descriptionProps={{ ...consumerDescriptionProps, ...descriptionProps }}
          disabled={disabled}
          errorMessage={errorMessage}
          errorMessageProps={{ ...consumerErrorMessageProps, ...errorMessageProps }}
          helperText={helperText}
        />
      </Box>
    );
  },
);

InputText.displayName = 'InputText';
