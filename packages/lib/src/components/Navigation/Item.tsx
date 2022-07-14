import { FC, PropsWithChildren, createElement, useCallback, useContext, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from 'rooks';

import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Link } from './Link';
import { Menu } from './Menu';
import { ButtonRoot } from '../Button/Button';

import * as styles from './Item.css';
import * as navStyles from './Navigation.css';

export const NavigationItemStyles = styles;

export type NavigationItemProps = {
  href: string;
  selected?: boolean;
  label: string;
  subNav?: boolean;
  variant?: 'light' | 'dark';
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
  const breakpoint = useContext(BreakpointContext);
  const ref = useRef(null);
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setSubMenuIsOpen(!subMenuIsOpen);
  }, [subMenuIsOpen]);

  const handleMouseEnter = useCallback(() => {
    setSubMenuIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSubMenuIsOpen(false);
  }, []);

  useOutsideClick(ref, () => {
    setSubMenuIsOpen(false);
  });

  const className = subNav ? styles.subNavListItem : styles.navListItem;
  const baseProps = {
    className: clsx({
      [styles.navListItemLink.default]: true,
      [styles.navListItemLink.subnav]: subNav,
    }),
    tabIndex: 0,
  };
  const buttonProps = {
    ...baseProps,
    as: 'button',
    ref: ref,
    onPress: handleToggle,
  };

  const linkProps = {
    ...baseProps,
    href,
    component,
  };

  const elements = [
    <Text key={label} weight={selected ? 'bold' : 'regular'}>
      {label}
    </Text>,
    !subNav && (
      <>
        <Icon className={navStyles.mobileOnly} icon="chevron_right" variant="functionalIcons" />
        {children && (
          <Icon className={clsx(navStyles.desktopOnly, styles.chevron)} icon="chevron_down" variant="functionalIcons" />
        )}
      </>
    ),
  ];

  // Create either a <button> or <a> tag element
  const el = children ? createElement(ButtonRoot, buttonProps, elements) : createElement(Link, linkProps, elements);

  let mouseEventHandlers = {};

  if (breakpoint === 'desktop' || breakpoint === 'wide') {
    mouseEventHandlers = {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    };
  }

  return (
    <li className={className} {...mouseEventHandlers}>
      {el}
      <AllowedChildren
        errorMessage="Only `Navigation.Menu` components are allowed as children of `Navigation.Item`"
        propsForChild={() => ({
          label,
          variant,
          show: subMenuIsOpen,
          onClose: handleToggle,
        })}
        types={[Menu]}
      >
        {children}
      </AllowedChildren>
    </li>
  );
};

Item.displayName = 'Navigation.Item';
