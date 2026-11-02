import { useId } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { RadioButton, RadioButtonProps } from './RadioButton';
import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import { ChildrenOfType } from '../../types/index';

import * as styles from './RadioGroup.css';
export const RadioGroupStyles = styles;

export type RadioGroupProps = {
  name: string;
  /** Selected value. Pair with `onChange` to control the selection. */
  value?: string;
  /** Initially selected value, when the selection isn't controlled with `value`. */
  defaultValue?: string;
  /** Disable every button in the group. */
  disabled?: boolean;
  /** Mark the group required. The label gets a `*` unless `showRequiredAsterisk` is `false`. */
  required?: boolean;
  /**
   * Add `*` to the label when `required`.
   * @default true
   */
  showRequiredAsterisk?: boolean;
  /**
   * Error styling on the radio buttons. `errorMessage` alone only colours the label and shows the message,
   * so set both. Any string counts as `true`.
   */
  error?: boolean | string;
  /** Called with the `value` of the newly selected button. */
  onChange?: (value: string) => void;
  /** Only `RadioButton` components are allowed as children of `RadioGroup` */
  children: ChildrenOfType<'RadioButton', RadioButtonProps>;
} & InputLabelProps &
  InputMessageProps;

/**
 * A vertical list of radio buttons where exactly one can be chosen. Children must be `RadioButton`s. The
 * group is named by `label` and described by the helper text and error message.
 *
 * @example
 * <RadioGroup label="Preferred contact" name="contact" value={method} onChange={setMethod}>
 *   <RadioButton id="contact-email" label="Email" value="email" />
 *   <RadioButton id="contact-phone" label="Phone" value="phone" />
 * </RadioGroup>
 */
export const RadioGroup = ({
  name,
  value,
  defaultValue,
  required,
  showRequiredAsterisk = true,
  disabled,
  error,
  onChange,
  errorMessage,
  href,
  id,
  label,
  labelProps,
  subheading,
  descriptionProps,
  errorMessageProps,
  helperText,
  tertiaryLabel,
  tertiaryLabelAs,
  tertiaryLabelIcon,
  tertiaryLabelIconPosition,
  onTertiaryLabelClick,
  children,
}: RadioGroupProps) => {
  const generatedId = useId();
  const labelId = labelProps?.id ?? `${generatedId}-label`;
  const helperTextId = descriptionProps?.id ?? `${generatedId}-description`;
  const errorMessageId = errorMessageProps?.id ?? `${generatedId}-error`;

  // The label and messages aren't form controls, so the group is named and described with ARIA
  const describedBy = [!!helperText && helperTextId, !!errorMessage && !disabled && errorMessageId]
    .filter(Boolean)
    .join(' ');

  return (
    <RadioGroupPrimitive.Root
      aria-describedby={describedBy || undefined}
      aria-invalid={!!errorMessage || undefined}
      aria-labelledby={labelId}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      name={name}
      required={required}
      value={value}
      onValueChange={onChange}
    >
      <InputLabel
        error={!!errorMessage}
        href={href}
        label={label}
        labelProps={{ ...labelProps, id: labelId }}
        required={showRequiredAsterisk && required}
        subheading={subheading}
        tertiaryLabel={tertiaryLabel}
        tertiaryLabelAs={tertiaryLabelAs}
        tertiaryLabelIcon={tertiaryLabelIcon}
        tertiaryLabelIconPosition={tertiaryLabelIconPosition}
        onTertiaryLabelClick={onTertiaryLabelClick}
      />
      <AllowedChildren
        errorMessage="Only `RadioButton` components are allowed as children of `RadioGroup`"
        propsForChild={(child) => ({
          disabled: child?.props?.disabled || disabled,
          error: child?.props?.error || error,
        })}
        types={[RadioButton]}
      >
        {children}
      </AllowedChildren>
      <InputMessage
        descriptionProps={{ ...descriptionProps, id: helperTextId }}
        disabled={disabled}
        errorMessage={errorMessage}
        errorMessageProps={{ ...errorMessageProps, id: errorMessageId }}
        helperText={helperText}
      />
    </RadioGroupPrimitive.Root>
  );
};

RadioGroup.displayName = 'RadioGroup';
