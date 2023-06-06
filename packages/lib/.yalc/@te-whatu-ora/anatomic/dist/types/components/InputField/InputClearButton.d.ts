import { HTMLInputTypeAttribute } from 'react';
import * as styles from './InputField.css';
export declare const InputClearButtonStyles: typeof styles;
export declare type InputClearButtonProps = {
    fieldType?: HTMLInputTypeAttribute;
    clearButton?: string;
    onClear: () => void;
};
/**
 * Button/icon to clear an input field
 * @constructor
 */
export declare const InputClearButton: {
    ({ fieldType, onClear }: InputClearButtonProps): JSX.Element;
    displayName: string;
};
