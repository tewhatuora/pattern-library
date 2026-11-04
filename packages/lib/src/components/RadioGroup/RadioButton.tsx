import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import { clsx } from 'clsx';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import * as styles from './RadioGroup.css';

export type RadioButtonProps = {
  /** Value passed to the group's `onChange` when this button is selected. */
  value: string;
  label: string;
  /** Bold line above the label. */
  heading?: string;
  /** Links the label to the button, so it must be unique on the page. */
  id: string;
  /** Disable this button. Inherits the group's `disabled`. */
  disabled?: boolean;
  /** Error styling. Inherits the group's `error`. Not shown on the label of a disabled button. */
  error?: boolean | string;
  /** @deprecated Selection now comes from the `RadioGroup` `value` or `defaultValue` */
  selected?: true | undefined;
};

/**
 * One option in a `RadioGroup`, which supplies its name, selection and state. Only valid as a direct child
 * of `RadioGroup`.
 */
export const RadioButton = ({ value, id, label, selected, disabled, error, heading }: RadioButtonProps) => (
  <Box className={styles.container}>
    <RadioGroupPrimitive.Item
      className={clsx(styles.radioButton, {
        [styles.radioButtonVariant.error]: !!error,
      })}
      disabled={disabled}
      id={id}
      value={value}
    >
      <RadioGroupPrimitive.Indicator className={styles.indicator} forceMount={selected} />
    </RadioGroupPrimitive.Item>
    <Box
      className={clsx(styles.label, {
        [styles.labelVariant.error]: !disabled && !!error, // Only have error styles if not disabled
        [styles.labelVariant.disabled]: !!disabled,
      })}
    >
      {!!heading && (
        <Text size="medium" weight="bold">
          <Label htmlFor={id}>{heading}</Label>
        </Text>
      )}
      {!!label && (
        <Text size="medium" weight="regular">
          <Label htmlFor={id}>{label}</Label>
        </Text>
      )}
    </Box>
  </Box>
);
