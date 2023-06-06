import { LabelHTMLAttributes } from 'react';
import * as styles from './InputLabel.css';
import { IconType } from '../Icon/icons';
export declare const InputLabelStyles: typeof styles;
export declare type InputLabelProps = {
    /** Label for the field */
    label: string;
    /** Optional label subheading */
    subheading?: string;
    /** Optional tertiary label */
    tertiaryLabel?: string;
    /** Icon to display with the tertiary label */
    tertiaryLabelIcon?: IconType;
    /** Where to position the icon relative to the `tertiaryLabel` */
    tertiaryLabelIconPosition?: 'left' | 'right';
    /** Element type to render the tertiary label as */
    tertiaryLabelAs?: 'a' | 'button' | 'text';
    /** HTML `for` attribute */
    htmlFor?: string;
    /** Error state */
    error?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Show '*' if the field is required */
    required?: boolean;
    /** Accessibility attributes for the label */
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
    /** URL/path for `tertiaryLabel`, if `tertiaryLabelAs` = `a` */
    href?: string | never;
    /** Function to call when the `tertiaryLabel` is clicked, if `tertiaryLabelAs` = `button` */
    onTertiaryLabelClick?: (e: any) => void | never;
};
/**
 * InputLabel
 *
 * A label for an input field.
 *
 * The label must be programmatically linked to a form input element using the
 * `htmlFor` method rather than nesting it inside the label.
 *
 * @param props
 * @constructor
 */
export declare const InputLabel: ({ label, subheading, tertiaryLabel, tertiaryLabelAs, tertiaryLabelIcon, tertiaryLabelIconPosition, onTertiaryLabelClick, htmlFor, href, error, disabled, required, labelProps, }: InputLabelProps) => JSX.Element;
