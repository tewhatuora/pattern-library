import { Text } from '../Text/Text';
import { FontSizeVariant } from '../../types';

import * as styles from './Avatar.css';

export const AvatarStyles = styles;

export type AvatarProps = {
  /** Font size variant for small/large */
  variant?: FontSizeVariant;
  /** Avatar user initial */
  initial: string;
};

/**
 * An avatar can indicate a users profile and should be a single character.
 * @param props
 * @constructor
 */
export const Avatar = ({ variant = 'small', initial }: AvatarProps) => {
  return (
    <div className={styles.styledAvatar}>
      <Text className={styles.initial[variant]}>{initial}</Text>
    </div>
  );
};
