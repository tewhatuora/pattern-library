import { useMemo } from 'react';

type UsePaginationHook = {
  pages: number;
  current: number;
};

type PaginationValues = {
  showPrevious: boolean;
  showNext: boolean;
  items: Array<number | string>;
};

const BOUNDARY_LIMIT = 2;
const SIBLING_COUNT = 1;

// https://dev.to/namirsab/comment/2050
const range = (start: number, end: number): number[] => {
  const length: number = end - start + 1;
  return Array.from({ length }, (_, i: number) => start + i);
};

const usePagination = ({ pages, current }: UsePaginationHook): PaginationValues => {
  /**
   * The 'Next' button should only
   * show when we're not on the last page
   */
  const showNext = useMemo(() => {
    return current !== pages;
  }, [current, pages]);

  /**
   * The 'Previous' button should only
   * show when we're not on the last page
   */
  const showPrevious = useMemo(() => {
    return current !== 1;
  }, [current]);

  /**
   * Pagination items, consisting of page numbers
   * or ellipsis where necessary.
   */
  const items = useMemo(() => {
    const startPages = range(1, Math.min(BOUNDARY_LIMIT, pages));
    const endPages = range(Math.max(pages - BOUNDARY_LIMIT + 1, BOUNDARY_LIMIT + 1), pages);

    const siblingsStart = Math.max(
      Math.min(
        // Natural start
        current - SIBLING_COUNT,
        // Lower boundary when page is high
        pages - BOUNDARY_LIMIT - SIBLING_COUNT * 2 - 1,
      ),
      // Greater than startPages
      BOUNDARY_LIMIT + 2,
    );

    const siblingsEnd = Math.min(
      Math.max(
        // Natural end
        current + SIBLING_COUNT,
        // Upper boundary when page is low
        BOUNDARY_LIMIT + SIBLING_COUNT * 2 + 2,
      ),
      // Less than endPages
      endPages.length > 0 ? endPages[0] - 2 : pages - 1,
    );

    const startEllipsis =
      siblingsStart > BOUNDARY_LIMIT + 2
        ? ['ellipsis-start']
        : BOUNDARY_LIMIT + 1 < pages - BOUNDARY_LIMIT
        ? [BOUNDARY_LIMIT + 1]
        : [];

    const endEllipsis =
      siblingsEnd < pages - BOUNDARY_LIMIT - 1
        ? ['ellipsis-end']
        : pages - BOUNDARY_LIMIT > BOUNDARY_LIMIT
        ? [pages - BOUNDARY_LIMIT]
        : [];

    const middle = range(siblingsStart, siblingsEnd);

    // Basic list of items to render
    // e.g. items = [ 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10]
    return [
      ...startPages,
      // Start ellipsis
      ...startEllipsis,
      // Sibling pages
      ...middle,
      // End ellipsis
      ...endEllipsis,
      ...endPages,
    ];
  }, [pages, current]);

  return {
    items,
    showPrevious,
    showNext,
  };
};

export default usePagination;
