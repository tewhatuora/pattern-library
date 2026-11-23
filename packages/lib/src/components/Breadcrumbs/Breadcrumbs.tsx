import {
  Children,
  PropsWithChildren,
  ReactNode,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import { useLayoutEffect, useResizeObserver } from '@react-aria/utils';

import { debounce } from '../../utils/debounce';

import { Box } from '../Box/Box';
import { Crumb } from './Crumb';
import { Separator } from './Separator';
import { Ellipsis } from './Ellipsis';

import * as styles from './Breadcrumbs.css';
import * as stylesAnchorLink from '../AnchorLink/AnchorLink.css';
import * as stylesText from '../Text/Text.css';

export const BreadcrumbsStyles = styles;

export type BreadcrumbsProps = {
  /** Adds a background colour and extra padding. */
  withBackground?: boolean;
  /** Bolds the link text only. */
  boldLinks?: boolean;
  /** Bolds all text, including the current page. */
  boldText?: boolean;
  /** Uses the normal link colour for visited links. */
  noVisited?: boolean;
};

/**
 * Shows where the current page sits in the site. Use it on every page deeper than the homepage or a landing page.
 * Each child is one crumb, in order from the homepage to the current page. The last child is marked `aria-current="page"`
 * and is usually plain text rather than a link.
 * The first and last crumbs always show; middle crumbs that do not fit are hidden and replaced by an ellipsis.
 *
 * @example
 * <Breadcrumbs>
 *   <AnchorLink to="/">Home</AnchorLink>
 *   <AnchorLink to="/services">Services</AnchorLink>
 *   <span>Immunisation</span>
 * </Breadcrumbs>
 */
export const Breadcrumbs = memo(
  ({ withBackground, boldLinks, boldText, noVisited, children }: PropsWithChildren<BreadcrumbsProps>) => {
    const [breadcrumbIsHidden, setBreadcrumbIsHidden] = useState<boolean[]>([]);
    const [indexToCheck, setIndexToCheck] = useState<number>(0);
    const navRef = useRef<HTMLElement>(null);
    const navWidth = useRef<number>(undefined);
    const listRef = useRef<HTMLElement>(null);
    const listText = useRef<string>(undefined);

    /**
     * Show every breadcrumb again so they are re-measured
     */
    const resetVisibility = useMemo(
      () =>
        debounce(() => {
          setBreadcrumbIsHidden([]);
          setIndexToCheck(0);
        }, 500),
      [],
    );

    useEffect(() => resetVisibility.cancel, [resetVisibility]);

    // Watch the container rather than the window, so layout changes that aren't a window resize are caught.
    // Only the width matters: hiding breadcrumbs can change the height, which would otherwise loop.
    useResizeObserver({
      ref: navRef,
      onResize: () => {
        const width = navRef.current?.getBoundingClientRect().width;

        if (navWidth.current !== undefined && width !== navWidth.current) {
          resetVisibility();
        }

        navWidth.current = width;
      },
    });

    // Re-measure when the breadcrumbs themselves change, e.g. after client-side navigation. Compares the text
    // because `children` is new on every render, and hiding a crumb doesn't change the text (it stays in the DOM).
    useLayoutEffect(() => {
      const text = listRef.current?.textContent ?? '';

      if (listText.current !== undefined && text !== listText.current) {
        resetVisibility.cancel();
        setBreadcrumbIsHidden([]);
        setIndexToCheck(0);
      }

      listText.current = text;
    }, [children, resetVisibility]);

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
        count: crumbs.length,
        first,
        middle,
        last,
      };
    }, [indexToCheck, breadcrumbIsHidden, toggleBreadcrumbVisibility, children]);

    return (
      <Box aria-label="Breadcrumb" as="nav" className={styles.breadcrumbs({ background: withBackground })} ref={navRef}>
        <Box
          as="ol"
          className={clsx(
            styles.list,
            { [stylesText.boldText]: boldText },
            { [stylesAnchorLink.noVisited]: noVisited },
            { [stylesAnchorLink.boldLinks]: boldLinks },
          )}
          display="flex"
          flexDirection="row"
          ref={listRef}
        >
          {/* A single breadcrumb is both first and last, so only render it once, as the current page */}
          {breadcrumbs.count > 1 && (
            <>
              {breadcrumbs.first}
              <Separator />
              <Ellipsis hidden={!breadcrumbIsHidden[0]} />
              <Separator hidden={!breadcrumbIsHidden[0]} />
              {breadcrumbs.middle}
            </>
          )}
          {breadcrumbs.last}
        </Box>
      </Box>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
