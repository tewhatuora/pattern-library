import { ReactNode, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleButton.css';

export type ToggleButtonProps = {
  labelLeft: string;
  labelRight: string;
  valueLeft: string;
  valueRight: string;
  onChange?: (value: string) => void;
  children: ReactNode;
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
export const ToggleButton = ({
  labelLeft,
  labelRight,
  valueLeft,
  valueRight,
  onChange,
  ...boxProps
}: ToggleButtonProps) => {
  return (
    <Box as="div" {...boxProps}>
      <ToggleGroup className={styles.toggleGroup} onValueChange={onChange} type="single" aria-label="Text alignment">
        <ToggleGroupItem className={styles.styledItem} value={valueLeft} aria-label={valueLeft}>
          <Text size="medium" weight="bold">
            {labelLeft}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem className={styles.styledItem} value={valueRight} aria-label={valueRight}>
          <Text size="medium" weight="bold">
            {labelRight}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
