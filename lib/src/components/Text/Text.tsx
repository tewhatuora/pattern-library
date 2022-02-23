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

export const Text = ({ id, as = 'span', size = 'standard', align, weight = 'regular', children, color }: TextProps) => {
  const textStyles = useText({ weight, size });

  return (
    <Box as={as} className={textStyles} color={color} display="block" id={id} textAlign={align}>
      {children}
    </Box>
  );
};
