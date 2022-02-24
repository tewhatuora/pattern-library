import React from 'react';

import { Box } from '../Box/Box';

import * as styles from './ScreenReadersOnly.css';

type ScreenReadersOnlyProps = {
  id?: string;
  children: React.ReactNode;
  as?: 'div' | 'span';
};

export const ScreenReadersOnly = ({ id, children, as = 'span' }: ScreenReadersOnlyProps) => {
  return (
    <Box as={as} className={styles.root} id={id} overflow="hidden" position="absolute">
      {children}
    </Box>
  );
};
