import { CheckboxProps } from '../Checkbox/Checkbox';
import { InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessageProps } from '../InputMessage/InputMessage';
import { ChildrenOfType } from '../../types/index';
import * as styles from './CheckboxGroup.css';
export declare const CheckboxGroupStyles: typeof styles;
export declare type CheckboxGroupProps = {
    /** Only `Checkbox` components are allowed as children of `CheckboxGroup` */
    children: ChildrenOfType<'Checkbox', CheckboxProps>;
} & InputLabelProps & InputMessageProps;
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
export declare const CheckboxGroup: {
    ({ errorMessage, href, id, label, labelProps, required, subheading, descriptionProps, disabled, errorMessageProps, helperText, tertiaryLabel, tertiaryLabelAs, tertiaryLabelIcon, tertiaryLabelIconPosition, onTertiaryLabelClick, children, ...boxProps }: CheckboxGroupProps): JSX.Element;
    displayName: string;
};
