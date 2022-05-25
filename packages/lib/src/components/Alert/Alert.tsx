import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Alert.css';
import { Icon } from '../Icon/Icon';

export type AlertProps = {
  variant: styles.Variant;
  children?: React.ReactNode;
  alternativeIcon?: string;
};

const iconMap: Record<styles.Variant, string> = {
  positive: 'tick',
  informative: 'info',
  cautionary: 'alert',
  critical: 'warning',
};

/**
 * Alert component for static labels
 * @constructor
 */
export const Alert = ({ variant, children, alternativeIcon, ...boxProps }: AlertProps) => {
  return (
    <Box
      role="alert"
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Icon icon={alternativeIcon || iconMap[variant]} variant="functionalIcons" className={styles.icon} />
      <Text>{children}</Text>
    </Box>
  );
};

Alert.displayName = 'Alert';
