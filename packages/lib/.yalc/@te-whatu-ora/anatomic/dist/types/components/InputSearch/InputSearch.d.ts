import { OtherInputFieldProps } from '../InputField/InputField';
import * as styles from './InputSearch.css';
export declare const InputSearchStyles: typeof styles;
export declare type InputSearchProps = Omit<OtherInputFieldProps, 'error' | 'disabled' | 'required'>;
/**
 * On search, leads to search results page.
 * @constructor
 */
export declare const InputSearch: import("react").ForwardRefExoticComponent<InputSearchProps & import("react").RefAttributes<HTMLInputElement>>;
