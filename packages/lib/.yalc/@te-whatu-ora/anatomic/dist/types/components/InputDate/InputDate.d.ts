import { MutableRefObject } from 'react';
import { InputLabelProps } from '../InputLabel/InputLabel';
import { OtherInputFieldProps } from '../InputField/InputField';
import { InputMessageProps } from '../InputMessage/InputMessage';
import * as styles from '../InputField/InputField.css';
export declare const InputDateStyles: typeof styles;
/** Value object for InputDate, containing `day`, `month` & `year` */
export declare type InputDateValue = {
    /** Day value */
    day?: string;
    /** Month value */
    month?: string;
    /** Year value */
    year?: string;
};
declare type InputDateRefs = {
    day?: MutableRefObject<HTMLInputElement | null>;
    month?: MutableRefObject<HTMLInputElement | null>;
    year?: MutableRefObject<HTMLInputElement | null>;
};
/** Function to call when either the day, month or year values change */
export declare type InputDateOnChangeFn = ({ day, month, year }: InputDateValue) => void;
export declare type InputDateProps = Omit<InputLabelProps, 'error'> & InputMessageProps & Omit<OtherInputFieldProps, 'value' | 'onChange'> & {
    /** Field error messages for `day`, `month` & `year` */
    errors?: {
        /** Error message for `day` value */
        day?: string | undefined;
        /** Error message for `month` value */
        month?: string | undefined;
        /** Error message for `year` value */
        year?: string | undefined;
    };
    /** Value object for InputDate, containing `day`, `month` & `year` */
    value?: InputDateValue;
    /** Function to call when either the day, month or year values change */
    onChange?: InputDateOnChangeFn;
};
/**
 * An input field for entering a date.
 * @constructor
 */
export declare const InputDate: import("react").ForwardRefExoticComponent<Omit<InputLabelProps, "error"> & InputMessageProps & Omit<OtherInputFieldProps, "value" | "onChange"> & {
    /** Field error messages for `day`, `month` & `year` */
    errors?: {
        /** Error message for `day` value */
        day?: string | undefined;
        /** Error message for `month` value */
        month?: string | undefined;
        /** Error message for `year` value */
        year?: string | undefined;
    } | undefined;
    /** Value object for InputDate, containing `day`, `month` & `year` */
    value?: InputDateValue | undefined;
    /** Function to call when either the day, month or year values change */
    onChange?: InputDateOnChangeFn | undefined;
} & import("react").RefAttributes<InputDateRefs>>;
export {};
