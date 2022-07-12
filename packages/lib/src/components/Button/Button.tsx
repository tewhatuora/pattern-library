import { ElementType, PropsWithChildren, ReactText, Ref, RefObject, forwardRef } from 'react';
import { useButton } from '@react-aria/button';
import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Button.css';

export const ButtonStyles = styles;

type KeysUnder<T, K extends PropertyKey> = T extends object
  ? {
      [P in keyof T]-?: (P extends K ? keyof T[P] : any) | KeysUnder<T[P], K>;
    }[keyof T]
  : any;

type ColorVariant = KeysUnder<styles.Variants, 'color'>;

export type ButtonType<Props> = {
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  as?: ElementType;
  className?: string;
  variant?: ColorVariant;
  onPress?: (e: any) => void;
} & Props &
  Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> &
  Pick<BoxProps, 'width' | 'justifyContent'> &
  AsLink;

type AsLink = {
  href?: string;
};

type ButtonRootProps = PropsWithChildren<ButtonType<Record<string, unknown>>>;

export type ButtonProps = ButtonType<{ children?: ReactText }>;

export const ButtonRoot = forwardRef((props: ButtonRootProps, ref: Ref<HTMLButtonElement> | null) => {
  const { children, as = 'button', type = 'button', disabled, className, href, onPress, ...boxProps } = props;

  const { buttonProps } = useButton(
    {
      type,
      onPress,
      isDisabled: disabled,
      elementType: as,
    },
    ref as RefObject<HTMLButtonElement>,
  );

  return (
    <Box
      as={as}
      className={clsx(styles.root, className)}
      href={href}
      ref={ref}
      type={type}
      {...buttonProps}
      {...boxProps}
    >
      {children}
    </Box>
  );
});

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | null) => {
  const {
    children,
    as = 'button',
    type = 'button',
    variant = 'primary',
    disabled,
    className,
    icon,
    iconPosition = 'right',
    href,
    onPress,
    ...boxProps
  } = props;

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.variants({
          color: variant,
          icon: iconPosition,
        }),
        className,
      )}
      disabled={disabled}
      href={href}
      ref={ref}
      type={type}
      onPress={onPress}
      {...boxProps}
    >
      {!!children && (
        <Text size="medium" weight={weightFor(variant)}>
          {children}
        </Text>
      )}

      {!!icon && <Icon icon={icon} variant="functionalIcons" />}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';

function weightFor(variant: string) {
  if (['text', 'label'].includes(variant)) return 'link-normal';
  return 'bold';
}
