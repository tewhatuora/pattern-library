import { PropsWithChildren } from 'react';
import { ContentProps } from '../Content/Content';
import { IconType } from '../Icon/icons';
import * as styles from './ImageBlock.css';
export declare const ImageBlockStyles: typeof styles;
declare type ImageBlockButton = {
    /** Label for the button */
    label: string;
    /** Element type to render the button as */
    as: Extract<keyof JSX.IntrinsicElements, 'button' | 'a'>;
    /** Function to call when the button is clicked */
    onClick?: () => void;
} & AsLink;
declare type AsLink = {
    href: string;
};
export declare type ImageBlockProps = {
    /** Alternative text for the image */
    alt: string;
    /** Img source URL/path */
    src?: string | IconType;
    /** Image shape */
    shape: 'square' | 'rectangle';
    /** Image block width */
    width: styles.WidthVariant;
    /** Image position relative to content */
    imagePosition: styles.ImagePositionVariant;
    /** Primary button */
    primaryButton?: ImageBlockButton;
    /** Label for the secondary button */
    secondaryButton?: ImageBlockButton;
} & Omit<ContentProps, 'className' | 'variant'>;
/**
 * Further content for an input field.
 * @constructor
 */
export declare const ImageBlock: {
    ({ alt, src, shape, width, imagePosition, heading, headingLevel, headingAs, subheading, primaryButton, secondaryButton, children, }: PropsWithChildren<ImageBlockProps>): JSX.Element;
    displayName: string;
};
export {};
