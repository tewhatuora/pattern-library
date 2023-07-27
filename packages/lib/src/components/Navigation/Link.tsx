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
      return (
        <LinkComponent {...props} ref={ref as RefObject<any>}>
          {children}
        </LinkComponent>
      );
    }

    return (
      <a {...props} ref={ref as RefObject<HTMLAnchorElement>}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Navigation.Link';
