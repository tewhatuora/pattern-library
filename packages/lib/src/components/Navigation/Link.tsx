import { AnchorHTMLAttributes, PropsWithChildren, useRef } from 'react';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { mergeProps } from '@react-aria/utils';

import { clsx } from 'clsx';

import { LinkComponentType } from '@/src/types';
import { canAcceptRef } from '@/src/utils/canAcceptRef';

import { withoutLinkOptions } from '@/src/utils/withoutLinkOptions';

import * as styles from './Link.css';

export const LinkStyles = styles;

export type LinkProps = {
  href: string;
  /** Selected link styling. It doesn't set `aria-current`, so pass `aria-current="page"` for the current page. */
  selected?: boolean;
  className?: string;
  /** Component to render instead of an `a`, e.g. a wrapper around a router `<Link>`. It receives `href`. */
  component?: LinkComponentType;
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/** A styled navigation link. */
export const Link = ({
  href,
  selected,
  className,
  component: LinkComponent,
  children,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps } = useLink(rest, ref);
  // mergeProps chains any handlers both define, rather than one replacing the other
  const props = {
    ...mergeProps(withoutLinkOptions(rest), linkProps),
    className: clsx(styles.link.normal, { [styles.link.selected]: selected }, className),
    href,
    rel: rest.target === '_blank' ? 'noopener noreferrer' : rest.rel,
  };

  if (LinkComponent) {
    return (
      <LinkComponent {...props} ref={canAcceptRef(LinkComponent) ? ref : undefined}>
        {children}
      </LinkComponent>
    );
  }

  return (
    <a {...props} ref={ref}>
      {children}
    </a>
  );
};

Link.displayName = 'Navigation.Link';
