import { InputLabelProps } from '../InputLabel/InputLabel';
import { BaseInputFieldProps, OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
export declare type InputPasswordProps = Omit<InputLabelProps, 'tertiaryLabel' | 'tertiaryLabelAs' | 'onTertiaryLabelClick' | 'href' | 'htmlFor'> & InputMessageProps & OtherInputFieldProps & Pick<BaseInputFieldProps, 'clearable'>;
/**
 * An input field for entering a password.
 * @constructor
 */
export declare const InputPassword: import("react").ForwardRefExoticComponent<Omit<InputLabelProps, "href" | "htmlFor" | "tertiaryLabel" | "tertiaryLabelAs" | "onTertiaryLabelClick"> & InputMessageProps & OtherInputFieldProps & Pick<BaseInputFieldProps, "clearable"> & import("react").RefAttributes<HTMLInputElement>>;
