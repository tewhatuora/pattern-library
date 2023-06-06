import { RecipeVariants } from '@vanilla-extract/recipes';
declare const variant: {
    positive: string;
    info: string;
    neutral: string;
    caution: string;
    critical: string;
};
export declare type Variant = keyof typeof variant;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    variant: {
        positive: string;
        info: string;
        neutral: string;
        caution: string;
        critical: string;
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export {};
