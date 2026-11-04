import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, createContext, forwardRef, useContext } from 'react';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box/Box';
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
  /**
   * Colour scheme: `'dark'` for a dark header with light text. Also sets the logo colour.
   * @default 'light'
   */
  variant?: ContrastVariant;
} & ComponentPropsWithoutRef<'header'>;

/**
 * Page header found at the top of all mobile and desktop pages. Fixes on scroll at mobile
 * and breaks to mobile when Navigation does.
 * `variant` is shared with the parts through context, so the logo and menu button follow it.
 * The parts throw if used outside a `Header.Root`.
 *
 * @example
 * <Header.Root variant="light">
 *   <Header.Main>
 *     <Header.Left>
 *       <Header.TeWhatuOraLogo href="/" />
 *     </Header.Left>
 *     <Header.Right>
 *       <Header.MenuButton open={open} variant="light" onToggle={() => setOpen(!open)} />
 *     </Header.Right>
 *   </Header.Main>
 * </Header.Root>
 */
const Header = forwardRef<HTMLDivElement, HeaderProps>(({ variant = 'light', className, ...props }, ref) => {
  return (
    <HeaderContext.Provider value={{ variant }}>
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

/** Coloured bar that holds the header content. */
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

/** Te Whatu Ora logo link, in the colour for the Header's `variant`. Pass `href` for where it links to. */
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
  /**
   * Adds the standard left margin. Set to false when the content should touch the edge.
   * @default true
   */
  hasLeftMargin?: boolean;
};

/** Left-aligned group of items, laid out in a row. */
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
  /**
   * Adds the standard right margin. Set to false when the content should touch the edge.
   * @default true
   */
  hasRightMargin?: boolean;
};

/**
 * Right-aligned group of items, laid out in a row. Hidden below the desktop breakpoint, where `Header.MenuButton`
 * shows instead and these items belong in the navigation panel.
 */
const HeaderRight = ({ className, hasRightMargin = true, ...props }: HeaderRightProps) => {
  return (
    // Hidden by a wrapper because Stack always sets `display: flex`, which a responsive `display` can't override
    <Box display={{ mobile: 'none', desktop: 'flex' }}>
      <Stack
        alignItems="center"
        className={clsx(className, { [styles.headerRightMargin]: hasRightMargin })}
        display="flex"
        horizontal
        marginRight={hasRightMargin ? { mobile: 'small', tablet: 'medium' } : undefined}
        space="small"
        {...props}
      />
    </Box>
  );
};

HeaderRight.displayName = HEADER_RIGHT_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderLogo
 * -----------------------------------------------------------------------------------------------*/

const HEADER_LOGO_NAME = 'HeaderLogo';

type HeaderLogoProps = BoxProps;

/** Stacks logo content vertically, e.g. a logo above a site name. */
const HeaderLogo = forwardRef<HTMLElement, HeaderLogoProps>((props, ref) => {
  return <Box alignItems="flexStart" display="flex" flexDirection="column" ref={ref} {...props} />;
});

HeaderLogo.displayName = HEADER_LOGO_NAME;

/* -------------------------------------------------------------------------------------------------
 * HeaderMenuButton
 * -----------------------------------------------------------------------------------------------*/

const HEADER_MENU_BUTTON_NAME = 'HeaderMenuButton';

type HeaderMenuButtonProps = {
  /** Whether the menu is open. Switches the icon and label between "Open menu" and "Close menu", and sets `aria-expanded`. */
  open?: boolean;
  /** Called when the button is pressed. The consumer owns the open state. */
  onToggle?: () => void;
  /** Colour scheme of the button. Should match the Header's `variant`; it is not read from context. */
  variant: ContrastVariant;
} & Omit<ButtonRootProps, 'variant'>;

/**
 * Menu open/close button. Only shown up to the tablet breakpoint.
 */
const HeaderMenuButton = ({ open, onToggle, className, variant, ...props }: HeaderMenuButtonProps) => {
  return (
    <ButtonRoot
      // The button only shows an icon, so give it a name; consumers can still pass their own aria-label
      aria-expanded={!!open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className={clsx(helpers.upToTablet.flex, styles.mobileMenuButton, className, styles.menuButtonVariant[variant])}
      onPress={onToggle}
      {...props}
    >
      <Icon className={styles.menuButtonIcon[variant]} icon={open ? 'cross' : 'menu'} variant="decorativeIcons" />
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
