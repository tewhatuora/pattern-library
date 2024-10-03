import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { UseTextProps, useText } from '../../hooks/typography';
import * as styles from './Text.css';

export type TextProps = Omit<ComponentPropsWithoutRef<'span'>, 'color'> &
  Pick<BoxProps, 'as'> & {
    /** id attribute for the element */
    id?: string;
    /** Font size token */
    size?: UseTextProps['size'];
    /** Font weight token */
    weight?: UseTextProps['weight'];
    /** Text alignment */
    align?: BoxProps['textAlign'];
    /** CSS display property */
    display?: BoxProps['display'];
    /** Text color token */
    color?: BoxProps['color'];
    /** Additional CSS className. (Use `__patternlibrary__` for an example) */
    className?: BoxProps['className'];
  };

/**
 * A Text component for displaying
 * text content as a given HTML tag
 */
export const Text = forwardRef<HTMLElement, PropsWithChildren<TextProps>>(
  (
    {
      id,
      as = 'span',
      size = 'medium',
      align,
      display = 'block',
      weight = 'regular',
      children,
      color,
      className,
      ...rest
    },
    ref,
  ) => {
    const textStyles = useText({ weight, size });

    return (
      <Box
        as={as}
        className={clsx(textStyles, styles.text, className)}
        color={color}
        display={display}
        id={id}
        ref={ref}
        // tabIndex={-1} // Allows it to be focused
        textAlign={align}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);
