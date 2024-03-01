import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { RadioButton, RadioButtonProps } from './RadioButton';
import { InputLabel, InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessage, InputMessageProps } from '../InputMessage/InputMessage';

import { ChildrenOfType } from '../../types/index';

export type RadioGroupProps = {
  /** name attribute */
  name: string;
  /** RadioGroup current value */
  value?: string;
  /** Disabled state/attribute used to disable interaction */
  disabled?: boolean;
  /** required attribute */
  required?: boolean;
  /** show asterisk when field is required (default: `true`) */
  showRequiredAsterisk?: boolean;
  /** Show error state */
  error?: boolean | string;
  /** Function to call when the value is changed */
  onChange?: (value: string) => void;
  /** Only `RadioButton` components are allowed as children of `RadioGroup` */
  children: ChildrenOfType<'RadioButton', RadioButtonProps>;
} & InputLabelProps &
  InputMessageProps;

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
export const RadioGroup = ({
  name,
  value,
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
}: RadioGroupProps) => (
  <RadioGroupPrimitive.Root name={name} required={required} onValueChange={onChange}>
    <InputLabel
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
    <AllowedChildren
      errorMessage="Only `RadioButton` components are allowed as children of `RadioGroup`"
      propsForChild={(child) => ({
        selected: child?.props?.value === value,
        disabled: child?.props?.disabled || disabled,
        error: child?.props?.error || error,
      })}
      types={[RadioButton]}
    >
      {children}
    </AllowedChildren>
    <InputMessage
      descriptionProps={descriptionProps}
      disabled={disabled}
      errorMessage={errorMessage}
      errorMessageProps={errorMessageProps}
      helperText={helperText}
    />
  </RadioGroupPrimitive.Root>
);

RadioGroup.displayName = 'RadioGroup';
