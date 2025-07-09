import { AnchorHTMLAttributes, FC, PropsWithChildren, RefObject, forwardRef } from 'react';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { useObjectRef } from '@react-aria/utils';

import clsx from 'clsx';

import * as styles from './Link.css';

export const LinkStyles = styles;

export type LinkProps = {
  href: string;
  selected?: boolean;
  className?: string;
  component?: FC<any>;
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Navigation link
 * @constructor
 */
export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ href, selected, className, component: LinkComponent, children, ...rest }, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);

    const { linkProps } = useLink({ ...rest }, ref);
    const props = {
      ...linkProps,
      ...rest,
      className: clsx(styles.link.normal, { [styles.link.selected]: selected }, className),
      href,
      rel: rest.target === '_blank' ? 'noopener noreferrer' : rest.rel,
    };

    if (LinkComponent) {
      // Only pass the `ref` if the supplied component can actually accept it.
      // A component can accept refs if it is:
      //   1. A class component (has a prototype with a render method), or
      //   2. A function component wrapped with React.forwardRef (identified via $$typeof symbol).
      const canAcceptRef =
        (typeof LinkComponent === 'function' && (LinkComponent as any).prototype?.render) ||
        (LinkComponent as any).$$typeof === Symbol.for('react.forward_ref');

      if (canAcceptRef) {
        return (
          <LinkComponent {...props} ref={ref as RefObject<any>}>
            {children}
          </LinkComponent>
        );
      }

      // Fallback: don’t pass the ref to avoid the React warning.
      return <LinkComponent {...props}>{children}</LinkComponent>;
    }

    return (
      <a {...props} ref={ref as RefObject<HTMLAnchorElement>}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Navigation.Link';
