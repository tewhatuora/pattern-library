import { Box } from '../Box/Box';

import * as styles from './Footer.css';

import NZGovtLogo from './nz-govt-logo.svg?component';

export const FirstRow = () => {
  return (
    <Box className={styles.firstRow} display="flex" justifyContent="spaceBetween">
      <Box className={styles.govtLogoWrapper}>
        <NZGovtLogo key={null} props={{}} ref={null} type="symbol" />
      </Box>
      <Box className={styles.otherLogosWrapper}>other logos</Box>
    </Box>
  );
};
