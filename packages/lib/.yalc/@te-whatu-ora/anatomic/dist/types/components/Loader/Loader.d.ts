import { ContrastVariant } from '../../types';
import * as styles from './Loader.css';
export declare const LoaderStyles: typeof styles;
export declare type LoaderProps = {
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Loading message */
    message: string;
};
/**
 * A loader can express an unspecified
 * wait time or display the length of a process.
 * @param props
 * @constructor
 */
export declare const Loader: ({ variant, message }: LoaderProps) => JSX.Element;
