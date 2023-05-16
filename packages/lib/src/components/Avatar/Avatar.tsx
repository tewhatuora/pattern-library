import clsx from 'clsx';

import { Text } from '../Text/Text';
import { AvatarVariant } from '../../types';

import * as styles from './Avatar.css';

export const AvatarStyles = styles;

export type AvatarProps = {
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
export const Avatar = ({ variant = 'small', initial }: AvatarProps) => {
  const avatarClassNames = clsx(styles.styledAvatar, styles.avatarSize[variant]);
  return (
    <div className={avatarClassNames}>
      <Text className={styles.initial[variant]}>{initial}</Text>
    </div>
  );
};
