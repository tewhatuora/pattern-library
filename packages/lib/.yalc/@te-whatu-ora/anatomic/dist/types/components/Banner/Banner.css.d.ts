import { RecipeVariants } from '@vanilla-extract/recipes';
declare const variant: {
    alert: string;
    urgent: string;
    informative: string;
};
declare const theme: {
    light: string;
    dark: string;
};
export declare type Variant = keyof typeof variant;
export declare type Theme = keyof typeof theme;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    variant: {
        alert: string;
        urgent: string;
        informative: string;
    };
    theme: {
        light: string;
        dark: string;
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export declare const icon: string;
export declare const closeButton: string;
export declare const childrenWrapper: string;
export declare const bannerInner: string;
export {};
