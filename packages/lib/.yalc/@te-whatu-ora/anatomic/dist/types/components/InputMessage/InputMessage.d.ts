import { HTMLAttributes } from 'react';
import * as styles from './InputMessage.css';
export declare const InputMessageStyles: typeof styles;
export declare type InputMessageProps = {
    /** id attribute */
    id?: string;
    /** Helper text to describe a field */
    helperText?: string;
    /** Error message */
    errorMessage?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Field description accessibility attributes */
    descriptionProps?: HTMLAttributes<HTMLElement>;
    /** Error message accessibility attributes */
    errorMessageProps?: HTMLAttributes<HTMLElement>;
};
/**
 * Further content for an input field.
 * @constructor
 */
export declare const InputMessage: {
    ({ helperText, errorMessage, disabled, descriptionProps, errorMessageProps, }: InputMessageProps): JSX.Element | null;
    displayName: string;
};
