import { memo, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

import usePagination from '../../hooks/usePagination';

import * as styles from './Pagination.css';
import { ButtonRoot } from '../Button/ButtonRoot';

export const PaginationStyles = styles;

export type PaginationProps = {
  /**
   * `true` always shows page number buttons, `false` always shows "1 of 12" text instead. Left unset, CSS
   * media queries show the buttons on wider screens and the text on narrow ones.
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
 * Previous and Next buttons with page numbers, for content split across pages. Controlled: the current
 * page comes from `current`.
 *
 * @example
 * <Pagination current={page} pages={12} onChange={setPage} />
 */
export const Pagination = ({ current = 1, pages, onChange, showPageButtons }: PaginationProps) => {
  const { items, showPrevious, showNext } = usePagination({ current, pages });

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
    <Box display="flex" flexDirection="row" justifyContent="spaceBetween">
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
      {/* Never show page label when `showPageButtons === true` */}
      {showPageButtons === false || showPageButtons === undefined ? (
        <Text className={styles.pages[showPageButtons === undefined ? 'uncontrolled' : 'controlled']}>
          {current} of {pages}
        </Text>
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
