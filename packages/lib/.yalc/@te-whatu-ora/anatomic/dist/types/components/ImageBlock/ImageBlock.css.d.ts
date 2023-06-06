declare const width: {
    full: {
        gridTemplateAreas: string;
    };
    half: {
        gridTemplateRows: string;
        gridTemplateAreas: string;
    };
    third: {
        gridTemplateRows: string;
        gridTemplateAreas: string;
    };
};
declare const imagePosition: {
    before: {};
    after: {};
};
export declare type WidthVariant = keyof typeof width;
export declare type ImagePositionVariant = keyof typeof imagePosition;
export declare const rowVariants: import("@vanilla-extract/recipes/dist/declarations/src/types").RuntimeFn<{
    width: {
        full: {
            gridTemplateAreas: string;
        };
        half: {
            gridTemplateRows: string;
            gridTemplateAreas: string;
        };
        third: {
            gridTemplateRows: string;
            gridTemplateAreas: string;
        };
    };
    imagePosition: {
        before: {};
        after: {};
    };
}>;
export declare const imageBlock: string;
export declare const content: string;
export declare const imageBase: string;
export declare const image: Record<"square" | "rectangle", string>;
export declare const contentCol: string;
export declare const imageCol: string;
export declare const buttonRow: Record<"full" | "half" | "third", string>;
export declare const buttons: Record<"full" | "half" | "third", string>;
export {};
