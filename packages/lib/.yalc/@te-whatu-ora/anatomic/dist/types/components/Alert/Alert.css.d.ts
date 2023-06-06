import { RecipeVariants } from '@vanilla-extract/recipes';
declare const variant: {
    positive: string;
    informative: string;
    cautionary: string;
    critical: string;
};
export declare type Variant = keyof typeof variant;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    variant: {
        positive: string;
        informative: string;
        cautionary: string;
        critical: string;
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export declare const icon: string;
export declare const contentWrapper: string;
export declare const closeButton: string;
export {};
