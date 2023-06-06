import { IconType } from '../Icon/icons';
import * as styles from './Notice.css';
export declare const NoticeStyles: typeof styles;
export declare type NoticeProps = {
    /** Notice label text */
    label?: string;
    /** Notice color variant */
    variant: styles.Variant;
    /** Alternative icon to show */
    alternativeIcon?: IconType;
};
export declare const Notice: {
    ({ label, variant, alternativeIcon, ...boxProps }: NoticeProps): JSX.Element;
    displayName: string;
};
