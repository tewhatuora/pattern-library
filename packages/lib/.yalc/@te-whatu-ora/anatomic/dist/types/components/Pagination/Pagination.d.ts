import * as styles from './Pagination.css';
export declare const PaginationStyles: typeof styles;
export declare type PaginationProps = {
    /** Determines whether to show the pagination buttons. Overrides CSS media queries. */
    showPageButtons?: boolean;
    /** Total number of pages */
    pages: number;
    /** Current page number */
    current: number;
    /** Function to call when page is changed */
    onChange?: (page: number) => void;
};
/**
 * Navigate between divided content on separate pages.
 * @param props
 * @constructor
 */
export declare const Pagination: {
    ({ current, pages, onChange, showPageButtons }: PaginationProps): JSX.Element;
    displayName: string;
};
