import { Box } from '../Box/Box';

import * as styles from './ScreenReadersOnly.css';

export const ScreenReadersOnlyStyles = styles;

type ScreenReadersOnlyProps = {
  id?: string;
  children: React.ReactNode;
  as?: 'div' | 'span';
};

/**
 * A component that will be visible
 * only to screen readers
 */
export const ScreenReadersOnly = ({ id, children, as = 'span' }: ScreenReadersOnlyProps) => {
  return (
    <Box as={as} className={styles.root} id={id} overflow="hidden" position="absolute">
      {children}
    </Box>
  );
};
