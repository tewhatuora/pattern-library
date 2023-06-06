import { PropsWithChildren } from 'react';
import * as styles from './Breadcrumbs.css';
export declare const BreadcrumbsStyles: typeof styles;
export declare type BreadcrumbsProps = {
    /** Option to display with a background color and additional padding */
    withBackground?: boolean;
    /** Option to bold link text */
    boldLinks?: boolean;
    /** Option to bold all text */
    boldText?: boolean;
    /** Option disable visited state */
    noVisited?: boolean;
};
/**
 * Breadcrumb navigation is a way for users to
 * visualise their location on a website.
 * Use Breadcrumbs on all pages deeper than
 * the homepage or landing pages.
 * @param props
 * @constructor
 */
export declare const Breadcrumbs: import("react").MemoExoticComponent<({ withBackground, boldLinks, boldText, noVisited, children }: PropsWithChildren<BreadcrumbsProps>) => JSX.Element>;
