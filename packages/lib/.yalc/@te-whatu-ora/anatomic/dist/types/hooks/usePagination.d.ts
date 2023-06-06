declare type UsePaginationHook = {
    pages: number;
    current: number;
};
declare type PaginationValues = {
    showPrevious: boolean;
    showNext: boolean;
    items: Array<number | string>;
};
declare const usePagination: ({ pages, current }: UsePaginationHook) => PaginationValues;
export default usePagination;
