import { Box } from '../Box/Box';

import * as styles from './CheckBoxGroup.css';
import { Checkbox } from '../CheckBox/CheckBox';

export type CheckboxGroupProps = {};

/**
 * Checkbox Component
 * Displays a list of vertically stacked Checkbox components
 * Enables users to pick multiple options from a group of Checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display Checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const CheckboxGroup = ({ ...boxProps }: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <Checkbox
        label={'Check one'}
        isHeadingDisplayed={false}
        name={''}
        isIndeterminate={false}
        isRequired={false}
        state={'default'}
      />
      <Checkbox
        label={'Check two'}
        isHeadingDisplayed={false}
        name={''}
        isIndeterminate={false}
        isRequired={false}
        state={'default'}
      />
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
