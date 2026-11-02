import { PropsWithChildren } from 'react';

import { Box, BoxProps } from '../Box/Box';
import * as styles from './Container.css';

export const ContainerStyles = styles;

type ContainerProps = {
  className?: string;
} & BoxProps;

/**
 * Applies the page's side margins to its content (larger from tablet up). Put `Row` components inside it.
 *
 * @example
 * <Container>
 *   <Row>
 *     <Column columns={12}>Content</Column>
 *   </Row>
 * </Container>
 */
export const Container = ({ children, className, ...boxProps }: PropsWithChildren<ContainerProps>) => {
  return (
    <Box as="div" className={[styles.container, className]} {...boxProps}>
      {children}
    </Box>
  );
};
