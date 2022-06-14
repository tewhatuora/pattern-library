import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleButton.css';

export const ToggleButtonStyles = styles;

export type ToggleButtonProps = {
  labelLeft: string;
  labelRight: string;
  valueLeft: string;
  valueRight: string;
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
      <ToggleGroup aria-label="Text alignment" className={styles.group} type="single" onValueChange={onChange}>
        <ToggleGroupItem aria-label={labelLeft} className={styles.button} value={valueLeft}>
          <Text size="medium" weight="bold">
            {labelLeft}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem aria-label={labelRight} className={styles.button} value={valueRight}>
          <Text size="medium" weight="bold">
            {labelRight}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
