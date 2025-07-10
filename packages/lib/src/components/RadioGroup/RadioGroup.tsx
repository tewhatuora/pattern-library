import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { ComponentPropsWithoutRef, useId } from 'react';

import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';
import { Stack } from '../Stack/Stack';

export type RadioGroupRootProps = {
  /** Show error state */
  error?: boolean | string;
} & ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

export const RadioGroupRoot = ({ error, ...props }: RadioGroupRootProps) => (
  <RadioGroupPrimitive.Root data-error={error ? true : undefined} {...props} />
);

RadioGroupRoot.displayName = 'RadioGroupRoot';

import * as styles from './RadioGroup.css';
export const RadioGroupStyles = styles;

export type RadioGroupProps = {
  /** show asterisk when field is required (default: `true`) */
  showRequiredAsterisk?: boolean;
} & InputLabelProps &
  InputMessageProps &
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

/**
 * RadioGroup Component
 * Displays a list of vertically stacked radio components
 * Enables users to pick exactly one option from a radio group
 * Have an option to display a heading
 * Have an option to be required
 *
 * @param props
 * @constructor
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    error,
    errorMessage,
    helperText,
    disabled,
    href,
    labelProps,
    required,
    subheading,
    tertiaryLabel,
    tertiaryLabelAs,
    tertiaryLabelIcon,
    tertiaryLabelIconPosition,
    onTertiaryLabelClick,
    descriptionProps,
    errorMessageProps,
    showRequiredAsterisk,
    label,
    id,
    className,
    children,
    value,
    onValueChange,
  } = props;

  const labelId = useId();
  const helperTextId = useId();

  const hasError = Boolean(error || errorMessage);

  return (
    <RadioGroupRoot
      aria-describedby={helperTextId}
      aria-labelledby={labelId}
      className={className}
      disabled={disabled}
      error={hasError}
      id={id}
      value={value}
      onValueChange={onValueChange}
    >
      <InputLabel
        disabled={disabled}
        error={hasError}
        href={href}
        label={label}
        labelProps={{ id: labelId, ...labelProps }}
        required={showRequiredAsterisk && required}
        subheading={subheading}
        tertiaryLabel={tertiaryLabel}
        tertiaryLabelAs={tertiaryLabelAs}
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        onTertiaryLabelClick={onTertiaryLabelClick}
      />

      <Stack space="xsmall">{children}</Stack>

      <InputMessage
        descriptionProps={descriptionProps}
        disabled={disabled}
        errorMessage={errorMessage}
        errorMessageProps={errorMessageProps}
        helperText={helperText}
        id={helperTextId}
      />
    </RadioGroupRoot>
  );
};

RadioGroup.displayName = 'RadioGroup';
