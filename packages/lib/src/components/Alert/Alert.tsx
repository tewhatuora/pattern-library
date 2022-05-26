import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Alert.css';
import { Icon } from '../Icon/Icon';
import { CloseButton } from '../CloseButton/CloseButton';

export type AlertProps = {
  variant: styles.Variant;
  children?: React.ReactNode;
  alternativeIcon?: string;
  onClose?: () => void;
};

const iconMap: Record<styles.Variant, string> = {
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
export const Alert = ({ variant, children, alternativeIcon, onClose, ...boxProps }: AlertProps) => {
  return (
    <Box
      role="alert"
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Box className={styles.contentWrapper}>
        <Icon icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" className={styles.icon} />
        <Text size="small">{children}</Text>
      </Box>
      {!!onClose && <CloseButton onClose={onClose} className={styles.closeButton} />}
    </Box>
  );
};

Alert.displayName = 'Alert';
