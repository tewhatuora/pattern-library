import { PropsWithChildren, ReactNode } from 'react';
import * as styles from './Alert.css';
import { IconType } from '../Icon/icons';
export declare const AlertStyles: typeof styles;
export declare type AlertProps = {
    /**  Alert style variant */
    variant: styles.Variant;
    /** Text node for Alert message */
    children?: ReactNode;
    /** Alternative icon to display */
    alternativeIcon?: IconType;
    /** A function that will be called when closing the Alert */
    onClose?: () => void;
};
/**
 * Alerts are small informative, positive, cautionary or critical messages with
 * a stronger visual treatment than notices.
 * @constructor
 */
export declare const Alert: {
    ({ variant, children, alternativeIcon, onClose, ...boxProps }: PropsWithChildren<AlertProps>): JSX.Element | null;
    displayName: string;
};
