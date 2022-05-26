import * as Switch from '@radix-ui/react-switch';
import * as SwitchPrimitive from '@radix-ui/react-switch';

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
    <Box as="div" className={styles.toggleSwitchStyles} {...boxProps}>
      <Text size="xsmall" weight="regular">
        {label}
      </Text>
      <Switch.Root className={styles.switchRootStyles} defaultChecked id="s1">
        <Switch.Thumb className={styles.switchThumbStyles} />
      </Switch.Root>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
// export default ToggleSwitch;
