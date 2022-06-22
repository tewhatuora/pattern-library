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

import { debounce } from 'lodash';

import { Box } from '../Box/Box';
import { Crumb } from './Crumb';
import { Separator } from './Separator';
import { Ellipsis } from './Ellipsis';

import * as styles from './Breadcrumbs.css';

export const BreadcrumbsStyles = styles;

export type BreadcrumbsProps = {
  withBackground?: boolean;
};

/**
 * Breadcrumb navigation is a way for users to
 * visualise their location on a website.
 * Use Breadcrumbs on all pages deeper than
 * the homepage or landing pages.
 * @param props
 * @constructor
 */
export const Breadcrumbs = memo(({ withBackground, children }: PropsWithChildren<BreadcrumbsProps>) => {
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
    const last = <Crumb index={lastIndex}>{crumbs[lastIndex]}</Crumb>;

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
        list.push(<Separator hidden={breadcrumbIsHidden[index]} key={`separator-${index * 10}`} />);
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
    <Box as="nav" className={withBackground ? styles.breadcrumbs.withBackground : styles.breadcrumbs}>
      <Box as="ol" className={styles.list} display="flex" flexDirection="row">
        {breadcrumbs.first}
        <Separator />
        <Ellipsis hidden={!breadcrumbIsHidden[0]} />
        <Separator hidden={!breadcrumbIsHidden[0]} />
        {breadcrumbs.middle}
        {breadcrumbs.last}
      </Box>
    </Box>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
