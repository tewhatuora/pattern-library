import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from 'react';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { UseTextProps, useText } from '../../hooks/typography';
import * as styles from './Text.css';

export type TextProps = Omit<ComponentPropsWithoutRef<'span'>, 'color'> &
  Pick<BoxProps, 'as'> & {
    id?: string;
    /**
     * Font size token: `xsmall`, `small`, `medium` or `large`.
     * @default 'medium'
     */
    size?: UseTextProps['size'];
    /**
     * Font weight token, e.g. `regular` or `bold`.
     * @default 'regular'
     */
    weight?: UseTextProps['weight'];
    align?: BoxProps['textAlign'];
    /**
     * Text is block-level by default, even as a `span`. Use `inline` to flow within a line of text.
     * @default 'block'
     */
    display?: BoxProps['display'];
    color?: BoxProps['color'];
    /** Additional CSS className. (Use `__patternlibrary__` for an example) */
    className?: BoxProps['className'];
  };

/**
 * Body text. Renders a `span` unless `as` says otherwise, so use `as="p"` for paragraphs and other
 * elements where the meaning matters.
 *
 * @example
 * <Text as="p" size="small" weight="bold">
 *   Appointment details
 * </Text>
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
