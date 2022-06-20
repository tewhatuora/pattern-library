import { Children, cloneElement, isValidElement, useMemo } from 'react';

import assert from 'assert';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Button, ButtonProps } from '../Button/Button';

import { ChildOfType, ChildrenOfType } from '../../types';

/**
 * Dialog Action button
 * @param props
 * @constructor
 */
export const Action = (props: ButtonProps) => <Button {...props} />;

const order = ['primary', 'secondary', 'tertiary'];

type ActionButtonChildType = ChildOfType<'Action', ButtonProps>;

type DialogActionsProps = {
  children: ChildrenOfType<'Action', ButtonProps>;
};

/**
 * Dialog action buttons
 * @constructor
 */
export const Actions = ({ children }: DialogActionsProps) => {
  const actions = useMemo(() => {
    return (
      Children.toArray(children)
        .filter((child: ActionButtonChildType) => {
          const value = isValidElement(child) && child?.type.name === 'Action';
          assert(value, 'Only Dialog.Action components are allowed as children of Dialog.Actions.');
          return value;
        })
        // Sort action buttons so that primary is always first, then secondary, then tertiary.
        .sort((a, b) => {
          if (order.indexOf(a.props.variant) > order.indexOf(b.props.variant)) return 1;
          if (order.indexOf(a.props.variant) < order.indexOf(b.props.variant)) return -1;
          if (order.indexOf(a.props.variant) === order.indexOf(b.props.variant)) return 0;
        })
        .map((child: ActionButtonChildType) => cloneElement(child))
    );
  }, [children]);

  return <ErrorBoundary>{actions}</ErrorBoundary>;
};

Actions.displayName = 'Actions';
