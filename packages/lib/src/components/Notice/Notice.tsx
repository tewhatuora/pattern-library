import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Notice.css';

export const NoticeStyles = styles;

export type NoticeProps = {
  /** Message text. */
  label?: string;
  /**
   * Colour and default icon: `positive` (tick), `info` (info), `critical` (warning) or `caution` (alert).
   * @default 'positive'
   */
  variant?: styles.Variant;
  /** Icon to show in place of the variant's default. */
  alternativeIcon?: IconType;
};

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

/**
 * A short message with an icon, in a lighter style than `Alert`. It has `role="status"`, so screen
 * readers announce changes to it politely.
 *
 * @example
 * <Notice label="Results can take up to 3 days" variant="info" />
 */
export const Notice = ({ label, variant = 'positive', alternativeIcon, ...boxProps }: NoticeProps) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
      role="status"
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
