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
 * @param props
 * @constructor
 */
export const Notice = ({ label, variant = 'positive', ...boxProps }: NoticeProps) => {
  //icon for display depending on variant
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
      {/* <Icon icon={icon} /> */}
      <Text size="medium" weight="regular">
        <Icon className={styles.noticeIcon} icon={noticeIcon} variant="functionalIcons" />
        {label}
      </Text>
    </Box>
  );
};

Notice.displayName = 'Notice';
