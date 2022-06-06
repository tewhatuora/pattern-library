import { AllHTMLAttributes, ElementType, PropsWithChildren, createElement, forwardRef } from 'react';
import clsx, { ClassValue } from 'clsx';

import { Atoms, atoms } from '../../css/atoms/atoms';
import { sprinkles } from '../../css/atoms/sprinkles.css';

type HTMLProperties = Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'className' | 'color' | 'height' | 'width'>;

type Props = Atoms &
  HTMLProperties & {
    as?: ElementType;
    className?: ClassValue;
  };

export const Box = forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ as = 'div', className, ...props }: PropsWithChildren<Props>, ref) => {
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
  },
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = 'Box';
