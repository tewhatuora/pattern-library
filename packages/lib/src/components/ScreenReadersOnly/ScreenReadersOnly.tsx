import { Box } from '../Box/Box';

import * as styles from './ScreenReadersOnly.css';

export const ScreenReadersOnlyStyles = styles;

type ScreenReadersOnlyProps = {
  /** Lets a field point to this text with `aria-describedby`. */
  id?: string;
  children: React.ReactNode;
  /**
   * Use `div` when the content is block-level.
   * @default 'span'
   */
  as?: 'div' | 'span';
};

/**
 * Hides content visually but leaves it available to screen readers, e.g. context for an icon.
 *
 * @example
 * <ScreenReadersOnly>Current user: </ScreenReadersOnly>
 */
export const ScreenReadersOnly = ({ id, children, as = 'span' }: ScreenReadersOnlyProps) => {
  return (
    <Box as={as} className={styles.root} id={id} overflow="hidden" position="absolute">
      {children}
    </Box>
  );
};
