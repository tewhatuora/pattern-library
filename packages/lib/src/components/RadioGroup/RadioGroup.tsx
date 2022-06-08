import { Children, PropsWithChildren, cloneElement } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { RadioButton } from './RadioButton';

import assert from 'assert';

export type RadioGroupProps = {
  name: string;
  value?: string;
  required: boolean;
  error?: boolean | string;
  onChange?: (value: string) => void;
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
export const RadioGroup = ({
  name,
  value,
  required,
  error,
  onChange,
  children,
}: PropsWithChildren<RadioGroupProps>) => (
  <RadioGroupPrimitive.Root name={name} required={required} onValueChange={onChange}>
    {Children.map(children, (child) => {
      assert(
        child.type.name === RadioButton.name,
        'Only RadioButton components are allowed as children of RadioGroup.',
      );

      return cloneElement(child, {
        selected: child.props.value === value,
        error: child.props.error || error,
      });
    })}
  </RadioGroupPrimitive.Root>
);

RadioGroup.displayName = 'RadioGroup';
