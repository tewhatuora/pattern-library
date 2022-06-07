import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import { Label } from '@radix-ui/react-label';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './CheckBox.css';

export type CheckboxProps = {
  label: string;
  isHeadingDisplayed?: boolean;
  labelWithHeading?: { heading: string; label: string };
  name?: string;
  isIndeterminate?: boolean;
  isRequired?: boolean;
  onChange?: (checked: boolean) => void;
  state: styles.Variant;
};

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
  isHeadingDisplayed,
  labelWithHeading,
  name,
  isIndeterminate,
  isRequired,
  state = 'default',
  onChange,
  ...boxProps
}: CheckboxProps) => {
  return (
    <Box as="div" {...boxProps}>
      {!!isHeadingDisplayed ? (
        <Box
          className={styles.variants({
            variant: state,
          })}
        >
          <CheckboxPrimitive.Root
            className={styles.checkBoxPrimitive}
            onCheckedChange={onChange}
            required={isRequired}
            name={name}
            disabled={state === 'disabled'}
          >
            <CheckboxPrimitive.Indicator className={styles.indicator}>
              {isIndeterminate ? <DividerHorizontalIcon /> : <CheckIcon className={styles.offset} />}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <Label htmlFor={labelWithHeading.label} className={styles.text}>
            <Text size="medium" weight="bold">
              <Label htmlFor={labelWithHeading.label}>{labelWithHeading.heading}</Label>
            </Text>
            <Text size="medium" weight="regular">
              {labelWithHeading.label}
            </Text>
          </Label>
        </Box>
      ) : (
        <Box
          className={styles.variants({
            variant: state,
          })}
        >
          <CheckboxPrimitive.Root
            className={styles.checkBoxPrimitive}
            onCheckedChange={onChange}
            required={isRequired}
            name={name}
            disabled={state === 'disabled'}
          >
            <CheckboxPrimitive.Indicator className={styles.indicator}>
              {isIndeterminate ? <DividerHorizontalIcon /> : <CheckIcon className={styles.offset} />}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <Label htmlFor={label}>
            <Text className={styles.label} size="small" weight="regular">
              {label}
            </Text>
          </Label>
        </Box>
      )}
    </Box>
  );
};

Checkbox.displayName = 'Checkbox';
