import { PropsWithChildren } from 'react';

import { Stack } from '../Stack/Stack';

/**
 * A tertiary navigation menu
 * @constructor
 */
export const Side = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Stack as="ul" childWrapperAs="li" space="small">
      {children}
    </Stack>
  );
};

Side.displayName = 'Side';
