import { RecipeVariants } from '@vanilla-extract/recipes';
export declare const BUTTON_HEIGHT_MOBILE: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const BUTTON_HEIGHT_TABLET: string;
export declare const root: string;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    color: {
        link: string;
        primary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ':hover': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':focus': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':active': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                outline: "none";
            };
            selectors: {
                '&[disabled]': {
                    color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        secondary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderTopLeftRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderTopRightRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderBottomRightRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderBottomLeftRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ':hover': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':focus': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':active': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            selectors: {
                '&[disabled]': {
                    color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
        tertiary: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderStyle: "solid";
            borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            borderWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            ':hover': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':focus': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            ':active': {
                color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
            selectors: {
                '&[disabled]': {
                    color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
    };
}>;
export declare type Variants = RecipeVariants<typeof variants>;
export declare const icon: Record<"left" | "right", string>;
