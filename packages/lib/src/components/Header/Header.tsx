import { FC, ReactNode, useMemo } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';
import { ButtonRoot } from '../Button/ButtonRoot';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { InputSearch } from '../InputSearch/InputSearch';
import { UtilityNavItemProps } from '../Navigation/Utility';
import { Navigation } from '../Navigation/Navigation';
import { ScreenReadersOnly } from '../ScreenReadersOnly/ScreenReadersOnly';

import Logo from '../../assets/logo-moh.svg?component';

import { ContrastVariant } from '../../types';

import * as helpers from '../../css/helpers.css';
import * as styles from './Header.css';

export const HeaderStyles = styles;

export type HeaderProps = {
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Show a beta badge with logo component */
  beta?: boolean;
  /** Show the header with an InputSearch */
  withSearch?: boolean;
  /** Array of Utility navigation items, with href, icon, label, and an optional custom link component e.g. react-router-dom Link */
  utilityNavItems?: UtilityNavItemProps[];
  /** Search form action */
  searchFormAction: string;
  /** Search form method */
  searchFormMethod: 'POST' | 'GET';
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
  /** Custom component for your logo */
  logoComponent: ReactNode;
  /** Optionally render link for main logo as a custom component, e.g. react-router-dom Link */
  logoLinkComponent?: FC<any>;
  /** href/path for main logo */
  logoLinkHref: string;
  /** Open/active state for mobile navigation */
  navigationOpen?: boolean;
  /** Function to toggle the open/active state for mobile navigation */
  onToggleNavigation?: () => void;
};

type MenuButtonProps = {
  open?: boolean;
  color: BoxProps['color'];
  onToggle?: () => void;
};

/**
 * Menu open/close button
 * @param open
 * @param color
 * @param onToggle
 * @constructor
 */
const MenuButton = ({ open, color, onToggle }: MenuButtonProps) => {
  return (
    <ButtonRoot className={clsx(helpers.upToTablet.flex, styles.mobileMenuButton)} onPress={onToggle}>
      <Text color={color}>{open ? 'Close' : 'Menu'}</Text>
      <Icon color={color} icon={open ? 'cross' : 'menu'} variant="decorativeIcons" />
    </ButtonRoot>
  );
};

/**
 * Found at the top of all mobile and desktop pages
 *
 * Fixes on scroll at mobile
 * Breaks to mobile when Navigation does
 *
 * @constructor
 */
export const Header = ({
  variant = 'light',
  withSearch,
  beta,
  searchFormAction,
  searchFormMethod = 'GET',
  logoComponent,
  logoLinkComponent: LogoLinkComponent,
  logoLinkHref = '/',
  utilityNavItems,
  navigationOpen,
  onToggleNavigation,
}: HeaderProps) => {
  /**
   * Light/dark color
   */
  const color = useMemo(() => {
    return variant === 'light' ? 'primary100' : 'primary0';
  }, [variant]);

  /**
   * Utility navigation items
   */
  const renderUtilityNav = useMemo(() => {
    if (!utilityNavItems?.length) {
      return null;
    }
    return <Navigation.Utility items={utilityNavItems} variant={variant} />;
  }, [utilityNavItems, variant]);

  const renderLogo = useMemo(() => {
    if (LogoLinkComponent) {
      return (
        <LogoLinkComponent className={styles.logo} href={logoLinkHref} to={logoLinkHref}>
          <ScreenReadersOnly>Ministry of Health | Manatū Hauora</ScreenReadersOnly>
          <Logo />
        </LogoLinkComponent>
      );
    }

    return (
      <a className={styles.logo} href={logoLinkHref}>
        <ScreenReadersOnly>Ministry of Health | Manatū Hauora</ScreenReadersOnly>
        <Logo />
      </a>
    );
  }, [LogoLinkComponent, logoLinkHref]);

  return (
    <header className={styles.header[variant]}>
      <Stack alignItems="center" horizontal space="small">
        {!!logoComponent && (
          <Box color={color} display="flex" flexDirection="column">
            {logoComponent}
            {beta && (
              <span>
                <Badge variant="info">Beta</Badge>
              </span>
            )}
          </Box>
        )}
        <Box color={color}>{renderLogo}</Box>
      </Stack>
      <Stack className={helpers.desktopUp.flex} color={color} horizontal space="small">
        {renderUtilityNav}
        {withSearch && (
          <form action={searchFormAction} className={styles.searchForm} method={searchFormMethod}>
            <InputSearch id="search" name="search" placeholder="Search" />
          </form>
        )}
      </Stack>
      <MenuButton color={color} open={navigationOpen} onToggle={onToggleNavigation} />
    </header>
  );
};

Header.displayName = 'Header';
