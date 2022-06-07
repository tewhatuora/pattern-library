import { Box } from '../Box/Box';

import * as styles from './CheckBoxGroup.css';
import { Checkbox } from '../CheckBox/CheckBox';
import { label } from '../CheckBox/CheckBox.css';

export type CheckboxGroupProps = {
  isHeadingDisplayed: boolean;
  checkboxObject: {
    label: string;
    state: 'default' | 'disabled' | 'error';
    isIndeterminate: boolean;
    isRequired: boolean;
  }[];
  checkboxWithHeading: {
    labelWithHeading: { heading: string; label: string };
    state: 'default' | 'disabled' | 'error';
    isIndeterminate: boolean;
    isRequired: boolean;
  }[];
};

/**
 * CheckboxGroup Component
 * Displays a list of vertically stacked Checkbox components
 * Enables users to pick multiple options from a group of Checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display Checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const CheckboxGroup = ({
  isHeadingDisplayed,
  checkboxObject,
  checkboxWithHeading,
  ...boxProps
}: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      {isHeadingDisplayed
        ? checkboxWithHeading.map(({ labelWithHeading, state, isIndeterminate, isRequired }) => (
            <Checkbox
              heading={labelWithHeading.heading}
              label={labelWithHeading.label}
              state={state}
              isIndeterminate={isIndeterminate}
              isRequired={isRequired}
            />
          ))
        : checkboxObject.map(({ label, state, isIndeterminate, isRequired }) => (
            <Checkbox label={label} isIndeterminate={isIndeterminate} state={state} isRequired={isRequired} />
          ))}
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
