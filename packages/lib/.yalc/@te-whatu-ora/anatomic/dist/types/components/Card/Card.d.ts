import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import { Color, ContrastVariant } from '../../types';
import * as styles from './Card.css';
export declare const CardStyles: typeof styles;
export declare type CardProps = {
    /** Contrast variant for dark/light UI */
    variant?: ContrastVariant;
    /** Option to display the Card without a box-shadow */
    noShadow?: boolean;
    border?: Color;
    /** Additional CSS className. (Use `__anatomic__` for an example) */
    className?: string;
} & BoxProps & Pick<JSX.IntrinsicElements['div'], 'children'>;
/**
 * Card for building 2D layouts using grids or to contain content.
 * @constructor
 */
export declare const Card: {
    ({ as, noShadow, border, variant, children, className, ...boxProps }: PropsWithChildren<CardProps>): JSX.Element;
    displayName: string;
};
