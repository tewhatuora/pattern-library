import { PropsWithChildren } from 'react';

import { Stack } from '../Stack/Stack';

/** A vertical list of side navigation links. Each child is wrapped in an `li`. */
export const Side = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Stack as="ul" childWrapperAs="li" space="small">
      {children}
    </Stack>
  );
};

Side.displayName = 'Side';
