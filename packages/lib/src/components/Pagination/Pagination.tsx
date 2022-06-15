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
    if (typeof onChange === 'function' && current >= 2) {
      onChange(current - 1);
    }
  }, [current, onChange]);

  /**
   * Handle clicking on the 'Next' button
   */
  const handleNext = useCallback(() => {
    if (typeof onChange === 'function' && current <= pages - 1) {
      onChange(current + 1);
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
      if (typeof onChange === 'function') {
        onChange(page);
      }
    };

    return items.map((item) => {
      if (typeof item === 'number') {
        return (
          <PaginationPage isCurrent={item === current} key={`page-${item}`} page={item} onPress={handlePage(item)} />
        );
      } else {
        return (
          <li className={styles.page} key={item}>
            <Box
              alignItems="center"
              className={styles.pageItem}
              display="flex"
              flexGrow={1}
              justifyContent="center"
              textAlign="center"
            >
              <span className={styles.ellipsis} />
            </Box>
          </li>
        );
      }
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
      <Box alignItems="center" as="ul" className={styles.pageLinks} flexDirection="row">
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
