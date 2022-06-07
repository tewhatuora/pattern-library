import { Box } from '../Box/Box';

import * as styles from './CheckBoxGroup.css';
import { CheckBox } from '../CheckBox/CheckBox';

export type CheckBoxGroupProps = {};

/**
 * CheckBox Component
 * Displays a list of vertically stacked checkbox components
 * Enables users to pick multiple options from a group of checkbox component
 * Have an option to display a heading
 * Have an option to be required
 * Have the option top display checkboxes with indeterminate state
 * @param props
 * @constructor
 */

export const CheckBoxGroup = ({ ...boxProps }: CheckBoxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <CheckBox
        label={'Check one'}
        isHeadingDisplayed={false}
        name={''}
        isIndeterminate={false}
        isRequired={false}
        state={'default'}
      />
      <CheckBox
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

CheckBoxGroup.displayName = 'CheckBoxGroup';
