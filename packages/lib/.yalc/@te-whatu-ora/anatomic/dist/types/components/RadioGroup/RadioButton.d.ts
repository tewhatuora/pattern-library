export declare type RadioButtonProps = {
    /** Radio button input value */
    value: string;
    /** Label */
    label: string;
    /** Optional heading to display with label */
    heading?: string;
    /** id attribute */
    id: string;
    /** Disabled state */
    disabled?: boolean;
    /** Error state */
    error?: boolean | string;
    /** Selected state */
    selected?: true | undefined;
};
/**
 * Radio button input
 * @param props
 * @constructor
 */
export declare const RadioButton: ({ value, id, label, selected, disabled, error, heading }: RadioButtonProps) => JSX.Element;
