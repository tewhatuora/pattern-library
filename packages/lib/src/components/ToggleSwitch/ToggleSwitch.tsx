import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as Label from '@radix-ui/react-label';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleSwitch.css';

export const ToggleSwitchStyles = styles;

export type ToggleSwitchProps = {
  /** Links the label to the switch, so it must be unique on the page. */
  id: string;
  /** Text beside the switch, and its accessible name. Without it the switch has no name. */
  label?: string;
  disabled?: boolean;
  /** Start switched on. The switch is uncontrolled: there is no `checked` prop. */
  defaultChecked?: boolean;
  /** Bold line above the label. */
  heading?: string;
  /** Called with the new on or off state. */
  onChange?: (checked: boolean) => void;
  name?: string;
  required?: boolean;
};

/**
 * An on/off switch with its label on the left. Use it for settings that apply straight away, and a
 * checkbox for choices submitted with a form.
 *
 * @example
 * <ToggleSwitch defaultChecked id="email-notifications" label="Email notifications" onChange={setEnabled} />
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
        required={required}
        onCheckedChange={onChange}
      >
        <SwitchPrimitive.Thumb className={styles.switchThumb} />
      </SwitchPrimitive.Root>
    </Box>
  );
};

ToggleSwitch.displayName = 'ToggleSwitch';
