import React from 'react';

import { Box } from '../Box/Box';
import * as styles from './Container.css';

type ContainerProps = {
  children?: React.ReactNode;
};
/**
 * Container component
 * @param props
 * @constructor
 */
export const Container = ({ children, ...boxProps }: ContainerProps) => {
  return (
    <Box as="div" className={styles.container} {...boxProps}>
      {children}
    </Box>
  );
};
