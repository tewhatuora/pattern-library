import { ButtonProps } from '../Button/Button';
export declare type TextLinkButtonProps = Omit<ButtonProps, 'variant' | 'disabled' | 'width' | 'justifyContent'>;
/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
 */
export declare const TextLinkButton: import("react").ForwardRefExoticComponent<TextLinkButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default TextLinkButton;
