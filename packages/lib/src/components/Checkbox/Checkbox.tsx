import { ElementType } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Label } from '@radix-ui/react-label';

import { clsx } from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';

import IndeterminateIcon from '../../icons/checkbox/checkbox-indeterminate.svg?component';
import TickIcon from '../../icons/checkbox/checkbox-tick.svg?component';

import * as styles from './Checkbox.css';

export const CheckboxStyles = styles;

export type CheckboxProps = {
  /** Text next to the checkbox. Use an empty string only if `heading` carries the text. */
  label: string;
  /** Bold text shown above `label`, for a group title or a short summary. */
  heading?: string;
  /** Must be unique on the page: the visible label is linked to the checkbox through it. */
  id: string;
  /** Name submitted with the form. */
  name?: string;
  /** Marks the field required and appends `*` to the heading, or to the label when there is no heading. */
  required?: boolean;
  /** Controlled value. The Checkbox is always controlled, so update it from `onCheckedChange`. */
  checked: boolean;
  /** Shows the mixed state, announced as "mixed". Only applies while `checked` is true. */
  indeterminate?: boolean;
  /** Prevents interaction and dims the Checkbox. */
  disabled?: boolean;
  /** Error styling, and sets `aria-invalid`. Put the error text in a `CheckboxGroup` or an `InputMessage`. */
  error?: boolean;
  /** Called with the new value when the user toggles the Checkbox. */
  onCheckedChange?: (checked: boolean) => void;
} & BoxProps;

/**
 * Single checkbox with a label. Wrap several in a `CheckboxGroup` to give them a shared label and messages.
 *
 * @example
 * <Checkbox
 *   checked={accepted}
 *   id="accept-terms"
 *   label="I accept the terms"
 *   name="terms"
 *   onCheckedChange={setAccepted}
 * />
 */
export const Checkbox = ({
  label,
  heading,
  name,
  id,
  required = false,
  checked,
  indeterminate,
  onCheckedChange,
  error = false,
  disabled = false,
  className,
  ...boxProps
}: CheckboxProps) => {
  const IndeterminateIconEl = IndeterminateIcon as ElementType;
  const TickIconEl = TickIcon as ElementType;

  return (
    <Box
      as="div"
      className={clsx(styles.wrapper, { [styles.disabled]: disabled, [styles.error]: error }, className)}
      {...boxProps}
    >
      <CheckboxPrimitive.Root
        aria-invalid={error ? 'true' : 'false'}
        // 'indeterminate' makes assistive technology announce "mixed" rather than "checked"
        checked={checked && indeterminate ? 'indeterminate' : checked}
        className={styles.checkbox}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          {checked && indeterminate ? <IndeterminateIconEl /> : <TickIconEl />}
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
