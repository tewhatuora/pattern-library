import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import { Label } from '@radix-ui/react-label';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './CheckBox.css';

export type CheckBoxProps = {
  label: { label: string };
  isHeadingDisplayed: boolean;
  labelWithHeading?: { heading: string; label: string };
  name: string;
  isIndeterminate: boolean;
  isRequired: boolean;
  onChange?: (checked: boolean) => void;
  state: styles.Variant;
};

/**
 * CheckBox Component
 * Displays a list of vertically stacked checkbox components
 * Enables users to pick multiple options from a group of checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const CheckBox = ({
  label,
  isHeadingDisplayed,
  labelWithHeading,
  name,
  isIndeterminate,
  isRequired,
  state = 'default',
  onChange,
  ...boxProps
}: CheckBoxProps) => {
  return (
    <Box as="div" {...boxProps}>
      {!!isHeadingDisplayed ? (
        <Box
          className={styles.variants({
            variant: state,
          })}
        >
          <CheckBoxPrimitive.Root
            className={styles.checkBoxPrimitive}
            onCheckedChange={onChange}
            required={isRequired}
            name={name}
            disabled={state === 'disabled'}
          >
            <CheckBoxPrimitive.Indicator className={styles.indicator}>
              {isIndeterminate ? <DividerHorizontalIcon /> : <CheckIcon className={styles.offset} />}
            </CheckBoxPrimitive.Indicator>
          </CheckBoxPrimitive.Root>
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
          <CheckBoxPrimitive.Root
            className={styles.checkBoxPrimitive}
            onCheckedChange={onChange}
            required={isRequired}
            name={name}
            disabled={state === 'disabled'}
          >
            <CheckBoxPrimitive.Indicator className={styles.indicator}>
              {isIndeterminate ? <DividerHorizontalIcon /> : <CheckIcon className={styles.offset} />}
            </CheckBoxPrimitive.Indicator>
          </CheckBoxPrimitive.Root>
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

// export const CheckBoxGroup = ({
//   label,
//   isHeadingDisplayed,
//   labelWithHeading,
//   name,
//   isIndeterminate,
//   isRequired,
//   state,
//   onChange,
//   ...boxProps
// }: CheckBoxProps) => {
//   return (
//     <Box as="div" className={styles.container} {...boxProps}>
//       <CheckBox>
//         label={label}, isHeadingDisplayed="false", name={name}, isIndeterminate= {isIndeterminate},isRequired=
//         {isRequired}, state={state}
//       </CheckBox>
//       <CheckBox>
//         label={label}, isHeadingDisplayed=false, name={name}, isIndeterminate= {isIndeterminate}, isRequired=
//         {isRequired}, state={state}
//       </CheckBox>
//       <CheckBox>
//         label={label}, isHeadingDisplayed=false, name={name}, isIndeterminate= {isIndeterminate}, isRequired=
//         {isRequired}, state={state}
//       </CheckBox>
//     </Box>
//   );
// };

CheckBox.displayName = 'CheckBox';
