import { ElementType, version } from 'react';

const isReact19OrLater = parseInt(version, 10) >= 19;

/**
 * Whether a component can be given a `ref` without React warning about it.
 * React 19 passes `ref` to every component as a prop. In React 18 only DOM elements, class components
 * and `forwardRef` components (including ones wrapped in `memo`) can take one.
 * @param component
 */
export const canAcceptRef = (component: ElementType): boolean => {
  if (isReact19OrLater || typeof component === 'string') {
    return true;
  }

  if (typeof component === 'function') {
    return !!component.prototype?.render;
  }

  const exotic = component as { $$typeof?: symbol; type?: ElementType };

  if (exotic.$$typeof === Symbol.for('react.forward_ref')) {
    return true;
  }

  if (exotic.$$typeof === Symbol.for('react.memo') && exotic.type) {
    return canAcceptRef(exotic.type);
  }

  return false;
};
