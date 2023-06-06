import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const icon: string;
declare const variant: {
    decorativeIcons: import("@vanilla-extract/css").StyleRule;
    functionalIcons: import("@vanilla-extract/css").StyleRule;
    socialIcons: import("@vanilla-extract/css").StyleRule;
    tagIcon: import("@vanilla-extract/css").StyleRule;
};
export declare type Variant = keyof typeof variant;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    variant: {
        decorativeIcons: import("@vanilla-extract/css").StyleRule;
        functionalIcons: import("@vanilla-extract/css").StyleRule;
        socialIcons: import("@vanilla-extract/css").StyleRule;
        tagIcon: import("@vanilla-extract/css").StyleRule;
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export declare const clearIcon: string;
export {};
