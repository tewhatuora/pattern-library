import { Children, PropsWithChildren, isValidElement } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const order = ['primary', 'secondary', 'tertiary'];

const variantOrder = (child: unknown) =>
  order.indexOf(isValidElement<{ variant?: string }>(child) ? (child.props.variant ?? '') : '');

/**
 * Dialog action buttons
 * @constructor
 */
export const Actions = ({ children }: PropsWithChildren) => {
  const sorted = Children.toArray(children).sort((a, b): number => {
    if (variantOrder(a) > variantOrder(b)) return 1;
    if (variantOrder(a) < variantOrder(b)) return -1;
    return 0;
  });

  return <ErrorBoundary>{sorted}</ErrorBoundary>;
};

Actions.displayName = 'Actions';
