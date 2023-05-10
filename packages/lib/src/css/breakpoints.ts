export const breakpointNames = ['mobile', 'tablet', 'desktop', 'wide'] as const;

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;
