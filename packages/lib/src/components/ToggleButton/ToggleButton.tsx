import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './ToggleButton.css';

export const ToggleButtonStyles = styles;

export type ToggleButtonProps = {
  labelLeft: string;
  labelRight: string;
  /** Value passed to `onChange` when the left button is selected. */
  valueLeft: string;
  /** Value passed to `onChange` when the right button is selected. */
  valueRight: string;
  /** Value selected initially. Neither button is selected if omitted. There is no controlled `value`. */
  defaultValue?: string;
  disabled?: boolean;
  /** Called with the selected value, or an empty string if the selected button is pressed again to clear it. */
  onChange?: (value: string) => void;
  /** Name for the group, e.g. "View". Set this or `aria-labelledby`. */
  'aria-label'?: string;
  /** Id of an element that names the group. */
  'aria-labelledby'?: string;
};

/**
 * A pair of buttons where at most one is selected, for switching between two options such as a list and
 * grid view. Uncontrolled: set the start with `defaultValue`.
 *
 * @example
 * <ToggleButton
 *   defaultValue="list"
 *   labelLeft="List"
 *   labelRight="Grid"
 *   valueLeft="list"
 *   valueRight="grid"
 *   onChange={setView}
 * />
 */
export const ToggleButton = ({
  labelLeft,
  labelRight,
  valueLeft,
  valueRight,
  defaultValue,
  onChange,
  disabled,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...boxProps
}: ToggleButtonProps) => {
  return (
    <Box as="div" {...boxProps}>
      <ToggleGroup
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={styles.group}
        defaultValue={defaultValue}
        disabled={disabled}
        type="single"
        onValueChange={onChange}
      >
        <ToggleGroupItem aria-label={labelLeft} className={styles.button} value={valueLeft}>
          <Text className={styles.buttonText} size="medium" weight="bold">
            {labelLeft}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem aria-label={labelRight} className={styles.button} value={valueRight}>
          <Text className={styles.buttonText} size="medium" weight="bold">
            {labelRight}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </Box>
  );
};

ToggleButton.displayName = 'ToggleButton';
