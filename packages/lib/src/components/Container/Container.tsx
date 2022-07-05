import { PropsWithChildren } from 'react';

import { Box, BoxProps } from '../Box/Box';
import * as styles from './Container.css';

export const ContainerStyles = styles;

type ContainerProps = {
  className?: string;
} & BoxProps;

/**
 * Grid container component
 * @param props
 * @constructor
 */
export const Container = ({ children, className, ...boxProps }: PropsWithChildren<ContainerProps>) => {
  return (
    <Box as="div" className={[styles.container, className]} {...boxProps}>
      {children}
    </Box>
  );
};
