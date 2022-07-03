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
  label: string;
  id: string;
  heading?: string;
  name?: string;
  required?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  checked: boolean | 'indeterminate';
  disabled?: boolean;
  hasError?: boolean;
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
  hasError = false,
  disabled = false,
  className,
  ...boxProps
}: CheckboxProps) => {
  return (
    <Box
      as="div"
      className={clsx(styles.wrapper, { [styles.disabled]: disabled, [styles.error]: hasError }, className)}
      {...boxProps}
    >
      <CheckboxPrimitive.Root
        aria-invalid={hasError ? 'true' : 'false'}
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
            {heading}
          </Text>
        )}
        <Text size="medium" weight="regular">
          {label}
        </Text>
      </Label>
    </Box>
  );
};

Checkbox.displayName = 'Checkbox';
