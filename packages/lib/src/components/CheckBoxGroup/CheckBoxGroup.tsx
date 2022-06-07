import { Box } from '../Box/Box';

import * as styles from './CheckBoxGroup.css';
import { Checkbox } from '../CheckBox/CheckBox';
import { label } from '../CheckBox/CheckBox.css';

export type CheckboxGroupProps = {
  checkboxObject: {
    label: string;
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

export const CheckboxGroup = ({ checkboxObject, ...boxProps }: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <Box>
        {checkboxObject.map(({ label, state, isIndeterminate, isRequired }) => (
          <Checkbox label={label} isIndeterminate={isIndeterminate} state={state} isRequired={isRequired} />
        ))}
      </Box>
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
