import { ChangeEvent, memo, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import usePagination from '../../hooks/usePagination';

import * as styles from './Pagination.css';
import { ButtonRoot } from '../Button/ButtonRoot';
import { Dropdown, DropdownProps, InputOption } from '../InputDropdown/InputDropdown';

export const PaginationStyles = styles;

export type PaginationProps = {
  /** Determines whether to show the pagination buttons. Overrides CSS media queries. */
  showPageButtons?: boolean;
  /** Total number of pages */
  pages: number;
  /** Current page number */
  current: number;
  /** Function to call when page is changed */
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
      <ButtonRoot aria-label={`Go to page ${page}`} className={className} onPress={onPress}>
        {page}
      </ButtonRoot>
    </li>
  );
});

type PaginationDropdownProps = Omit<DropdownProps, 'options'> & {
  pages: number;
};

const PaginationDropdown = ({ pages, ...dropdownProps }: PaginationDropdownProps) => {
  const options: InputOption[] = useMemo(
    () =>
      Array.from({ length: pages }).map((_, page) => ({
        value: page + 1,
        label: String(page + 1),
        'aria-label': `page ${page + 1}`,
      })),
    [pages],
  );

  return <Dropdown fieldProps={{ className: styles.paginationDropdown }} options={options} {...dropdownProps} />;
};

/**
 * Navigate between divided content on separate pages.
 * @param props
 * @constructor
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

  const handleOnDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPage = Number(event.target.value);

    if (!isNaN(newPage)) {
      onChange?.(newPage);
    }
  };

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
          <Button
            aria-label="Go to previous page"
            className={styles.button.primary}
            variant="secondary"
            onPress={handlePrevious}
          >
            Prev
          </Button>
        )}
      </Box>
      {/* Never show page label when `showPageButtons === true` */}
      {showPageButtons === false || showPageButtons === undefined ? (
        <PaginationDropdown pages={pages} value={current} onChange={handleOnDropdownChange} />
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
