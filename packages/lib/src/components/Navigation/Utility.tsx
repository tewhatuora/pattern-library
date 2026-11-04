import { memo, useMemo } from 'react';
import { clsx } from 'clsx';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Link } from './Link';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import { ContrastVariant, LinkComponentType } from '../../types';

import * as styles from './Utility.css';

export type UtilityNavItemProps = {
  href: string;
  /** Icon shown after the label. */
  icon: IconType;
  /** Link text. Also used as a React key, so keep labels unique. */
  label: string;
  /** Component to render instead of an `a`, e.g. a wrapper around a router `<Link>`. It receives `href`. */
  component?: LinkComponentType;
};

export type UtilityProps = {
  /** Background the links sit on: `light` or `dark`. */
  variant: ContrastVariant;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Links to show. A maximum of two: more throws. */
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
    component,
  }: UtilityNavItemProps & {
    variant: ContrastVariant;
  }) => (
    <li>
      <Link className={styles.utilityLink[variant]} component={component} href={href}>
        <Text>{label}</Text> <Icon icon={icon} variant="functionalIcons" />
      </Link>
    </li>
  ),
);

/** Up to two links with icons, e.g. language and account. `Navigation.Root` shows these from `utilityNavItems`. */
export const Utility = memo(({ variant, className, items }: UtilityProps) => {
  const navItems = useMemo(() => {
    if (items?.length > 2) {
      throw new Error(`Navigation.Utility only accepts a maximum of 2 items. ${items.length} given`);
    }
    return items.map((item: UtilityNavItemProps) => (
      <UtilityNavItem
        component={item.component}
        href={item.href}
        icon={item.icon}
        key={item.label}
        label={item.label}
        variant={variant}
      />
    ));
  }, [variant, items]);

  return (
    <ErrorBoundary>
      <ul className={clsx(styles.utility, className)}>{navItems}</ul>
    </ErrorBoundary>
  );
});

Utility.displayName = 'Utility';
