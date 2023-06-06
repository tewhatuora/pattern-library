import { PropsWithChildren } from 'react';
import { BoxProps } from '../Box/Box';
import * as styles from './Container.css';
export declare const ContainerStyles: typeof styles;
declare type ContainerProps = {
    className?: string;
} & BoxProps;
/**
 * Grid container component
 * @param props
 * @constructor
 */
export declare const Container: ({ children, className, ...boxProps }: PropsWithChildren<ContainerProps>) => JSX.Element;
export {};
