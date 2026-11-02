import { Children, PropsWithChildren, ReactElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { FocusTrap } from 'focus-trap-react';
import { clsx } from 'clsx';

import { debounce } from '../../utils/debounce';

import assert from '../../utils/assert';

import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { useAllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { Row } from '../Columns/Row';
import { Column } from '../Columns/Column';
import { MenuList } from './MenuList';
import { ButtonRoot } from '../Button/ButtonRoot';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { NavigationContext } from './Root';
import { Breakpoint } from '../../css/breakpoints';

import { ContrastVariant } from '../../types';

import * as styles from './Menu.css';
import * as navStyles from './Navigation.css';

export const NavigationMenuStyles = styles;

export type NavigationMenuProps = {
  /** Show a small single-column menu instead of the full-width mega menu. Only valid with one `Navigation.MenuList`. */
  mini?: boolean;
  /** Set by `Navigation.Item`. The parent item's label, shown on the back button on mobile. */
  label?: string;
  /** Set by `Navigation.Item`. Starts the closing animation. */
  startTransitionOut?: boolean;
  /**
   * Set by `Navigation.Item`.
   * @default 'dark'
   */
  variant?: ContrastVariant;
  /** Set by `Navigation.Item`. Called when the menu starts to close. */
  onStartClose?: () => void;
  /** Set by `Navigation.Item`. Called when the closing animation ends. */
  onClose?: () => void;
};

/**
 * Sub menu of a `Navigation.Item`, made up of `Navigation.MenuList`s. It is only mounted while open, and
 * traps focus until closed. Throws if `mini` is used with more than one list.
 */
export const Menu = ({
  mini,
  label,
  startTransitionOut,
  variant = 'dark',
  onClose,
  onStartClose,
  children,
}: PropsWithChildren<NavigationMenuProps>) => {
  const breakpoint: Breakpoint | null = useContext(BreakpointContext);
  const [measurement, setMeasurement] = useState(0);
  const [offset, setOffset] = useState(0);
  const menuEl = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const numberOfChildren = Children.count(children);
  const navContext = useContext(NavigationContext);
  const isMobile = breakpoint && !['desktop', 'wide'].includes(breakpoint);
  const dimension = isMobile ? 'width' : 'height';

  const menuLists = useAllowedChildren({
    children,
    errorMessage: 'Only `Navigation.MenuList` components are allowed as children of `Navigation.Menu`',
    types: [MenuList],
  });

  assert(
    !(numberOfChildren > 1 && mini),
    `NavigationMenu can't display as 'mini' with more than one 'NavigationMenuList'. ${numberOfChildren} given`,
  );

  /**
   * Wait for CSS transition to finish
   * before triggering `onClose` to unmount
   * the submenu component.
   */
  const handleTransitionEnd = () => {
    if (startTransitionOut) {
      onClose?.();
    } else {
      if (isMobile) {
        closeButton?.current?.focus();
      }
    }
  };

  useEffect(() => {
    const setDimension = () => {
      if (startTransitionOut) {
        setMeasurement(0);
      } else {
        if (menuEl?.current) {
          setMeasurement(menuEl.current.getBoundingClientRect()?.[dimension]);
        }

        if (isMobile) {
          if (navContext.element?.current) {
            setOffset(navContext.element?.current.getBoundingClientRect()?.left);
          }
        }
      }
    };

    setDimension();

    const resizeHandler = debounce(setDimension, 500);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      resizeHandler.cancel();
    };
  }, [dimension, startTransitionOut, isMobile, navContext]);

  /**
   * Memoized submenu CSS styles
   */
  const style = useMemo(() => {
    const css = {
      [dimension]: `${measurement}px`,
    };

    if (isMobile) {
      css.right = `-${offset}px`;
    }

    return css;
  }, [dimension, measurement, offset, isMobile]);

  return (
    <div
      className={clsx(styles.navigationMenuContainer.default, [styles.variants[variant]], {
        [styles.navigationMenuContainer.mini]: mini,
      })}
      style={style}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={clsx(styles.navigationMenu.default, {
          [styles.navigationMenu.mini]: mini,
        })}
        ref={menuEl}
      >
        <Container className={clsx({ [styles.resetContainerForTablet]: !mini, [styles.gridContainer]: mini })}>
          <FocusTrap
            focusTrapOptions={{
              initialFocus: false,
              // Let outside clicks through; Navigation.Item closes the menu on an outside click
              allowOutsideClick: true,
              // Escape closes the menu, not just the focus trap. Focus returns to the item's button.
              escapeDeactivates: () => {
                onStartClose?.();
                return true;
              },
            }}
          >
            <Box>
              <Row className={clsx({ [styles.resetRowForTablet]: !mini, [styles.gridRow]: mini })}>
                {!!label && (
                  <ButtonRoot
                    className={clsx(navStyles.noDesktop, styles.backButton)}
                    ref={closeButton}
                    onPress={onStartClose}
                  >
                    <Icon icon="chevron_left" />
                    <Text className={styles.backButtonText} weight="bold">
                      {label}
                    </Text>
                  </ButtonRoot>
                )}
                {menuLists?.map((menuList: ReactElement) => (
                  <Column columns={3} key={`menuList-${(menuList?.props as { heading?: string })?.heading}`}>
                    {menuList}
                  </Column>
                ))}
              </Row>
            </Box>
          </FocusTrap>
        </Container>
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
