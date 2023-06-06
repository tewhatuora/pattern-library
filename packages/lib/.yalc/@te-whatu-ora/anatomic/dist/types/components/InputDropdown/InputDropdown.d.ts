import { ChangeEventHandler, SelectHTMLAttributes } from 'react';
import { InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import * as styles from './InputDropdown.css';
export declare const InputDropdownStyles: typeof styles;
/** Option for dropdown */
export declare type InputOption = {
    value: string | number;
    label: string;
    selected?: boolean;
    disabled?: boolean;
};
export declare type InputDropdownProps = {
    /**
     * Options for dropdown
     * `InputOption = {
     *   value: string | number;
     *   label: string;
     *   selected?: boolean;
     *   disabled?: boolean;
     * }`
     * */
    options: InputOption[];
    /** Function to call when the value changes */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
} & InputLabelProps & InputMessageProps & OtherInputFieldProps & SelectHTMLAttributes<HTMLSelectElement>;
/**
 * Input with a set of options to select from.
 * @constructor
 */
export declare const InputDropdown: import("react").ForwardRefExoticComponent<{
    /**
     * Options for dropdown
     * `InputOption = {
     *   value: string | number;
     *   label: string;
     *   selected?: boolean;
     *   disabled?: boolean;
     * }`
     * */
    options: InputOption[];
    /** Function to call when the value changes */
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
} & InputLabelProps & InputMessageProps & OtherInputFieldProps & SelectHTMLAttributes<HTMLSelectElement> & import("react").RefAttributes<HTMLSelectElement>>;
