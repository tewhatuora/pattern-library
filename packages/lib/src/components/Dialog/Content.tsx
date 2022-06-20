import { PropsWithChildren, ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';

import { IconType } from '../Icon/icons';

import * as styles from './Dialog.css';

export const DialogStyles = styles;

export type DialogProps = {
  icon?: IconType;
  heading?: string;
  subheading?: string;
  content?: ReactNode;
};

/**
 * Dialog
 * Full screen overlay that prompts users
 * to take or complete an action.
 * The Dialog component must be placed
 * on the Background Component
 * @param props
 * @constructor
 */
export const Content = ({ children }: PropsWithChildren<DialogProps>) => {
  return <RadixDialog.Description asChild>{children}</RadixDialog.Description>;
};

Content.displayName = 'Content';
