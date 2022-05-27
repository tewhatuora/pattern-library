import * as Switch from '@radix-ui/react-switch';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './ToggleSwitch.css';
import { ReactNode, useCallback, useState } from 'react';

export type ToggleSwitchProps = {
  onClear?: () => void;
  label?: string;
};

/**
 * ToggleSwitch Component
 * @param props
 * @constructor
 */
export const ToggleSwitch = ({ label, ...boxProps }: ToggleSwitchProps) => {
  return (
    <Box as="div" {...boxProps}>
      <form>
        <Text className={styles.toggleSwitchStyles} size="xsmall" weight="regular">
          <Label.Root htmlFor="s1">{label}</Label.Root>
          <SwitchPrimitive.Root className={styles.switchRootStyles} defaultChecked id="s1">
            <SwitchPrimitive.Thumb className={styles.switchThumbStyles} />
          </SwitchPrimitive.Root>
        </Text>
      </form>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
// export default ToggleSwitch;
