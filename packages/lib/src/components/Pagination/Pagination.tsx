import { memo, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

import usePagination from '../../hooks/usePagination';

import * as styles from './Pagination.css';

export const PaginationStyles = styles;

export type PaginationProps = {
  pages: number;
  current: number;
  onChange?: (page: number) => void;
};

type PaginationPageProps = {
  page: number;
  isCurrent: boolean;
  onPress?: (page: number) => void;
};

const PaginationPage = memo(({ page, isCurrent, onPress }: PaginationPageProps) => {
  const className = useMemo(() => {
    return isCurrent ? styles.button.current : styles.button.page;
  }, [isCurrent]);

  return (
    <li className={styles.page}>
      <Button aria-label={`Go to page ${page}`} className={className} onPress={onPress}>
        {page}
      </Button>
    </li>
  );
});

/**
 * Navigate between divided content on separate pages.
 * @param props
 * @constructor
 */
export const Pagination = ({ current = 1, pages, onChange }: PaginationProps) => {
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
    /**
     * Handle clicking on a page number button
     * @param {number} page The page number clicked on
     */
    const handlePage = (page: number) => () => {
      onChange?.(page);
    };

    return items.map((item) => {
      if (typeof item === 'number') {
        return (
          <PaginationPage isCurrent={item === current} key={`page-${item}`} page={item} onPress={handlePage(item)} />
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
          <Button aria-label="Go to previous page" className={styles.button.primary} onPress={handlePrevious}>
            Previous
          </Button>
        )}
      </Box>
      <Text className={styles.pages}>
        {current} of {pages}
      </Text>
      <Box as="ul" className={styles.pageLinks}>
        {renderPageButtons}
      </Box>
      <Box className={styles.buttonContainer}>
        {showNext && (
          <Button aria-label="Go to next page" className={styles.button.primary} onPress={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

Pagination.displayName = 'Pagination';
