import { PropsWithChildren, ReactElement } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { IconType } from '../Icon/icons';
export declare type DialogProps = {
    /** Icon to display in the Dialog */
    icon?: IconType;
    /** Dialog heading */
    heading?: string;
    /** Dialog subheading */
    subheading?: string;
    /** Trigger element to open the dialog */
    trigger?: ReactElement;
} & RadixDialog.DialogProps;
/**
 * Dialog
 * Full screen overlay that prompts users
 * to take or complete an action.
 * The Dialog component must be placed
 * on the Background Component
 * @param props
 * @constructor
 */
export declare const Root: {
    ({ icon, heading, subheading, defaultOpen, open, onOpenChange, trigger, children, }: PropsWithChildren<DialogProps>): JSX.Element;
    displayName: string;
};
