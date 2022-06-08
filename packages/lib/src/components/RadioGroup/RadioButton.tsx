import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import * as styles from './RadioGroup.css';

export type RadioButtonProps = {
  value: string;
  label: string;
  heading?: string;
  id: string;
  disabled?: boolean;
  error?: boolean | string;
  selected?: true | undefined;
};

/**
 * Radio button input
 * @param props
 * @constructor
 */
export const RadioButton = ({ value, id, label, selected, disabled, error, heading }: RadioButtonProps) => (
  <Box className={styles.container}>
    <RadioGroupPrimitive.Item
      className={clsx(styles.radioButton, {
        [styles.radioButtonVariant.error]: !!error,
      })}
      disabled={disabled}
      id={id}
      value={value}
    >
      <RadioGroupPrimitive.Indicator className={styles.indicator} forceMount={selected} />
    </RadioGroupPrimitive.Item>
    <Box
      className={clsx(styles.label, {
        [styles.labelVariant.disabled]: !!disabled,
        [styles.labelVariant.error]: !!error,
      })}
    >
      {!!heading && (
        <Text size="medium" weight="bold">
          <Label htmlFor={id}>{heading}</Label>
        </Text>
      )}
      {!!label && (
        <Text size="medium" weight="regular">
          <Label htmlFor={id}>{label}</Label>
        </Text>
      )}
    </Box>
  </Box>
);
