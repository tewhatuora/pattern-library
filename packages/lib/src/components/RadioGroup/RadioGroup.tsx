import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';

import { RadioButton, RadioButtonProps } from './RadioButton';

import { ChildrenOfType } from '../../types/index';

export type RadioGroupProps = {
  /** name attribute */
  name: string;
  /** Radiogroup current value */
  value?: string;
  /** Disabled state/attribute used to disable interaction */
  disabled?: boolean;
  /** required attribute */
  required: boolean;
  /** Show error state */
  error?: boolean | string;
  /** Function to call when the value is changed */
  onChange?: (value: string) => void;
  /** Only `RadioButton` components are allowed as children of `RadioGroup` */
  children: ChildrenOfType<'RadioButton', RadioButtonProps>;
};

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
export const RadioGroup = ({ name, value, required, disabled, error, onChange, children }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root name={name} required={required} onValueChange={onChange}>
    <AllowedChildren
      errorMessage="Only `RadioButton` components are allowed as children of `RadioGroup`"
      propsForChild={(child) => ({
        selected: child.props.value === value,
        disabled: child.props.disabled || disabled,
        error: child.props.error || error,
      })}
      types={[RadioButton]}
    >
      {children}
    </AllowedChildren>
  </RadioGroupPrimitive.Root>
);

RadioGroup.displayName = 'RadioGroup';
