import { clsx } from 'clsx';

import { ComponentPropsWithoutRef } from 'react';

import { Text } from '../Text/Text';
import { AvatarVariant } from '../../types';

import * as styles from './Avatar.css';

export const AvatarStyles = styles;

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * Size of the avatar.
   * @default 'small'
   */
  variant?: AvatarVariant;
  /** A single character, usually the first letter of the person's name. */
  initial: string;
};

/**
 * Circle showing a person's initial. It has no label, so add an `aria-label` if it is the only identification of the user.
 *
 * @example
 * <Avatar initial="J" variant="large" />
 */
export const Avatar = ({ variant = 'small', initial, className, ...props }: AvatarProps) => {
  const avatarClassNames = clsx(styles.styledAvatar, styles.avatarSize[variant], className);
  return (
    <div className={avatarClassNames} {...props}>
      <Text className={styles.initial[variant]} weight="bold">
        {initial}
      </Text>
    </div>
  );
};
