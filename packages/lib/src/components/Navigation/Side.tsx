import { PropsWithChildren, ReactNode } from 'react';

import { useAllowedChildren } from '../AllowedChildren/AllowedChildren';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Link, LinkProps } from './Link';

/**
 * A tertiary navigation menu
 * @constructor
 */
export const Side = ({ children }: PropsWithChildren<unknown>) => {
  const links = useAllowedChildren({
    children,
    errorMessage: 'Only `Navigation.Link` components are allowed as children of `Navigation.Side`',
    types: [Link],
  });

  return (
    <Stack as="ul" space="small">
      {links?.map((child: ReactNode & { props: LinkProps }) => (
        <Box as="li" key={child.props.href}>
          {child}
        </Box>
      ))}
    </Stack>
  );
};

Side.displayName = 'Side';
