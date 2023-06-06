import { RadioButtonProps } from './RadioButton';
import { InputLabelProps } from '../InputLabel/InputLabel';
import { InputMessageProps } from '../InputMessage/InputMessage';
import { ChildrenOfType } from '../../types/index';
export declare type RadioGroupProps = {
    /** name attribute */
    name: string;
    /** RadioGroup current value */
    value?: string;
    /** Disabled state/attribute used to disable interaction */
    disabled?: boolean;
    /** required attribute */
    required?: boolean;
    /** Show error state */
    error?: boolean | string;
    /** Function to call when the value is changed */
    onChange?: (value: string) => void;
    /** Only `RadioButton` components are allowed as children of `RadioGroup` */
    children: ChildrenOfType<'RadioButton', RadioButtonProps>;
} & InputLabelProps & InputMessageProps;
/**
 * RadioGroup Component
 * Displays a list of vertically stacked radio components
 * Enables users to pick exactly one option from a radio group
 * Have an option to display a heading
 * Have an option to be required
 *
 * @param props
 * @constructor
 */
export declare const RadioGroup: {
    ({ name, value, required, disabled, error, onChange, errorMessage, href, id, label, labelProps, subheading, descriptionProps, errorMessageProps, helperText, tertiaryLabel, tertiaryLabelAs, tertiaryLabelIcon, tertiaryLabelIconPosition, onTertiaryLabelClick, children, }: RadioGroupProps): JSX.Element;
    displayName: string;
};
