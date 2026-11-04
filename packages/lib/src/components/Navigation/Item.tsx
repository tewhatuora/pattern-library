import {
  Fragment,
  MutableRefObject,
  PropsWithChildren,
  createElement,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';

import { ContrastVariant, LinkComponentType } from '@/src/types';

import useOutsideClick from '../../hooks/useOutsideClick';

import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Link } from './Link';
import { Menu } from './Menu';
import { ButtonRoot } from '../Button/ButtonRoot';

import * as styles from './Item.css';
import * as helpers from '../../css/helpers.css';
import { Breakpoint } from '../../css/breakpoints';

export const NavigationItemStyles = styles;

export type NavigationItemProps = {
  /** Destination of the link. Required by the type, but not used when the item opens a sub menu. */
  href: string;
  /** Marks the current page: bolds the label and sets `aria-current="page"` on the link. */
  selected?: boolean;
  label: string;
  /** Style as a link inside a sub menu or the footer: no chevron, no sub menu, no hover behaviour. */
  subNav?: boolean;
  /** Set by `Navigation.Root` for top-level items. Don't pass it. */
  variant?: ContrastVariant;
  /** Component to render instead of an `a`, e.g. a wrapper around a router `<Link>`. It receives `href`. */
  component?: LinkComponentType;
};

/**
 * An entry in the navigation. A link, or a button that opens a sub menu when it has a `Navigation.Menu`
 * as its child.
 */
export const Item = ({
  href,
  label,
  selected,
  subNav,
  variant,
  component,
  children,
}: PropsWithChildren<NavigationItemProps>) => {
  const breakpoint: Breakpoint | null = useContext(BreakpointContext);
  const ref = useRef(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [startTransitionOut, setStartTransitionOut] = useState(false);
  const [focusedItem, setFocusedItem] = useState<MutableRefObject<HTMLButtonElement | null>>(ref);
  const isDesktop = breakpoint && ['desktop', 'wide'].includes(breakpoint);

  /**
   * Set the sub menu to open/mounted state
   */
  const handleOpen = useCallback(() => {
    setSubMenuIsOpen(true);
  }, []);

  /**
   * Wait for onTransitionEnd to finish before
   * setting menu to closed/unmounted state
   */
  const handleStartClose = useCallback(() => {
    if (subMenuIsOpen) {
      if (!isDesktop) {
        focusedItem?.current?.focus();
      }

      setStartTransitionOut(true);
    }
  }, [subMenuIsOpen, focusedItem, isDesktop]);

  /**
   * Set sub menu to closed/unmounted state
   */
  const handleClose = useCallback(() => {
    setSubMenuIsOpen(false);
    setStartTransitionOut(false);
  }, []);

  /**
   * Only close the sub menu if it's open
   */
  const closeSubMenuIfOpen = useCallback(() => {
    if (subMenuIsOpen) {
      handleStartClose();
    }
  }, [subMenuIsOpen, handleStartClose]);

  /**
   * Handle closing the submenu
   * with space or enter key
   */
  const handleKeyboardClose = useCallback(
    (e: KeyboardEvent) => {
      if (['Space', 'Enter'].includes(e.code)) {
        closeSubMenuIfOpen();
      }
    },
    [closeSubMenuIfOpen],
  );

  /**
   * Handle setting focused button ref
   * so that it can be focused when closing
   * submenu on mobile
   */
  const handleFocus = useCallback(() => {
    if (!isDesktop) {
      setFocusedItem(ref);
    }
  }, [ref, isDesktop]);

  /**
   * Handle clicking outside the item and its submenu
   * to trigger it to close, if it's open
   */
  useOutsideClick(itemRef, closeSubMenuIfOpen);

  const className = subNav ? styles.subNavListItem : styles.navListItem;
  const baseProps = {
    className: clsx(styles.navListItemLink.default, {
      [styles.navListItemLink.subnav]: subNav,
      [styles.selected]: selected && !subNav,
    }),
    tabIndex: 0,
  };
  const buttonProps = {
    ...baseProps,
    'aria-expanded': subMenuIsOpen,
    ref: ref,
    onFocus: handleFocus,
    onPress: handleOpen,
    onKeyDown: handleKeyboardClose,
  };

  const linkProps = {
    ...baseProps,
    href,
    component,
    'aria-current': selected ? ('page' as const) : undefined,
  };

  const elements = [
    <Text key={label} size="small" weight={selected ? 'bold' : 'regular'}>
      {label}
    </Text>,
    !subNav && !!children && (
      <Fragment key="icons">
        <Icon className={helpers.upToTablet.flex} icon="chevron_right" variant="functionalIcons" />
        <Icon className={clsx(helpers.desktopUp.flex, styles.chevron)} icon="chevron_down" variant="functionalIcons" />
      </Fragment>
    ),
  ];

  // Create either a <button> or <a> tag element
  const el = children ? createElement(ButtonRoot, buttonProps, elements) : createElement(Link, linkProps, elements);

  let mouseEventHandlers = {};

  if (isDesktop && !subNav) {
    mouseEventHandlers = {
      onMouseEnter: handleOpen,
      onMouseLeave: handleStartClose,
    };
  }

  return (
    <li className={className} ref={itemRef} {...mouseEventHandlers}>
      {el}
      {subMenuIsOpen && !subNav && (
        <AllowedChildren
          errorMessage="Only `Navigation.Menu` components are allowed as children of `Navigation.Item`"
          propsForChild={() => ({
            label,
            variant,
            startTransitionOut,
            onStartClose: handleStartClose,
            onClose: handleClose,
          })}
          types={[Menu]}
        >
          {children}
        </AllowedChildren>
      )}
    </li>
  );
};

Item.displayName = 'Item';
