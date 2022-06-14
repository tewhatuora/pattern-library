import { Box } from '../Box/Box';
import * as styles from './Container.css';

export const ContainerStyles = styles;

type ContainerProps = {
  children?: React.ReactNode;
};
/**
 * Grid container component
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
