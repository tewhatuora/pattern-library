import { InputLabelProps } from '../InputLabel/InputLabel';
import { InputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import * as styles from './InputText.css';
export declare const InputFieldStyles: typeof styles;
declare type MultilineFormFieldProps = {
    multiline?: boolean;
    rows?: number;
};
export declare type InputTextProps = InputLabelProps & InputMessageProps & InputFieldProps & MultilineFormFieldProps;
/**
 * Form field wrapper
 * @constructor
 */
export declare const InputText: import("react").ForwardRefExoticComponent<InputLabelProps & InputMessageProps & import("../InputField/InputField").BaseInputFieldProps & import("react").InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> & MultilineFormFieldProps & import("react").RefAttributes<HTMLTextAreaElement | HTMLInputElement>>;
export {};
