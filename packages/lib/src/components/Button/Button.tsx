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
  /** Font weight for `<Text>` */
  weight?: UseTextProps['weight'];
  /** Icon to display **/
  icon?: IconType;
  /** Where to position the icon */
  iconPosition?: 'left' | 'right';
  /** Element type to render the Button as */
  as?: ElementType;
  /** URL/path to link to if `as` is set to `a` */
  href?: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** A function that will be called when clicking/pressing the Button */
  onPress?: (e: PressEvent) => void;
  /** A function that will be called when clicking/pressing the Button that is keyboard accessible */
  onClick?: ComponentPropsWithoutRef<'button'>['onClick'];
  children?: ReactNode | undefined;
} & styles.Variants &
  Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> &
  AsLink;

type AsLink = {
  href?: string;
};

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
    weight = fontWeightForButton(variant),
    iconPosition = 'right',
    href,
    onClick,
    onPress,
    ...rest
  } = props;

  const handleClick = (e: PressEvent) => {
    // Call the onPress prop if it's provided
    // OnClick used for Radix components
    if (onClick) {
      // This runs from react-aria's onPress, so onClick has always received a PressEvent, not a MouseEvent.
      // Radix triggers only use it as a callback, so the type is left as it was.
      onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    } else if (onPress) {
      onPress(e);
    }
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
