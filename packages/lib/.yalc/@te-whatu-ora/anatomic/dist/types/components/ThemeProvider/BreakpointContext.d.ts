import { ReactNode } from 'react';
export declare const BreakpointContext: import("react").Context<"mobile" | "tablet" | "desktop" | "wide" | null>;
interface BreakpointProviderProps {
    children: ReactNode;
}
/**
 * Breakpoint provider
 * wraps children components with a context
 * provider with the value of the current
 * breakpoint state
 * @param children
 * @constructor
 */
export declare function BreakpointProvider({ children }: BreakpointProviderProps): JSX.Element;
export {};
