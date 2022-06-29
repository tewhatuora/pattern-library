import { Children, cloneElement, isValidElement } from 'react';

import assert from 'assert';

import { CheckboxProps } from '../Checkbox/Checkbox';
import { ChildrenOfType } from '../../types/index';
import { Box } from '../Box/Box';

import * as styles from './CheckboxGroup.css';

export const CheckboxGroupStyles = styles;

export type CheckboxGroupProps = {
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
      {Children.map(children, (child) => {
        assert(
          isValidElement(child) && child?.type.name === 'Checkbox',
          'Only `Checkbox` components are allowed as children of `CheckboxGroup`.',
        );
        return cloneElement(child);
      })}
    </Box>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
