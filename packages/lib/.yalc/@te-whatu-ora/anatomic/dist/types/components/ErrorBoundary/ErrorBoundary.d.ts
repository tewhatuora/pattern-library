import React from 'react';
import { EmptyObject } from '../../types';
declare type ErrorBoundaryState = {
    hasError: boolean;
    error?: Error;
};
declare class ErrorBoundary extends React.Component<EmptyObject, ErrorBoundaryState> {
    constructor(props: EmptyObject);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    };
    componentDidCatch(error: Error): void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
