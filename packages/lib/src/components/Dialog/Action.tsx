import { Button, ButtonProps } from '../Button/Button';

/**
 * Button for use inside `Dialog.Actions`. Takes the same props as `Button`.
 * Use `variant` to set the emphasis, which also sets the order in `Dialog.Actions`.
 */
export const Action = (props: ButtonProps) => <Button {...props} />;
