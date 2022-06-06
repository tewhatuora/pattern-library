import { ReactNode, useEffect, useRef } from 'react';

import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import { Label } from '@radix-ui/react-label';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './CheckBox.css';

export type CheckBoxProps = {
  labels: { label: string; isIndeterminate: boolean }[];
  isHeadingDisplayed: boolean;
  labelsWithHeading: { heading: string; label: string; isIndeterminate: boolean }[];
  name: string;
  isRequired: boolean;
  onChange?: (checked: boolean) => void;
  children: ReactNode;
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
  labels,
  isHeadingDisplayed,
  labelsWithHeading,
  name,
  isRequired,
  state = 'default',
  onChange,
  ...boxProps
}: CheckBoxProps) => {
  return (
    <Box as="div" {...boxProps}>
      {!!!isHeadingDisplayed
        ? labelsWithHeading.map(({ heading, label, isIndeterminate }) => (
            <Box className={styles.container}>
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
                  disabled={state === 'disabled' ? true : false}
                >
                  <CheckBoxPrimitive.Indicator className={styles.indicator}>
                    {isIndeterminate ? <DividerHorizontalIcon /> : <CheckIcon className={styles.offset} />}
                  </CheckBoxPrimitive.Indicator>
                </CheckBoxPrimitive.Root>
                <Label htmlFor={label} className={styles.text}>
                  <Text size="medium" weight="bold">
                    <Label htmlFor={label}>{heading}</Label>
                  </Text>
                  <Text size="medium" weight="regular">
                    {label}
                  </Text>
                </Label>
              </Box>
            </Box>
          ))
        : labels.map((label, isIndeterminate) => (
            <Box className={styles.container}>
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
                  disabled={state === 'disabled' ? true : false}
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
            </Box>
          ))}
    </Box>
  );
};

CheckBox.displayName = 'CheckBox';
