import { ReactNode, useState } from 'react';

import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { Label } from '@radix-ui/react-label';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './CheckBox.css';

export type CheckBoxProps = {
  labels: string[];
  isHeadingDisplayed: boolean;
  labelsWithHeading: { heading: string; label: string }[];
  name: string;
  isRequired: boolean;
  onChange?: (value: string) => void;
  checked: boolean;
  children: ReactNode;
  state: styles.Variant;
};

/**
 * CheckBox Component
 * Displays a list of vertically stacked radio components
 * Enables users to pick exactly one option from a radio group
 *Have an option to display a heading
 * Have an option to be required
 *
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
  const [checked, setChecked] = useState('indeterminate');
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <CheckBoxPrimitive.Root className={styles.checkBoxPrimitive}>
        <CheckBoxPrimitive.Indicator className={styles.indicator}>
          <CheckIcon />
        </CheckBoxPrimitive.Indicator>
      </CheckBoxPrimitive.Root>
      <Label htmlFor="c1">
        <Text className={styles.label} size="small" weight="regular">
          Checked
        </Text>
      </Label>
    </Box>
  );
};

CheckBox.displayName = 'CheckBox';
