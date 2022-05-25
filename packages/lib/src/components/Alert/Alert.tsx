import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import * as styles from './Alert.css';

export type AlertProps = {
  variant: styles.Variant;
  children?: React.ReactNode;
};

/**
 * Alert component for static labels
 * @constructor
 */
export const Alert = ({ variant, children, ...boxProps }: AlertProps) => {
  return (
    <Box
      role="alert"
      as="div"
      className={styles.variants({
        variant,
      })}
      {...boxProps}
    >
      <Text>{children}</Text>
    </Box>
  );
};

Alert.displayName = 'Alert';
