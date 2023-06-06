import * as styles from './ToggleButton.css';
export declare const ToggleButtonStyles: typeof styles;
export declare type ToggleButtonProps = {
    /** Label for left hand button */
    labelLeft: string;
    /** Label for right hand button */
    labelRight: string;
    /** Value to assign when left hand button is selected */
    valueLeft: string;
    /** Value to assign when right hand button is selected */
    valueRight: string;
    /** Optional value to be selected by default */
    defaultValue?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Function to call when the button is changed/toggles */
    onChange?: (value: string) => void;
};
/**
 * ToggleButton Component
 * A control that has two mutually-exclusive states
 * Display a Left Button with text label
 * Display a Right button with text label
 * Only allow one button to have a selcted state
 * @param props
 * @constructor
 */
export declare const ToggleButton: {
    ({ labelLeft, labelRight, valueLeft, valueRight, defaultValue, onChange, disabled, ...boxProps }: ToggleButtonProps): JSX.Element;
    displayName: string;
};
