import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
// import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import { Label } from '@radix-ui/react-label';

import clsx from 'clsx';

import indeterminateIcon from './checkbox-indeterminate.svg';
import tickIcon from './checkbox-tick.svg';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';

import * as styles from './CheckBox.css';

export type CheckboxProps = {
  label: string;
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
        className={styles.checkBoxPrimitive}
        disabled={disabled}
        name={name}
        required={required}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          {checked === 'indeterminate' ? <img src={indeterminateIcon} /> : <img src={tickIcon} />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label className={styles.text} htmlFor={label}>
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
