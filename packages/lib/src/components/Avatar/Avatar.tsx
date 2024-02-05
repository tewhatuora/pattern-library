import clsx from 'clsx';

import { ComponentPropsWithoutRef } from 'react';

import { Text } from '../Text/Text';
import { AvatarVariant } from '../../types';

import * as styles from './Avatar.css';

export const AvatarStyles = styles;

export type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  /** Avatar size variant for small/large. */
  variant?: AvatarVariant;
  /** Avatar user initial */
  initial: string;
};

/**
 * An avatar can indicate a users profile and should be a single character.
 * @param props
 * @constructor
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
