import { FunctionComponent, ReactSVGElement } from 'react';
export declare type IconType = 'alert' | 'alert_filled' | 'blood' | 'document' | 'email' | 'exempt' | 'international' | 'language' | 'menu' | 'name' | 'nasal' | 'nhi_number' | 'password' | 'pending' | 'person' | 'phone' | 'rat' | 'saliva' | 'search' | 'security' | 'tick' | 'question_mark' | 'unknown_test' | 'vaccine' | 'warning' | 'link' | 'plus' | 'print' | 'clear_field' | 'cross' | 'info' | 'chevron_left' | 'chevron_right' | 'chevron_up' | 'back_to_top' | 'chevron_down' | 'arrow_right' | 'arrow_up' | 'arrow_left' | 'arrow_down' | 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'twitter';
export declare type IconMap = {
    [key in IconType]?: FunctionComponent<ReactSVGElement>;
};
export declare const decorative: IconMap;
export declare const functional: IconMap;
export declare const social: IconMap;
export declare const other: IconMap;
declare const icons: IconMap;
export default icons;
