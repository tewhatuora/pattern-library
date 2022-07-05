import { PropsWithChildren } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

/**
 * Dialog
 * Full screen overlay that prompts users
 * to take or complete an action.
 * The Dialog component must be placed
 * on the Background Component
 * @param props
 * @constructor
 */
export const Content = ({ children }: PropsWithChildren<unknown>) => (
  <RadixDialog.Description asChild>{children}</RadixDialog.Description>
);

Content.displayName = 'Content';
