export declare const boldText: string;
export declare const boldLinks: string;
export declare const noVisited: string;
export declare const link: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    noVisited: {
        true: {};
        false: {
            selectors: {
                [x: string]: {
                    color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
                '&:visited': {
                    color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                };
            };
        };
    };
    underline: {
        true: {
            selectors: {
                '&:hover': {
                    textDecoration: "none";
                };
            };
            textDecoration: "underline";
        };
        false: {};
    };
}>;
export declare const icon: string;
