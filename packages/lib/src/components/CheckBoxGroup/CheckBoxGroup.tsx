import { Box } from '../Box/Box';

import * as styles from './CheckBoxGroup.css';
import { CheckboxProps } from '../CheckBox/CheckBox';
import { ChildrenOfType } from '../../types/index';

export type CheckboxGroupProps = {
  isHeadingDisplayed: boolean;
  children: ChildrenOfType<'Checkbox', CheckboxProps>;
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

export const CheckboxGroup = ({ isHeadingDisplayed, children, ...boxProps }: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      {children}
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
