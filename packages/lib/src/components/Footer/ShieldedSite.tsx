import Shielded from 'react-shielded';

import { Box } from '../Box/Box';

import * as styles from './Footer.css';

export const ShieldedSite = () => {
  return (
    <Box className={styles.shieldedSite}>
      <Shielded />
    </Box>
  );
};
