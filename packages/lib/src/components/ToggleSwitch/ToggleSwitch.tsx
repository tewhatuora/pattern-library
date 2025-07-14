import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleSwitch.css';

export const ToggleSwitchStyles = styles;

export type ToggleSwitchProps = {
  /** id attribute */
  id: string;
  /** Label for the toggle switch */
  label?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Set the switch to 'on' by default */
  defaultChecked?: boolean;
  /** Heading to show above the label */
  heading?: string;
  /** Function to call when the switch is changed/toggled */
  onChange?: (checked: boolean) => void;
  /** name attribute */
  name?: string;
  required?: boolean;
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
  disabled,
  name,
  required,
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
        disabled={disabled}
        id={id}
        name={name}
        onCheckedChange={onChange}
        required={required}
      >
        <SwitchPrimitive.Thumb className={styles.switchThumb} />
      </SwitchPrimitive.Root>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
