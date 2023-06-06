export declare const breakpointNames: readonly ["mobile", "tablet", "desktop", "wide"];
export declare const breakpoints: {
    readonly mobile: 0;
    readonly tablet: 768;
    readonly desktop: 1024;
    readonly wide: 1280;
};
export declare type Breakpoint = keyof typeof breakpoints;
