import { PropsWithChildren } from 'react';

import { AllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Stack } from '../Stack/Stack';
import { FirstRow } from './FirstRow';
import { SecondRow } from './SecondRow';
import { ThirdRow } from './ThirdRow';

/**
 * 
 * The Footer component should:
- Use theme tokens for colors, dimensions and typography.
- Display a maximum of 5 Navigation lists using Grid Columns
- Display social icons in the last column
- Display MOH icon in the last column
- Display NZ Government icon in the last column
- Display a Divider to separate navigation lists from imprint list
- Display a maximum of 7 'Imprint' list items
- Display the Safe site icon
- Have a light variant
- Have a dark variant
 */

// TODO: Move NZ govt logo to correct place

// TODO: Update FirstRow, SecondRow, and ThirdRow components to have descriptive names

type FooterRootProps = Record<string, unknown>;

export const Root = ({ children }: PropsWithChildren<FooterRootProps>) => {
  return (
    <footer>
      <Stack space="medium">
        <AllowedChildren errorMessage="TODO" types={[FirstRow, SecondRow, ThirdRow]}>
          {children}
        </AllowedChildren>
      </Stack>
    </footer>
  );
};
