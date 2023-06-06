import { RecipeVariants } from '@vanilla-extract/recipes';
declare const variant: {
    light: string;
    dark: string;
};
export declare type Variant = keyof typeof variant;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    variant: {
        light: string;
        dark: string;
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export {};
