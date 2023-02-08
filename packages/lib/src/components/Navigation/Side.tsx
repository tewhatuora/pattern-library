import { Children, PropsWithChildren } from 'react';

import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

/**
 * A tertiary navigation menu
 * @constructor
 */
export const Side = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Stack as="ul" space="small">
      {Children.map(children, (child) => (
        <Box as="li">{child}</Box>
      ))}
    </Stack>
  );
};

Side.displayName = 'Side';
