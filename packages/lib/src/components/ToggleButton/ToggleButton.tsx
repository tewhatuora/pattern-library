import { Text } from '../Text/Text';

import * as styles from './ToggleButton.css';

import { Box } from '../Box/Box';
import { ReactNode } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';

export type ToggleButtonProps = {
  labelLeft?: string;
  labelRight?: string;
  onChange?: () => void;
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
export const ToggleButton = ({ labelLeft, labelRight, onChange, ...boxProps }: ToggleButtonProps) => {
  return (
    <Box as="div" className={styles.containerStyles} {...boxProps}>
      <ToggleGroup className={styles.toggleGroup} type="single" defaultValue="center" aria-label="Text alignment">
        <ToggleGroupItem className={styles.styledItem} value="left" aria-label="Left aligned">
          <Text size="medium" weight="bold">
            {labelLeft}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem className={styles.styledItem} value="right" aria-label="Right aligned">
          <Text size="medium" weight="bold">
            {labelRight}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
