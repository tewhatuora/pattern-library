import { Country } from 'react-phone-number-input';
import { InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import * as styles from './InputPhone.css';
export declare const InputPhoneStyles: typeof styles;
export declare type InputPhoneOnChangeFn = (value: string) => void;
export declare type InputPhoneProps = Omit<InputLabelProps, 'error'> & InputMessageProps & Omit<OtherInputFieldProps, 'onChange'> & {
    /** Clearable option, shows a clear button */
    clearable?: boolean;
    /** International phone number format */
    international?: boolean;
    defaultCountry?: Country;
    onChange?: InputPhoneOnChangeFn;
};
/**
 * An input field for phone numbers.
 * @constructor
 */
export declare const InputPhone: import("react").ForwardRefExoticComponent<Omit<InputLabelProps, "error"> & InputMessageProps & Omit<OtherInputFieldProps, "onChange"> & {
    /** Clearable option, shows a clear button */
    clearable?: boolean | undefined;
    /** International phone number format */
    international?: boolean | undefined;
    defaultCountry?: import("libphonenumber-js/types").CountryCode | undefined;
    onChange?: InputPhoneOnChangeFn | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
