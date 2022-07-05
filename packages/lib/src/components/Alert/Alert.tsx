import { PropsWithChildren } from 'react';

import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Alert.css';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';
import { IconType } from '../Icon/icons';

export const AlertStyles = styles;

export type AlertProps = {
  variant: styles.Variant;
  children?: React.ReactNode;
  alternativeIcon?: IconType;
  onClose?: () => void;
};

const iconMap: Record<styles.Variant, IconType> = {
  positive: 'tick',
  informative: 'info',
  cautionary: 'alert',
  critical: 'warning',
};

/**
 * Alerts are small informative, positive, cautionary or critical messages with
 * a stronger visual treatment than notices.
 * @constructor
 */
export const Alert = ({ variant, children, alternativeIcon, onClose, ...boxProps }: PropsWithChildren<AlertProps>) => {
  return (
    <Box
      as="div"
      className={styles.variants({
        variant,
      })}
      role="alert"
      {...boxProps}
    >
      <Box className={styles.contentWrapper}>
        <Icon className={styles.icon} icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" />
        <Text size="small">{children}</Text>
      </Box>
      {!!onClose && <CloseButton className={styles.closeButton} onClose={onClose} />}
    </Box>
  );
};

Alert.displayName = 'Alert';
