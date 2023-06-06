import { BoxProps } from '../Box/Box';
import * as styles from './Checkbox.css';
export declare const CheckboxStyles: typeof styles;
export declare type CheckboxProps = {
    /** A label for the checkbox */
    label: string;
    /** A heading for the checkbox */
    heading?: string;
    /** Field id for the checkbox */
    id: string;
    /** Field name for the checkbox */
    name?: string;
    /** Whether the checkbox is a required field or not */
    required?: boolean;
    /** Checkbox 'checked' state */
    checked: boolean;
    /** Checkbox 'indeterminate' state */
    indeterminate?: boolean;
    /** Disable the Checkbox */
    disabled?: boolean;
    /** Display the Checkbox in an error state */
    error?: boolean;
    /** A function that will be called when toggling the Checkbox */
    onCheckedChange?: (checked: boolean) => void;
} & BoxProps;
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
export declare const Checkbox: {
    ({ label, heading, name, id, required, checked, indeterminate, onCheckedChange, error, disabled, className, ...boxProps }: CheckboxProps): JSX.Element;
    displayName: string;
};
