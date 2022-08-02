import { Children, PropsWithChildren, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import clsx from 'clsx';

import { debounce } from 'lodash';

import assert from 'assert';

import { BreakpointContext } from '../ThemeProvider/BreakpointContext';
import { useAllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { Row } from '../Columns/Row';
import { Column } from '../Columns/Column';
import { MenuList, MenuListProps } from './MenuList';
import { ButtonRoot } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { NavigationContext } from './Root';
import { Breakpoint } from '../../css/breakpoints';

import * as styles from './Menu.css';
import * as navStyles from './Navigation.css';

export const NavigationMenuStyles = styles;

export type NavigationMenuProps = {
  mini?: boolean;
  label?: string;
  startTransitionOut?: boolean;
  variant?: 'light' | 'dark';
  onClose?: () => void;
  onStartClose?: () => void;
};

/**
 * Mega or mini navigation sub menu
 * @constructor
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

  useEffect(() => {
    if (isMobile) {
      closeButton?.current?.focus();
    }
  }, [closeButton, isMobile]);

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
          <FocusTrap>
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
                {menuLists?.map((menuList: ReactNode & { props: MenuListProps }) => (
                  <Column columns={3} key={`menuList-${menuList?.props?.heading}`}>
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

Menu.displayName = 'Navigation.Menu';
