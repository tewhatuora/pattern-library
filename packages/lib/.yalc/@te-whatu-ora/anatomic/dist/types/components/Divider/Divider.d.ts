import * as Separator from '@radix-ui/react-separator';
import * as styles from './Divider.css';
export declare const DividerStyles: typeof styles;
export declare type DividerProps = {
    /** Contrast variant for dark/light UI */
    variant: styles.Variant;
} & Separator.SeparatorProps;
/**
 * A section break in content. Built on top of the [Radix UI Separator
 * component](https://www.radix-ui.com/docs/primitives/components/separator).
 * Semantically equivalent to the `<hr>` HTML element. Set the `decorative`
 * prop to `true` if it is purely decorative and doesn't represent a section
 * break.
 * @param props
 * @constructor
 */
export declare const Divider: {
    ({ variant, className, ...rest }: DividerProps): JSX.Element;
    displayName: string;
};
