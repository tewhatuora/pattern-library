import { Button, ButtonProps } from '../Button/Button';

export type TextLinkButtonProps = Omit<ButtonProps, 'variant' | 'disabled' | 'width' | 'justifyContent'>;

/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
 */
export const TextLinkButton = (props: TextLinkButtonProps) => (
  <Button {...props} variant="text">
    {props.children}
  </Button>
);

export default TextLinkButton;
