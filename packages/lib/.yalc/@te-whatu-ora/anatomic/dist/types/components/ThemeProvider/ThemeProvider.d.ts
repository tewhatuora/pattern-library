import { ReactNode } from 'react';
declare type ThemeProviderProps = {
    theme: string;
    children: ReactNode;
};
export declare const ThemeProvider: ({ theme, children }: ThemeProviderProps) => JSX.Element;
export {};
