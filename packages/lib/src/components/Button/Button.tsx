import { ElementType, forwardRef, Ref, RefObject } from 'react';
import { useButton } from '@react-aria/button';
import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';

import * as styles from './Button.css';

export type ButtonProps = {
  icon?: string;
  as?: ElementType;
  className?: string;
  variant?: styles.Variant;
  onPress?: (e: any) => void;
} & Pick<JSX.IntrinsicElements['button'], 'children' | 'disabled' | 'type' | 'tabIndex'> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

export const ButtonRoot = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | null) => {
  const { children, as = 'button', type = 'button', className, icon, onPress, ...boxProps } = props;

  const { buttonProps } = useButton(
    {
      ...props,
      elementType: as,
    },
    ref as RefObject<HTMLButtonElement>,
  );

  return (
    <Box as={as} className={className} ref={ref} type={type} {...buttonProps} {...boxProps}>
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
    className,
    icon,
    onPress,
    ...boxProps
  } = props;

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.variants({
          variant,
        }),
        className,
      )}
      ref={ref}
      type={type}
      onPress={onPress}
      {...boxProps}
    >
      <Text size="medium" weight="bold">
        {children}
      </Text>

      {!!icon && <Icon className={styles.buttonIcon} icon={icon} />}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
