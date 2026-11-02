import { Text } from '../Text/Text';
import { ScreenReadersOnly } from '../ScreenReadersOnly/ScreenReadersOnly';
import { Box } from '../Box/Box';

import { ContrastVariant } from '../../types';

import * as styles from './Loader.css';

export const LoaderStyles = styles;

export type LoaderProps = {
  /**
   * Colour of the spinner and message. `dark` for light backgrounds, `light` for dark backgrounds.
   * @default 'dark'
   */
  variant?: ContrastVariant;
  /** Text shown under the spinner. If empty, screen readers hear "Loading" instead. */
  message: string;
};

/**
 * A spinner with a message, for a wait of unknown length.
 *
 * @example
 * <Loader message="Loading your results" variant="dark" />
 */
export const Loader = ({ variant = 'dark', message }: LoaderProps) => {
  return (
    <div className={styles.container} role="status">
      <Box alignItems="center" display="flex" flexDirection="column">
        <div className={styles.spinner[variant]} />
        {message ? (
          <Text align="center" className={styles.label[variant]} weight="regular">
            {message}
          </Text>
        ) : (
          <ScreenReadersOnly>Loading</ScreenReadersOnly>
        )}
      </Box>
    </div>
  );
};
