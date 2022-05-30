import * as Switch from '@radix-ui/react-switch';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './ToggleSwitch.css';
import { ReactNode, useCallback, useState } from 'react';

export type ToggleSwitchProps = {
  label?: string;
  isHeadingDisplayed: boolean;
  headingLabel?: string;
  onChange?: (checked: boolean) => void;
  children: ReactNode;
};

/**
 * ToggleSwitch Component
 * @param props
 * @constructor
 */
export const ToggleSwitch = ({
  label,
  isHeadingDisplayed: headingDisplayed,
  headingLabel,
  onChange,
  ...boxProps
}: ToggleSwitchProps) => {
  return (
    <Box as="div" className={styles.containerStyles} {...boxProps}>
      <Box className={styles.labelStyles}>
        {!!headingDisplayed && (
          <Text size="medium" weight="bold">
            {headingLabel}
          </Text>
        )}
        <Text size="medium" weight="regular">
          <Label.Root htmlFor="s1">{label}</Label.Root>
        </Text>
      </Box>
      <Box className={styles.toggleStyles}>
        <SwitchPrimitive.Root className={styles.switchRootStyles} defaultChecked id="s1" onCheckedChange={onChange}>
          <SwitchPrimitive.Thumb className={styles.switchThumbStyles} />
        </SwitchPrimitive.Root>
      </Box>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
