import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleSwitch.css';

export const ToggleSwitchStyles = styles;

export type ToggleSwitchProps = {
  id: string;
  label?: string;
  defaultChecked?: boolean;
  heading?: string;
  onChange?: (checked: boolean) => void;
  name?: string;
};

/**
 * ToggleSwitch Component
 * A control that has two mutually exclusive states
 * Always has a default value
 * Display text on the left
 * Option to display a text heading on the left
 * Display a toggle switch on the right
 * @param props
 * @constructor
 */
export const ToggleSwitch = ({
  id,
  label,
  defaultChecked,
  heading,
  onChange,
  name,
  ...boxProps
}: ToggleSwitchProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <Box className={styles.label}>
        {!!heading && (
          <Text size="medium" weight="bold">
            {heading}
          </Text>
        )}
        <Text size="medium" weight="regular">
          <Label.Root htmlFor={id}>{label}</Label.Root>
        </Text>
      </Box>
      <SwitchPrimitive.Root
        className={styles.switchRoot}
        defaultChecked={defaultChecked}
        id={id}
        name={name}
        onCheckedChange={onChange}
      >
        <SwitchPrimitive.Thumb className={styles.switchThumb} />
      </SwitchPrimitive.Root>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
