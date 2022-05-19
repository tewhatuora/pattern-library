import React, { ReactNode } from 'react';

import { Box, BoxProps } from '../Box/Box';
import { UseTextProps, useText } from '../../hooks/typography';

export interface TextProps extends Pick<BoxProps, 'as'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
}

/**
 * A Text component for displaying
 * text content as a given HTML tag
 */
export const Text = ({ id, as = 'span', size = 'medium', align, weight = 'regular', children, color }: TextProps) => {
  const textStyles = useText({ weight, size });

  return (
    <Box as={as} className={textStyles} color={color} display="block" id={id} textAlign={align}>
      {children}
    </Box>
  );
};
