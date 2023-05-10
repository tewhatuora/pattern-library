import { Children, PropsWithChildren, ReactElement, cloneElement } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const order = ['primary', 'secondary', 'tertiary'];

/**
 * Dialog action buttons
 * @constructor
 */
export const Actions = ({ children }: PropsWithChildren<any>) => {
  const sorted = Children.toArray(children).sort((a, b): number => {
    const aChild = cloneElement(a as ReactElement);
    const bChild = cloneElement(b as ReactElement);
    if (order.indexOf(aChild.props.variant) > order.indexOf(bChild.props.variant)) return 1;
    if (order.indexOf(aChild.props.variant) < order.indexOf(bChild.props.variant)) return -1;
    return 0;
  });

  return (
    <ErrorBoundary>
      {/* <AllowedChildren
        errorMessage="Only Dialog.Action components are allowed as children of Dialog.Actions"
        types={[Action]}
      > */}
      {sorted}
      {/* </AllowedChildren> */}
    </ErrorBoundary>
  );
};

Actions.displayName = 'Actions';
