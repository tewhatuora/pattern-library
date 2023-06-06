export declare const marginVar: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const variants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    direction: {
        vertical: {
            flexDirection: "column";
        };
        horizontal: {
            flexDirection: "row";
        };
    };
}>;
/**
 * To avoid using flex gap, each child must have a class that sets margin on it.
 * I would use a selector on the `variants` class above, but vanilla extract doesn't let selectors target children
 * (i.e. '& > *:not(:first-child)').
 * Instead, I have to give each child a class.
 */
export declare const child: Record<"horizontal" | "vertical", string>;
