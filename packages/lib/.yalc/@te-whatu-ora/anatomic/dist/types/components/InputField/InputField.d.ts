import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import * as styles from './InputField.css';
export declare const InputFieldStyles: typeof styles;
export declare type BaseInputFieldProps = {
    /** Input type attribute */
    type: HTMLInputTypeAttribute;
    /** id attribute */
    id?: string;
    /** name attribute */
    name: string;
    /** Field placeholder */
    placeholder?: string;
    /** Error state */
    error?: boolean;
    /** Field value */
    value?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Clearable option, shows a clear button */
    clearable?: boolean;
    /** Multiline option, combine with type = `text` for a textarea */
    multiline?: boolean;
    /** Number of rows for a `multiline` field */
    rows?: number;
    /** Required attribute */
    required?: boolean;
    /** Default value to populate the field with */
    defaultValue?: string;
    /** Function to call when the field value changes */
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
export declare type InputFieldProps = BaseInputFieldProps & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
export declare type OtherInputFieldProps = Omit<BaseInputFieldProps, 'type' | 'clearable' | 'rows' | 'multiline'>;
/**
 * Text field and background for an input field.
 * @param props
 * @constructor
 */
export declare const InputField: import("react").ForwardRefExoticComponent<BaseInputFieldProps & InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> & import("react").RefAttributes<HTMLTextAreaElement | HTMLInputElement>>;
