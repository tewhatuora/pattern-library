import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import { ComponentPropsWithoutRef } from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import * as styles from './RadioGroup.css';

export type RadioButtonProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  /** Label */
  label: string;
  /** Optional heading to display with label */
  heading?: string;
};

/**
 * Radio button input
 * @param props
 * @constructor
 */
export const RadioButton = ({ id, label, heading, ...primitiveProps }: RadioButtonProps) => (
  <Box className={styles.container}>
    <RadioGroupPrimitive.Item className={clsx(styles.radioButton)} id={id} {...primitiveProps}>
      <RadioGroupPrimitive.Indicator className={styles.indicator} />
    </RadioGroupPrimitive.Item>
    <Box className={clsx(styles.label)}>
      {!!heading && (
        <Text as="label" htmlFor={id} size="medium" weight="bold">
          {heading}
        </Text>
      )}
      {!!label && (
        <Text as="label" htmlFor={id} size="medium" weight="regular">
          {label}
        </Text>
      )}
    </Box>
  </Box>
);
