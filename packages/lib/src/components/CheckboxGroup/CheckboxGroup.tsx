import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { ChildrenOfType } from '../../types/index';
import { Box } from '../Box/Box';

import * as styles from './CheckboxGroup.css';

export const CheckboxGroupStyles = styles;

export type CheckboxGroupProps = {
  /** Only `Checkbox` components are allowed as children of `CheckboxGroup` */
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

export const CheckboxGroup = ({ children, ...boxProps }: CheckboxGroupProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      <AllowedChildren
        errorMessage="Only `Checkbox` components are allowed as children of `CheckboxGroup`"
        types={[Checkbox]}
      >
        {children}
      </AllowedChildren>
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
