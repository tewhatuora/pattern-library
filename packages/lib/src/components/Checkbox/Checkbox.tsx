import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Label } from '@radix-ui/react-label';

import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';

import IndeterminateIcon from '../../icons/checkbox/checkbox-indeterminate.svg?component';
import TickIcon from '../../icons/checkbox/checkbox-tick.svg?component';

import * as styles from './Checkbox.css';

export const CheckboxStyles = styles;

export type CheckboxProps = {
  /** A label for the checkbox */
  label: string;
  /** A heading for the checkbox */
  heading?: string;
  /** Field id for the checkbox */
  id: string;
  /** Field name for the checkbox */
  name?: string;
  /** Whether the checkbox is a required field or not */
  required?: boolean;
  /** Checkbox 'checked' state */
  checked: boolean | 'indeterminate';
  /** Disable the Checkbox */
  disabled?: boolean;
  /** Display the Checkbox in an error state */
  error?: boolean;
  /** A function that will be called when toggling the Checkbox */
  onCheckedChange?: (checked: boolean) => void;
} & BoxProps;

/**
 * Checkbox Component
 * Displays a list of vertically stacked Checkbox components
 * Enables users to pick multiple options from a group of Checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display Checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const Checkbox = ({
  label,
  heading,
  name,
  id,
  required = false,
  checked,
  onCheckedChange,
  error = false,
  disabled = false,
  className,
  ...boxProps
}: CheckboxProps) => {
  return (
    <Box
      as="div"
      className={clsx(styles.wrapper, { [styles.disabled]: disabled, [styles.error]: error }, className)}
      {...boxProps}
    >
      <CheckboxPrimitive.Root
        aria-invalid={error ? 'true' : 'false'}
        checked={checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          {checked === 'indeterminate' ? <IndeterminateIcon /> : <TickIcon />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label className={styles.label} htmlFor={id}>
        {heading && (
          <Text size="medium" weight="bold">
            {/* Show '*' if field is required and there is a heading, without a label, or both a heading and label */}
            {heading} {!!required && (!label || (heading && label)) && '*'}
          </Text>
        )}
        <Text size="medium" weight="regular">
          {/* Show '*' if field is required and there is no heading */}
          {label} {!!required && !heading && '*'}
        </Text>
      </Label>
    </Box>
  );
};

Checkbox.displayName = 'Checkbox';
