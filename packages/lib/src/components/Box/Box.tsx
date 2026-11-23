import { AllHTMLAttributes, ElementType, PropsWithChildren, createElement, forwardRef } from 'react';
import { ClassValue, clsx } from 'clsx';

import { Atoms, atoms } from '../../css/atoms/atoms';
import { sprinkles } from '../../css/atoms/sprinkles.css';

type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'className' | 'color' | 'height' | 'width'>;

export type BoxProps = PropsWithChildren<
  Atoms &
    HTMLProperties & {
      /**
       * Element or component to render. Also picks the CSS reset applied to it, so a string tag is preferred.
       * @default 'div'
       */
      as?: ElementType;
      /** Extra classes, merged after the token classes. Accepts strings, arrays and objects as `clsx` does. */
      className?: ClassValue;
    }
>;

/**
 * Layout primitive that renders any element with design-token props (spacing, colour, display and so on).
 * Props that are not tokens are passed to the element as normal attributes.
 * Token props that take a space or breakpoint value accept a single value or an object keyed by `mobile`, `tablet`, `desktop` and `wide`.
 * `className` accepts anything `clsx` does.
 *
 * @example
 * <Box as="section" backgroundColor="primary25" padding="medium">
 *   Content
 * </Box>
 */
export const Box = forwardRef<HTMLElement, BoxProps>(({ as = 'div', className, ...props }, ref) => {
  const atomProps: Record<string, unknown> = {};
  const nativeProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      nativeProps[key] = props[key as keyof typeof props];
    }
  }

  const atomicClasses = atoms({
    reset: typeof as === 'string' ? (as as Atoms['reset']) : 'div',
    ...atomProps,
  });

  return createElement(as, {
    className: clsx(atomicClasses, className),
    ...nativeProps,
    ref,
  });
});

Box.displayName = 'Box';
