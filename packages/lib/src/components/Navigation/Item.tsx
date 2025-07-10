import {
  FC,
  Fragment,
  type KeyboardEventHandler,
  MutableRefObject,
  PropsWithChildren,
  type Ref,
  createElement,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { useOutsideClick } from 'rooks';

import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Link } from './Link';
import { Menu } from './Menu';
import { ButtonRoot, ButtonRootProps } from '../Button/ButtonRoot';

import { ContrastVariant } from '../../types';

import * as styles from './Item.css';
import * as helpers from '../../css/helpers.css';
import { Breakpoint } from '../../css/breakpoints';

export const NavigationItemStyles = styles;

export type NavigationItemProps = {
  /** URL/path to link to */
  href: string;
  /** Selected/current/active state */
  selected?: boolean;
  /** Navigation item label */
  label: string;
  /** If there is a subnavigation  */
  subNav?: boolean;
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** A React component to render, e. react-router-dom `<Link />` */
  component?: FC<any>;
};

/**
 * Navigation item, either a <button> or <a> depending
 * on whether the component has children or not
 * @constructor
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
  const handleKeyboardClose: KeyboardEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
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
   * Handle clicking outside submenu to trigger
   * it to close, if it's open
   */
  useOutsideClick(ref, closeSubMenuIfOpen);

  const className = subNav ? styles.subNavListItem : styles.navListItem;
  const baseProps = {
    className: clsx(styles.navListItemLink.default, {
      [styles.navListItemLink.subnav]: subNav,
    }),
    tabIndex: 0,
  };
  const buttonProps: ButtonRootProps & { ref: Ref<HTMLButtonElement> | null } = {
    ...baseProps,
    ref: ref,
    onFocus: handleFocus,
    onClick: handleOpen,
    onKeyDown: handleKeyboardClose,
  };

  const linkProps = {
    ...baseProps,
    href,
    component,
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
    <li className={className} {...mouseEventHandlers}>
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
