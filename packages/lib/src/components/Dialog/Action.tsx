import * as RadixDialog from '@radix-ui/react-dialog';

import { Button, ButtonProps } from '../Button/Button';

export type DialogActionProps = ButtonProps & {
  /**
   * Close the dialog when pressed. Use it for Cancel or Done buttons. `onPress` still runs, but after the dialog
   * starts closing, so to validate before closing, control the dialog with `open` instead.
   */
  close?: boolean;
};

/**
 * Button for use inside `Dialog.Actions`. Takes the same props as `Button`, plus `close`.
 * Use `variant` to set the emphasis, which also sets the order in `Dialog.Actions`.
 */
export const Action = ({ close, ...props }: DialogActionProps) =>
  close ? (
    <RadixDialog.Close asChild>
      <Button {...props} />
    </RadixDialog.Close>
  ) : (
    <Button {...props} />
  );
