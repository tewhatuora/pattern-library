import { ElementType } from 'react';
import { usePress } from '@react-aria/interactions';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';

type PressableProps = {
  as?: ElementType;
  label?: string;
  onPress?: (e: any) => void;
} & Pick<JSX.IntrinsicElements['button'], 'className' | 'children' | 'disabled' | 'type' | 'tabIndex'> &
  Pick<BoxProps, 'width' | 'justifyContent'>;

/**
 * Pressable component that renders
 * and accessible <button> with event
 * handlers for touch, mouse & keyboard
 * @param props
 * @constructor
 */
export const Pressable = ({ as = 'span', label, className, onPress, children, ...boxProps }: PressableProps) => {
  const { pressProps, isPressed } = usePress({
    onPress:
      typeof onPress === 'function'
        ? (e) => {
            onPress(e);
          }
        : undefined,
  });

  return (
    <Box aria-label={label} as={as} className={clsx(className, isPressed)} {...pressProps} {...boxProps}>
      {children}
    </Box>
  );
};
