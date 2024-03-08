import React from 'react';

import { Alert } from '../Alert/Alert';
import { EmptyObject } from '../../types';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props: EmptyObject) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    // eslint-disable-next-line no-console
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
