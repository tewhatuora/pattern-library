import { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { UseTextProps, useText } from '../../hooks/typography';

export interface TextProps extends Pick<BoxProps, 'as'> {
  id?: string;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
  className?: BoxProps['className'];
}

/**
 * A Text component for displaying
 * text content as a given HTML tag
 */
export const Text = forwardRef<HTMLElement, PropsWithChildren<TextProps>>(
  ({ id, as = 'span', size = 'medium', align, weight = 'regular', children, color, className }, ref) => {
    const textStyles = useText({ weight, size });

    return (
      <Box
        as={as}
        className={clsx(textStyles, className)}
        color={color}
        display="block"
        id={id}
        ref={ref}
        tabIndex={-1} // Allows it to be focused
        textAlign={align}
      >
        {children}
      </Box>
    );
  },
);
