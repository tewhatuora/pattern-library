import { PropsWithChildren } from 'react';
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
export const Text = ({
  id,
  as = 'span',
  size = 'medium',
  align,
  weight = 'regular',
  children,
  color,
  className,
}: PropsWithChildren<TextProps>) => {
  const textStyles = useText({ weight, size });

  return (
    <Box as={as} className={clsx(textStyles, className)} color={color} display="block" id={id} textAlign={align}>
      {children}
    </Box>
  );
};
