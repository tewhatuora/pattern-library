import { PropsWithChildren, useEffect, useRef } from 'react';
import clsx from 'clsx';

import * as styles from './Breadcrumbs.css';

type CrumbProps = {
  index: number;
  shouldCheckVisibility?: boolean;
  hidden?: boolean;
  onToggleVisibility?: (index: number, shouldHide: boolean) => void;
};

/**
 * Crumb
 * Individual breadcrumb item
 * @param index
 * @param shouldCheckVisibility
 * @param hidden
 * @param onToggleVisibility
 * @param children
 * @constructor
 */
export const Crumb = ({
  index,
  shouldCheckVisibility,
  hidden,
  onToggleVisibility,
  children,
}: PropsWithChildren<CrumbProps>) => {
  const crumbRef = useRef<HTMLLIElement>(null);
  const crumbTextRef = useRef<HTMLSpanElement>(null);

  /**
   * Check if the breadcrumb's text is larger than it
   * has space for. If it is, the breadcrumb will be
   * hidden. This happens for the second, until the
   * second last items.
   * The first and last breadcrumb are always displayed.
   */
  useEffect(() => {
    if (crumbRef.current && crumbTextRef.current && shouldCheckVisibility) {
      const parent = crumbRef.current;
      const el = crumbTextRef.current;

      const shouldHide = el.getBoundingClientRect().width > parent.getBoundingClientRect().width;

      if (typeof onToggleVisibility === 'function') {
        onToggleVisibility(index, shouldHide);
      }
    }
    // NOTE: disabling this rule as we only want the effect to run when `shouldTestLayout` changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCheckVisibility, hidden]);

  return (
    <li
      className={clsx(styles.crumb, {
        [styles.hidden]: hidden,
      })}
      ref={crumbRef}
    >
      <span ref={crumbTextRef}>{children}</span>
    </li>
  );
};

Crumb.displayName = 'Crumb';
