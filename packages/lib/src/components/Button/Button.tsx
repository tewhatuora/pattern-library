import { ComponentPropsWithoutRef, ElementType, ReactNode, Ref, forwardRef } from 'react';
import clsx from 'clsx';

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
  onPress?: (e: any) => void;
  /** A function that will be called when clicking/pressing the Button that is keyboard accessible */
  onClick?: ComponentPropsWithoutRef<'button'>['onClick'];
  children?: ReactNode | undefined;
} & styles.Variants &
  ComponentPropsWithoutRef<'button'>;

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement> | null) => {
  const {
    children,
    as = 'button',
    variant = 'primary',
    className,
    icon,
    weight = fontWeightForButton(variant),
    iconPosition = 'right',
    ...rest
  } = props;

  return (
    <ButtonRoot
      as={as}
      className={clsx(
        styles.button({
          variant,
        }),
        className,
      )}
      ref={ref}
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
