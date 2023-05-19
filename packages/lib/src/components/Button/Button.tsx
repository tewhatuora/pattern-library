import { ElementType, ReactNode, Ref, forwardRef } from 'react';
import clsx from 'clsx';

import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { ButtonRoot } from './ButtonRoot';
import { UseTextProps } from '../../hooks/typography';

import { IconType } from '../Icon/icons';
import fontWeightForButton from '../../utils/fontWeightForButton';

import * as styles from './Button.css';

export const ButtonStyles = styles;

type KeysUnder<T, K extends PropertyKey> = T extends object
  ? {
      [P in keyof T]-?: (P extends K ? keyof T[P] : any) | KeysUnder<T[P], K>;
    }[keyof T]
  : any;

type ColorVariant = KeysUnder<styles.Variants, 'color'>;

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
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
  /** Banner style variant */
  variant?: ColorVariant;
  /** A function that will be called when clicking/pressing the Button */
  onPress?: (e: any) => void;
  children?: ReactNode | undefined;
} & Pick<JSX.IntrinsicElements['button'], 'disabled' | 'type' | 'tabIndex'> &
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
    onPress,
    ...rest
  } = props;

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.variants({
          color: variant,
        }),
        className,
      )}
      disabled={disabled}
      href={href}
      ref={ref}
      type={type}
      onPress={onPress}
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
