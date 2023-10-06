import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';

import { forwardRef } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleButton.css';

export const ToggleButtonStyles = styles;

export type ToggleButtonProps = {
  /** Label for left hand button */
  labelLeft: string;
  /** Label for right hand button */
  labelRight: string;
  /** Value to assign when left hand button is selected */
  valueLeft: string;
  /** Value to assign when right hand button is selected */
  valueRight: string;
  /** Optional value to be selected by default */
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  value?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  /** Function to call when the button is changed/toggles */
  onChange?: (value: string) => void;
};

/**
 * ToggleButton Component
 * A control that has two mutually-exclusive states
 * Display a Left Button with text label
 * Display a Right button with text label
 * Only allow one button to have a selcted state
 * @param props
 * @constructor
 */
export const ToggleButton = forwardRef<HTMLDivElement, ToggleButtonProps>((props, ref) => {
  const { labelLeft, labelRight, valueLeft, valueRight, defaultValue, value, onChange, disabled, ...boxProps } = props;
  return (
    <Box as="div" {...boxProps}>
      <ToggleGroup
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
        className={styles.group}
        defaultValue={defaultValue}
        disabled={disabled}
        ref={ref}
        type="single"
        value={value}
        onValueChange={onChange}
      >
        <ToggleGroupItem
          aria-describedby={props['aria-describedby']}
          aria-label={labelLeft}
          className={styles.button}
          value={valueLeft}
        >
          <Text className={styles.buttonText} size="medium" weight="bold">
            {labelLeft}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-describedby={props['aria-describedby']}
          aria-label={labelRight}
          className={styles.button}
          value={valueRight}
        >
          <Text className={styles.buttonText} size="medium" weight="bold">
            {labelRight}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  );
});

ToggleButton.displayName = 'ToggleButton';
