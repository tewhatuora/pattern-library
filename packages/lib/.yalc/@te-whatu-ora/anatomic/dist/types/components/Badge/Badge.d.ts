import * as styles from './Badge.css';
export declare const BadgeStyles: typeof styles;
export declare type BadgeProps = {
    /** Badge style variant */
    variant: styles.Variant;
} & Pick<JSX.IntrinsicElements['button'], 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'children' | 'disabled' | 'type' | 'tabIndex'>;
/**
 * Badge component for static labels
 * @constructor
 */
export declare const Badge: {
    ({ variant, children, ...boxProps }: BadgeProps): JSX.Element;
    displayName: string;
};
