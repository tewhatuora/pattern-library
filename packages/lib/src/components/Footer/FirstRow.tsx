import { PropsWithChildren } from 'react';

import { Box } from '../Box/Box';

import * as styles from './Footer.css';

import NZGovtLogo from './nz-govt-logo.svg?component';

type FooterFirstRowProps = Record<string, unknown>;

export const FirstRow = ({ children }: PropsWithChildren<FooterFirstRowProps>) => {
  return (
    <Box className={styles.firstRow} display="flex" justifyContent="spaceBetween">
      <Box className={styles.govtLogoWrapper}>
        <NZGovtLogo key={null} props={{}} ref={null} type="symbol" />
      </Box>
      <Box className={styles.otherLogosWrapper}>
        {/* Allowed children: logos or images of some sort */}
        {children}
      </Box>
    </Box>
  );
};
