import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/icons';

import * as styles from './Notice.css';

export const NoticeStyles = styles;

export type NoticeProps = {
  label?: string;
  variant: styles.Variant;
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
};

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
      <Icon className={styles.icon} icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" />
      <Text size="medium" weight="regular">
        {label}
      </Text>
    </Box>
  );
};

Notice.displayName = 'Notice';
