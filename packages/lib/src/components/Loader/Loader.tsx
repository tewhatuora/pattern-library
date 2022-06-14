import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';

import * as styles from './Loader.css';

export type LoaderProps = {
  variant: styles.Variant;
  message: string;
};

/**
 * A loader can express an unspecified
 * wait time or display the length of a process.
 * @param props
 * @constructor
 */
export const Loader = ({ variant = 'dark', message = 'Loading' }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <Stack alignItems="center" display="flex" flexDirection="column" justifyContent="center" space="xsmall">
        <div className={styles.variant[variant]} />
        <Text align="center" className={styles.labelVariant[variant]} weight="regular">
          {message}
        </Text>
      </Stack>
    </div>
  );
};
