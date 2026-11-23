import { memo, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import usePagination from '../../hooks/usePagination';

import * as styles from './Pagination.css';
import { ButtonRoot } from '../Button/ButtonRoot';

export const PaginationStyles = styles;

export type PaginationProps = {
  /**
   * `true` always shows page number buttons, `false` always shows a page select instead. Left unset, CSS
   * media queries show the buttons on desktop and the select on smaller screens.
   */
  showPageButtons?: boolean;
  /** Total number of pages. */
  pages: number;
  /**
   * Current page, starting at 1. The component doesn't track the page itself, so update this from `onChange`.
   * @default 1
   */
  current: number;
  /** Called with the new page number when a page button, Previous or Next is pressed. */
  onChange?: (page: number) => void;
};

type PaginationPageProps = {
  page: number;
  isCurrent: boolean;
  onSelect?: (page: number) => void;
};

const PaginationPage = memo(({ page, isCurrent, onSelect }: PaginationPageProps) => {
  const className = useMemo(() => {
    return isCurrent ? styles.button.current : styles.button.page;
  }, [isCurrent]);

  return (
    <li className={styles.page}>
      <ButtonRoot
        aria-current={isCurrent ? 'page' : undefined}
        aria-label={`Go to page ${page}`}
        className={className}
        onPress={() => onSelect?.(page)}
      >
        {page}
      </ButtonRoot>
    </li>
  );
});

/**
 * Previous and Next buttons with page numbers (or, on smaller screens, a page select), for content split
 * across pages. Controlled: the current page comes from `current`.
 *
 * @example
 * <Pagination current={page} pages={12} onChange={setPage} />
 */
export const Pagination = ({ current = 1, pages, onChange, showPageButtons }: PaginationProps) => {
  const { items, showPrevious, showNext } = usePagination({ current, pages });
  const pageNumbers = useMemo(() => Array.from({ length: pages }, (_, i) => i + 1), [pages]);

  /**
   * Handle clicking on the 'Previous' button
   */
  const handlePrevious = useCallback(() => {
    if (current >= 2) {
      const prevPage = current - 1;
      onChange?.(prevPage);
    }
  }, [current, onChange]);

  /**
   * Handle clicking on the 'Next' button
   */
  const handleNext = useCallback(() => {
    if (current <= pages - 1) {
      const nextPage = current + 1;
      onChange?.(nextPage);
    }
  }, [current, pages, onChange]);

  /**
   * Memoize rendering of page buttons
   */
  const renderPageButtons = useMemo(() => {
    return items.map((item) => {
      if (typeof item === 'number') {
        return (
          // onChange is passed as is (not wrapped per page) so the memoised PaginationPage only re-renders when needed
          <PaginationPage isCurrent={item === current} key={`page-${item}`} page={item} onSelect={onChange} />
        );
      }

      return (
        <li className={styles.page} key={item}>
          <Box className={styles.pageItem}>
            <span className={styles.ellipsis} />
          </Box>
        </li>
      );
    });
  }, [current, items, onChange]);

  return (
    <Box className={styles.container}>
      <Box className={styles.buttonContainer}>
        {showPrevious && (
          <Button
            aria-label="Go to previous page"
            className={styles.button.primary}
            variant="secondary"
            onPress={handlePrevious}
          >
            Previous
          </Button>
        )}
      </Box>
      {/* Never show the page select when `showPageButtons === true` */}
      {showPageButtons === false || showPageButtons === undefined ? (
        <Box className={styles.pages[showPageButtons === undefined ? 'uncontrolled' : 'controlled']}>
          <Box className={styles.pageSelect}>
            <select
              aria-label={`Page, of ${pages}`}
              className={styles.select}
              value={current}
              onChange={(e) => onChange?.(Number(e.target.value))}
            >
              {pageNumbers.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <Icon aria-hidden="true" className={styles.selectChevron} icon="chevron_down" variant="functionalIcons" />
          </Box>
        </Box>
      ) : null}
      {/* Never show page buttons when `showPageButtons === false` */}
      {showPageButtons === true || showPageButtons === undefined ? (
        <Box as="ul" className={styles.pageLinks[showPageButtons === undefined ? 'uncontrolled' : 'controlled']}>
          {renderPageButtons}
        </Box>
      ) : null}
      <Box className={styles.buttonContainer}>
        {showNext && (
          <Button aria-label="Go to next page" className={styles.button.primary} variant="primary" onPress={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

Pagination.displayName = 'Pagination';
