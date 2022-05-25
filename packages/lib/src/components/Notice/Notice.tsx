import { Text } from '../Text/Text';

import { Box } from '../Box/Box';
import * as styles from './Notice.css';
import { Icon } from '../Icon/Icon';

export type NoticeProps = {
  label: string;
  variant: styles.Variant;
};

/**
 * Notice component
 * A message with a lighter visual treatment than alert component
 * Has a positive, info and critical variant
 * Displays an icon(depending on the variant) with a text message
 * @param props
 * @constructor
 */

const iconMap = {
  positive: 'tick',
  info: 'info',
  critical: 'warning',
};

export const Notice = ({ label, variant = 'positive', ...boxProps }: NoticeProps) => {
  const noticeIcon = iconMap[variant];

  return (
    <Box
      aria-role="status"
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Icon className={styles.noticeIcon} icon={noticeIcon} variant="functionalIcons" />
      <Text size="medium" weight="regular">
        {label}
      </Text>
    </Box>
  );
};

Notice.displayName = 'Notice';
