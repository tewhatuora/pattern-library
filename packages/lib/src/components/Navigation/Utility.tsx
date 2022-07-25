import { memo, useMemo } from 'react';
import clsx from 'clsx';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Link } from './Link';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Utility.css';

export type UtilityNavItemProps = {
  href: string;
  icon: IconType;
  label: string;
};

export type UtilityProps = {
  variant: 'light' | 'dark';
  className?: string;
  items: UtilityNavItemProps[];
};

/**
 * Utility navigation item, displayed
 * as a link with a label and an icon.
 */
const UtilityNavItem = memo(
  ({
    variant,
    href,
    icon,
    label,
  }: UtilityNavItemProps & {
    variant: 'light' | 'dark';
  }) => (
    <li>
      <Link className={styles.utilityLink[variant]} href={href}>
        <Icon icon={icon} variant="functionalIcons" /> <Text>{label}</Text>
      </Link>
    </li>
  ),
);

/**
 * Utility navigation
 * @constructor
 */
export const Utility = memo(({ variant, className, items }: UtilityProps) => {
  const navItems = useMemo(() => {
    if (items?.length > 2) {
      throw new Error(`Navigation.Utility only accepts a maximum of 2 items. ${items.length} given`);
    }
    return items.map((item: UtilityNavItemProps) => (
      <UtilityNavItem href={item.href} icon={item.icon} key={item.label} label={item.label} variant={variant} />
    ));
  }, [variant, items]);

  return (
    <ErrorBoundary>
      <ul className={clsx(styles.utility, className)}>{navItems}</ul>
    </ErrorBoundary>
  );
});

Utility.displayName = 'Navigation.Utility';
