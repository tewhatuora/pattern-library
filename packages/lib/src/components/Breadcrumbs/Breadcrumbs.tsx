import {
  Children,
  PropsWithChildren,
  ReactNode,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';

import { debounce } from 'lodash';

import { Box } from '../Box/Box';
import { Crumb } from './Crumb';
import { Separator } from './Separator';
import { Ellipsis } from './Ellipsis';

import * as styles from './Breadcrumbs.css';
import * as stylesAnchorLink from '../AnchorLink/AnchorLink.css';
import * as stylesText from '../Text/Text.css';

export const BreadcrumbsStyles = styles;

export type BreadcrumbsProps = {
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
export const Breadcrumbs = memo(
  ({ withBackground, boldLinks, boldText, noVisited, children }: PropsWithChildren<BreadcrumbsProps>) => {
    const [breadcrumbIsHidden, setBreadcrumbIsHidden] = useState<boolean[]>([]);
    const [indexToCheck, setIndexToCheck] = useState<number>(0);

    useEffect(() => {
      const resizeHandler = debounce(() => {
        setBreadcrumbIsHidden([]);
        setIndexToCheck(0);
      }, 500);

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }, []);

    /**
     * Set a breadcrumb to be invisible if there
     * is not enough space when the first and
     * last breadcrumbs are visible
     */
    const toggleBreadcrumbVisibility = useCallback(
      (index: number, shouldHide: boolean) => {
        const newState = breadcrumbIsHidden.slice();
        newState[index] = shouldHide;

        setBreadcrumbIsHidden(newState);

        if (shouldHide) {
          setIndexToCheck((start) => start + 1);
        }
      },
      [breadcrumbIsHidden],
    );

    /**
     * Render breadcrumb items and separators
     */
    const breadcrumbs = useMemo(() => {
      const crumbs = Children.toArray(children);
      const lastIndex = crumbs.length - 1;

      const first = <Crumb index={0}>{crumbs[0]}</Crumb>;
      const last = (
        <Crumb aria-current="page" index={lastIndex}>
          {crumbs[lastIndex]}
        </Crumb>
      );

      const middle = crumbs.slice(1, lastIndex).reduce((list: ReactNode[], current: ReactNode, index: number) => {
        if (isValidElement(current)) {
          list.push(
            <Crumb
              hidden={breadcrumbIsHidden[index]}
              index={index}
              // NOTE: Disabling this rule because indexes are never changed/sorted
              // eslint-disable-next-line react/no-array-index-key
              key={`breadcrumb-${index}`}
              shouldCheckVisibility={index === indexToCheck}
              onToggleVisibility={toggleBreadcrumbVisibility}
            >
              {current}
            </Crumb>,
          );

          // Separator after each breadcrumb
          // NOTE: Disabling this rule because indexes are never changed/sorted
          // eslint-disable-next-line react/no-array-index-key
          list.push(<Separator hidden={breadcrumbIsHidden[index]} key={`separator-${index}`} />);
        }

        return list;
      }, []);

      return {
        first,
        middle,
        last,
      };
    }, [indexToCheck, breadcrumbIsHidden, toggleBreadcrumbVisibility, children]);

    return (
      <Box
        aria-label="Breadcrumb"
        as="nav"
        className={withBackground ? styles.breadcrumbs.withBackground : styles.breadcrumbs}
      >
        <Box
          as="ol"
          className={clsx(
            styles.list,
            { [stylesAnchorLink.boldText]: boldText },
            { [stylesText.boldText]: boldText },
            { [stylesAnchorLink.noVisited]: noVisited },
            { [stylesAnchorLink.boldLinks]: boldLinks },
          )}
          display="flex"
          flexDirection="row"
        >
          {breadcrumbs.first}
          <Separator />
          <Ellipsis hidden={!breadcrumbIsHidden[0]} />
          <Separator hidden={!breadcrumbIsHidden[0]} />
          {breadcrumbs.middle}
          {breadcrumbs.last}
        </Box>
      </Box>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
