import * as React from 'react';

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
export const Notice = ({ label, variant = 'positive', ...boxProps }: NoticeProps) => {
  const noticeIcon = variant === 'positive' ? 'tick' : 'warning';

  return (
    <Box
      aria-role="alert"
      aria-live="polite"
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Text size="medium" weight="regular">
        <Icon className={styles.noticeIcon} icon={noticeIcon} variant="functionalIcons" />
        <Box className={styles.labelStyles}> {label}</Box>
      </Text>
    </Box>
  );
};

Notice.displayName = 'Notice';
