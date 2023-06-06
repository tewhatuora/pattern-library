import { IconType } from '../Icon/icons';
declare type CloseButtonProps = {
    onClose: (e: any) => void;
    className?: string;
    icon?: IconType;
    variant?: 'decorativeIcons' | 'functionalIcons' | 'socialIcons' | 'tagIcon';
};
/**
 * Accessible close button that
 * shows a close icon
 * @param props
 * @constructor
 */
export declare const CloseButton: import("react").MemoExoticComponent<({ onClose, className, icon, variant }: CloseButtonProps) => JSX.Element>;
export {};
