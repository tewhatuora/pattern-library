import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

import { ContrastVariant } from '../../types';

import * as styles from './Loader.css';

export const LoaderStyles = styles;

export type LoaderProps = {
  /** Contrast variant for dark/light UI */
  variant?: ContrastVariant;
  /** Loading message */
  message: string;
};

/**
 * A loader can express an unspecified
 * wait time or display the length of a process.
 * @param props
 * @constructor
 */
export const Loader = ({ variant = 'dark', message }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <Box alignItems="center" display="flex" flexDirection="column">
        <div className={styles.spinner[variant]} />
        <Text align="center" className={styles.label[variant]} weight="regular">
          {message}
        </Text>
      </Box>
    </div>
  );
};
