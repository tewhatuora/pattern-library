import { Children, cloneElement, isValidElement } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import assert from 'assert';

import { RadioButtonProps } from './RadioButton';

import { ChildrenOfType } from '../../types/index';

export type RadioGroupProps = {
  name: string;
  value?: string;
  disabled: boolean;
  required: boolean;
  error?: boolean | string;
  onChange?: (value: string) => void;
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
    {Children.map(children, (child) => {
      assert(
        isValidElement(child) && child?.type.name === 'RadioButton',
        'Only RadioButton components are allowed as children of RadioGroup.',
      );

      return cloneElement(child, {
        selected: child.props.value === value,
        disabled: child.props.disabled || disabled,
        error: child.props.error || error,
      });
    })}
  </RadioGroupPrimitive.Root>
);

RadioGroup.displayName = 'RadioGroup';
