import type { JSX } from 'react';
import { ComponentPropsWithoutRef, ElementType, ReactNode, Ref, forwardRef } from 'react';
import { clsx } from 'clsx';
import type { PressEvent } from '@react-aria/interactions';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { ButtonRoot } from './ButtonRoot';
import { UseTextProps } from '../../hooks/typography';

import { IconType } from '../Icon/icons';
import fontWeightForButton from '../../utils/fontWeightForButton';

import * as styles from './Button.css';

export const ButtonStyles = styles;

export type ButtonProps = {
  /** Text weight token. Defaults to bold. */
  weight?: UseTextProps['weight'];
  /** Icon shown beside the text. Decorative, so the text must carry the meaning. */
  icon?: IconType;
  /**
   * Side of the text the icon appears on.
   * @default 'right'
   */
  iconPosition?: 'left' | 'right';
  /**
   * Element to render. Use `'a'` with `href` for navigation, so it is a real link rather than a button.
   * @default 'button'
   */
  as?: ElementType;
  /** Destination when `as` is `'a'`. Has no effect on a `button`. */
  href?: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Called on mouse, touch and keyboard activation. Prefer this over `onClick`. */
  onPress?: (e: PressEvent) => void;
  /** Called before `onPress`, mainly so Radix triggers (`asChild`) can attach their handler. Despite the type it receives a `PressEvent`, not a `MouseEvent`. */
  onClick?: ComponentPropsWithoutRef<'button'>['onClick'];
  /** Button text. If omitted, only the icon renders, so add an `aria-label`. */
  children?: ReactNode | undefined;
} & styles.Variants &
  Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> &
  AsLink;

type AsLink = {
  href?: string;
};

/**
 * Triggers an action. `variant` sets the emphasis: `primary` (default) for the main action, `secondary` and
 * `tertiary` for lesser ones, `link` for an inline text-link look. Use one `primary` per view.
 * `type` defaults to `"button"`, so it never submits a form unless you set `type="submit"`.
 *
 * @example
 * <Button icon="chevron_right" variant="primary" onPress={() => save()}>
 *   Save
 * </Button>
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
    weight = fontWeightForButton(variant),
    iconPosition = 'right',
    href,
    onClick,
    onPress,
    ...rest
  } = props;

  const handleClick = (e: PressEvent) => {
    // onClick is how Radix triggers (e.g. Dialog.Trigger asChild) attach their handler. Call it first, then
    // the consumer's onPress, so a Button used as a trigger still runs its own onPress.
    // This runs from react-aria's onPress, so onClick has always received a PressEvent, not a MouseEvent.
    // Radix triggers only use it as a callback, so the type is left as it was.
    onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    onPress?.(e);
  };

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.button({
          variant,
        }),
        className,
      )}
      disabled={disabled}
      href={href}
      ref={ref}
      type={type}
      onPress={handleClick}
      {...rest}
    >
      {!!icon && iconPosition === 'left' && (
        <Icon className={styles.icon['left']} icon={icon} variant="functionalIcons" />
      )}

      {!!children && (
        <Text size="medium" weight={weight}>
          {children}
        </Text>
      )}

      {!!icon && iconPosition === 'right' && (
        <Icon className={styles.icon['right']} icon={icon} variant="functionalIcons" />
      )}
    </ButtonRoot>
  );
});

Button.displayName = 'Button';
