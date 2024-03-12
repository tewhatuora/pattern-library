import { Text } from '../Text/Text';
import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Notice.css';

export const NoticeStyles = styles;

export type NoticeProps = {
  /** Notice label text */
  label?: string;
  /** Notice color variant */
  variant: styles.Variant;
  /** Alternative icon to show */
  alternativeIcon?: IconType;
} & BoxProps;

/**
 * Notice component
 * A message with a lighter visual treatment than alert component
 * Has a positive, info and critical variant
 * Displays an icon(depending on the variant) with a text message
 * @param props
 * @constructor
 */

const iconMap: Record<string, IconType> = {
  positive: 'tick',
  info: 'info',
  critical: 'warning',
  caution: 'alert',
};

export const Notice = ({ label, variant = 'positive', alternativeIcon, ...boxProps }: NoticeProps) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Icon className={styles.icon({ variant })} icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" />
      <Text size="medium" weight="regular">
        {label}
      </Text>
    </Box>
  );
};

Notice.displayName = 'Notice';
