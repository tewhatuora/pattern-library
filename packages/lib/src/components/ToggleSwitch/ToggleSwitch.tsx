import * as Switch from '@radix-ui/react-switch';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './ToggleSwitch.css';
import { ReactNode, useCallback, useState } from 'react';

export type ToggleSwitchProps = {
  label?: string;
  headingDisplayed: boolean;
  headingLabel?: string;
  onChange?: () => void;
};

/**
 * ToggleSwitch Component
 * @param props
 * @constructor
 */
export const ToggleSwitch = ({ label, headingDisplayed, headingLabel, onChange, ...boxProps }: ToggleSwitchProps) => {
  const [displayHeading, setDisplayHeading] = useState(false);

  const onChangeFunction = useCallback(() => {
    setDisplayHeading(true);

    if (typeof onChange === 'function') {
      onChangeFunction();
    }
  }, [onChange, setDisplayHeading]);

  return (
    <Box as="div" className={styles.containerStyles} {...boxProps}>
      <Box className={styles.labelStyles}>
        {!!headingDisplayed && (
          <Text size="xsmall" weight="bold">
            {headingLabel}
          </Text>
        )}
        <Text size="xsmall" weight="regular">
          <Label.Root htmlFor="s1">{label}</Label.Root>
        </Text>
      </Box>
      <Box className={styles.toggleStyles}>
        <SwitchPrimitive.Root className={styles.switchRootStyles} defaultChecked id="s1">
          <SwitchPrimitive.Thumb className={styles.switchThumbStyles} />
        </SwitchPrimitive.Root>
      </Box>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
// export default ToggleSwitch;
