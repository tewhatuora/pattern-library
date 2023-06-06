import * as styles from './Tag.css';
export declare const TagStyles: typeof styles;
export declare type TagProps = {
    /** Tag label */
    label: string;
    /** Allow the tag to be clearable */
    isClearable?: boolean;
    /** Function to call when the tag is cleared */
    onClear?: () => void;
};
/**
 * Tag Component
 * For user-provided content.
 * Tags are compact element that represent an input, attribute,
 * or action.
 * Option to be clearable, if clearable a clear icon is displayed
 * @param props
 * @constructor
 */
export declare const Tag: {
    ({ label, isClearable, onClear, ...boxProps }: TagProps): JSX.Element;
    displayName: string;
};
