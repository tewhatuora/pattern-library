import { ReactNode } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Label } from '@radix-ui/react-label';

import { Text } from '../Text/Text';

import { Box } from '../Box/Box';

import * as styles from './RadioGroup.css';

export type RadioGroupProps = {
  labels: string[];
  onChange?: (value: string) => void;
  children: ReactNode;
};

/**
 * RadioGroup Component
 *
 * @param props
 * @constructor
 */
export const RadioGroup = ({ labels, onChange, ...boxProps }: RadioGroupProps) => {
  return (
    <Box as="div" className={styles.RadioGroup} {...boxProps}>
      {/* <RadioGroupPrimitive.Root aria-label="View density">
        <Box className={styles.Flex}>
          <RadioGroupPrimitive.Item className={styles.styledItem} value="default" id="r1">
            <RadioGroupPrimitive.Indicator className={styles.styledIndicator} />
          </RadioGroupPrimitive.Item>
          <Text className={styles.radioText} size="medium" weight="regular">
            <Label htmlFor="r1">{labels[0]}</Label>
          </Text>
        </Box>
        <Box className={styles.Flex}>
          <RadioGroupPrimitive.Item className={styles.styledItem} value="compact" id="r2">
            <RadioGroupPrimitive.Indicator className={styles.styledIndicator} />
          </RadioGroupPrimitive.Item>
          <Text className={styles.radioText} size="medium" weight="regular">
            <Label htmlFor="r2">{labels[1]}</Label>
          </Text>
        </Box>
      </RadioGroupPrimitive.Root> */}

      <RadioGroupPrimitive.Root aria-label="View density">
        {labels.map((label, index) => (
          <ul key={index}>
            <Box className={styles.Flex}>
              <RadioGroupPrimitive.Item className={styles.styledItem} value={label} id={label}>
                <RadioGroupPrimitive.Indicator className={styles.styledIndicator} />
              </RadioGroupPrimitive.Item>
              <Text className={styles.radioText} size="medium" weight="regular">
                <Label htmlFor={label}>{label}</Label>
              </Text>
            </Box>
          </ul>
        ))}
      </RadioGroupPrimitive.Root>
    </Box>
  );
};

RadioGroup.displayName = 'RadioGroup';
