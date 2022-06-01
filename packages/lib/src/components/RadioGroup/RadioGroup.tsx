import { ReactNode } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Label } from '@radix-ui/react-label';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './RadioGroup.css';

export type RadioGroupProps = {
  labels: string[];
  isHeadingDisplayed: boolean;
  labelsWithHeading: { heading: string; label: string }[];
  name: string;
  isRequired: boolean;
  onChange?: (value: string) => void;
  children: ReactNode;
  state: styles.Variant;
};

/**
 * RadioGroup Component
 * Displays a list of vertically stacked radio components
 * Enables users to pick exactly one option from a radio group
 *Have an option to display a heading
 * Have an option to be required
 *
 * @param props
 * @constructor
 */

export const RadioGroup = ({
  labels,
  isHeadingDisplayed,
  labelsWithHeading,
  name,
  isRequired,
  state = 'default',
  onChange,
  ...boxProps
}: RadioGroupProps) => {
  return (
    <Box as="div" {...boxProps}>
      <RadioGroupPrimitive.Root aria-label="View density" name={name} required={isRequired} onValueChange={onChange}>
        {!!isHeadingDisplayed
          ? labelsWithHeading.map(({ heading, label }) => (
              <Box
                className={styles.variants({
                  variant: state,
                })}
              >
                <Box className={styles.offsetButton}>
                  <RadioGroupPrimitive.Item
                    className={styles.styledItem}
                    value={label}
                    id={label}
                    disabled={state === 'disabled' ? true : false}
                  >
                    <RadioGroupPrimitive.Indicator className={styles.styledIndicator} />
                  </RadioGroupPrimitive.Item>
                </Box>
                <Box className={styles.radioText}>
                  <Text size="medium" weight="bold">
                    <Label htmlFor={label}>{heading}</Label>
                  </Text>
                  <Text size="medium" weight="regular">
                    {label}
                  </Text>
                </Box>
              </Box>
            ))
          : labels.map((label) => (
              <Box
                className={styles.variants({
                  variant: state,
                })}
              >
                <Box className={styles.offsetButton}>
                  <RadioGroupPrimitive.Item
                    className={styles.styledItem}
                    value={label}
                    id={label}
                    disabled={state === 'disabled' ? true : false}
                  >
                    <RadioGroupPrimitive.Indicator className={styles.styledIndicator} />
                  </RadioGroupPrimitive.Item>
                </Box>
                <Text className={styles.radioText} size="medium" weight="regular">
                  <Label htmlFor={label}>{label}</Label>
                </Text>
              </Box>
            ))}
      </RadioGroupPrimitive.Root>
    </Box>
  );
};

RadioGroup.displayName = 'RadioGroup';
