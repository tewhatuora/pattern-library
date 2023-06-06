import * as styles from './ToggleSwitch.css';
export declare const ToggleSwitchStyles: typeof styles;
export declare type ToggleSwitchProps = {
    /** id attribute */
    id: string;
    /** Label for the toggle switch */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Set the switch to 'on' by default */
    defaultChecked?: boolean;
    /** Heading to show above the label */
    heading?: string;
    /** Function to call when the switch is changed/toggled */
    onChange?: (checked: boolean) => void;
    /** name attribute */
    name?: string;
};
/**
 * ToggleSwitch Component
 * A control that has two mutually exclusive states
 * Always has a default value
 * Display text on the left
 * Option to display a text heading on the left
 * Display a toggle switch on the right
 * @param props
 * @constructor
 */
export declare const ToggleSwitch: {
    ({ id, label, defaultChecked, heading, onChange, disabled, name, ...boxProps }: ToggleSwitchProps): JSX.Element;
    displayName: string;
};
