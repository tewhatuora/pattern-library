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
      [P in keyof T]-?: (P extends K ? keyof T[P] : never) | KeysUnder<T[P], K>;
    }[keyof T]
  : never;

type IconVariant = KeysUnder<styles.Variants, 'icon'>;
type ColorVariant = KeysUnder<styles.Variants, 'color'>;

export type ButtonType<Props> = {
  icon?: IconType;
  iconPosition?: IconVariant;
  as?: ElementType;
  className?: string;
  variant?: ColorVariant;
  onPress?: (e: any) => void;
} & Props &
  Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

type ButtonRootProps = PropsWithChildren<ButtonType<Record<string, unknown>>>;

export type ButtonProps = ButtonType<{ children: ReactText }>;

export const ButtonRoot = forwardRef((props: ButtonRootProps, ref: Ref<HTMLButtonElement> | null) => {
  const { children, as = 'button', type = 'button', disabled, className, onPress, ...boxProps } = props;

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
    <Box as={as} className={clsx(styles.root, className)} ref={ref} type={type} {...buttonProps} {...boxProps}>
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
      ref={ref}
      type={type}
      onPress={onPress}
      {...boxProps}
    >
      <Text size="medium" weight={variant === 'text' ? 'link-normal' : 'bold'}>
        {children}
      </Text>

      {!!icon && <Icon icon={icon} variant="functionalIcons" />}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
