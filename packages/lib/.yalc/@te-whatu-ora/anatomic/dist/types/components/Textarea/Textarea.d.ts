/**
 * A textarea - wrapper for InputField with multiline prop
 * @constructor
 */
export declare const Textarea: import("react").ForwardRefExoticComponent<import("../InputLabel/InputLabel").InputLabelProps & import("../InputMessage/InputMessage").InputMessageProps & import("../InputField/InputField").BaseInputFieldProps & import("react").InputHTMLAttributes<HTMLTextAreaElement | HTMLInputElement> & {
    multiline?: boolean | undefined;
    rows?: number | undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
