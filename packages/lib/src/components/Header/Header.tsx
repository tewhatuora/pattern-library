import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { ButtonRoot, ButtonRootProps } from '../Button/ButtonRoot';
import { Stack, StackProps } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { ScreenReadersOnly } from '../ScreenReadersOnly/ScreenReadersOnly';

import TeWhatuOraLogoLight from '../../assets/te-whatu-ora-logo-light.svg?component';
import TeWhatuOraLogoDark from '../../assets/te-whatu-ora-logo-dark.svg?component';

import type { ContrastVariant } from '../../types';

import * as helpers from '../../css/helpers.css';
import * as styles from './Header.css';

type HeaderContextType = {
  /** Contrast variant for dark/light UI */
  variant: ContrastVariant;
  color: BoxProps['color'];
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

const useHeader = () => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('Header components must be used inside of a `Header`.');
  }

  return context;
};

/* -------------------------------------------------------------------------------------------------
 * Header
 * -----------------------------------------------------------------------------------------------*/

const HEADER_NAME = 'Header';

type HeaderProps = {
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
} & ComponentPropsWithoutRef<'header'>;

/**
 * Found at the top of all mobile and desktop pages
 *
 * Fixes on scroll at mobile
 * Breaks to mobile when Navigation does
 *
 * @constructor
 */
const Header = forwardRef<HTMLDivElement, HeaderProps>(({ variant = 'light', className, ...props }, ref) => {
  /**
   * Light/dark color
   */
  const color = useMemo(() => {
    return variant === 'light' ? 'primary100' : 'primary0';
  }, [variant]);

  return (
    <HeaderContext.Provider value={{ variant, color }}>
      <header className={clsx(styles.wrapper, className)} {...props} ref={ref} />
    </HeaderContext.Provider>
  );
});

Header.displayName = HEADER_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderMain
 * -----------------------------------------------------------------------------------------------*/

const HEADER_MAIN_NAME = 'HeaderMain';

type HeaderMainProps = ComponentPropsWithoutRef<'div'>;

const HeaderMain = forwardRef<HTMLDivElement, HeaderMainProps>(({ className, ...props }, ref) => {
  const { variant } = useHeader();

  return <div className={clsx(styles.header[variant], className)} ref={ref} {...props} />;
});

HeaderMain.displayName = HEADER_MAIN_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderTeWhatuOraLogo
 * -----------------------------------------------------------------------------------------------*/

const HEADER_TE_WHATU_ORA_LOGO_NAME = 'HeaderTeWhatuOraLogo';

type HeaderTeWhatuOraLogoProps = ComponentPropsWithoutRef<'a'>;

const HeaderTeWhatuOraLogo = forwardRef<HTMLAnchorElement, HeaderTeWhatuOraLogoProps>(
  ({ className, ...props }, ref) => {
    const { variant } = useHeader();

    const LogoEl = variant === 'light' ? (TeWhatuOraLogoDark as ElementType) : (TeWhatuOraLogoLight as ElementType);

    return (
      <a className={clsx(styles.logo, className)} ref={ref} {...props}>
        <ScreenReadersOnly>Ministry of Health | Manatū Hauora</ScreenReadersOnly>
        <LogoEl />
      </a>
    );
  },
);

HeaderTeWhatuOraLogo.displayName = HEADER_TE_WHATU_ORA_LOGO_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderLeft
 * -----------------------------------------------------------------------------------------------*/

const HEADER_LEFT_NAME = 'HeaderLeft';

type HeaderLeftProps = PropsWithChildren<Partial<StackProps>> & {
  hasLeftMargin?: boolean;
};

const HeaderLeft = ({ className, hasLeftMargin = true, ...props }: HeaderLeftProps) => {
  return (
    <Stack
      alignItems="center"
      className={clsx(className, { [styles.headerLeftMargin]: hasLeftMargin })}
      horizontal
      space="small"
      {...props}
    />
  );
};

HeaderLeft.displayName = HEADER_LEFT_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderRight
 * -----------------------------------------------------------------------------------------------*/

const HEADER_RIGHT_NAME = 'HeaderRight';

type HeaderRightProps = PropsWithChildren<Partial<StackProps>> & {
  hasRightMargin?: boolean;
};

const HeaderRight = ({ className, hasRightMargin = true, ...props }: HeaderRightProps) => {
  const { color } = useHeader();

  return (
    <Stack
      alignItems="center"
      className={clsx(className, { [styles.headerRightMargin]: hasRightMargin })}
      color={color}
      display="flex"
      horizontal
      marginRight={hasRightMargin ? { mobile: 'small', tablet: 'medium' } : undefined}
      space="small"
      {...props}
    />
  );
};

HeaderRight.displayName = HEADER_RIGHT_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderLogo
 * -----------------------------------------------------------------------------------------------*/

const HEADER_LOGO_NAME = 'HeaderLogo';

type HeaderLogoProps = BoxProps;

const HeaderLogo = forwardRef<HTMLElement, HeaderLogoProps>((props, ref) => {
  const { color } = useHeader();

  return <Box alignItems="flexStart" color={color} display="flex" flexDirection="column" ref={ref} {...props} />;
});

HeaderLogo.displayName = HEADER_LOGO_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderMenuButton
 * -----------------------------------------------------------------------------------------------*/

const HEADER_MENU_BUTTON_NAME = 'HeaderMenuButton';

type HeaderMenuButtonProps = {
  open?: boolean;
  onToggle?: () => void;
} & ButtonRootProps;

/**
 * Menu open/close button
 * @param open
 * @param color
 * @param onToggle
 * @constructor
 */
const HeaderMenuButton = ({ open, onToggle, className, ...props }: HeaderMenuButtonProps) => {
  const { color } = useHeader();

  return (
    <ButtonRoot
      className={clsx(helpers.upToTablet.flex, styles.mobileMenuButton, className)}
      onPress={onToggle}
      {...props}
    >
      <Text className={styles.mobileMenuButtonText} color={color}>
        {open ? 'Close' : 'Menu'}
      </Text>
      <Icon color={color} icon={open ? 'cross' : 'menu'} variant="decorativeIcons" />
    </ButtonRoot>
  );
};

HeaderMenuButton.displayName = HEADER_MENU_BUTTON_NAME;

/* -----------------------------------------------------------------------------------------------*/

const Root = Header;
const Main = HeaderMain;
const Left = HeaderLeft;
const Right = HeaderRight;
const Logo = HeaderLogo;
const TeWhatuOraLogo = HeaderTeWhatuOraLogo;
const MenuButton = HeaderMenuButton;

export {
  useHeader,
  Header,
  HeaderMain,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  HeaderTeWhatuOraLogo,
  HeaderMenuButton,
  //
  Root,
  Main,
  Left,
  Right,
  Logo,
  TeWhatuOraLogo,
  MenuButton,
};
export type {
  HeaderProps,
  HeaderMainProps,
  HeaderLeftProps,
  HeaderRightProps,
  HeaderLogoProps,
  HeaderTeWhatuOraLogoProps,
  HeaderMenuButtonProps,
};
