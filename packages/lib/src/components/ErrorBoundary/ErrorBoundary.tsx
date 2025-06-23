import React, { type ReactNode } from 'react';

import { Alert } from '../Alert/Alert';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};
type ErrorBoundaryProps = { children?: ReactNode };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <Alert variant="critical">{this.state.error?.message}</Alert>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
