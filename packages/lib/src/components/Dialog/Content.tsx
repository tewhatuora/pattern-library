import { Children, PropsWithChildren, isValidElement } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

/**
 * Body of a `Dialog.Root`. Used as the dialog's accessible description, so screen readers read it when the dialog opens.
 * A single element child is used as is; text or several children are wrapped in a `div`.
 */
export const Content = ({ children }: PropsWithChildren<unknown>) => (
  // asChild needs a single element to put the description id on, so wrap text or several children
  <RadixDialog.Description asChild>
    {Children.count(children) === 1 && isValidElement(children) ? children : <div>{children}</div>}
  </RadixDialog.Description>
);

Content.displayName = 'Content';
