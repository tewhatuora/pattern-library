import { AnchorHTMLAttributes, PropsWithChildren, useRef } from 'react';
import { AriaLinkOptions, useLink } from '@react-aria/link';

import { clsx } from 'clsx';

import { LinkComponentType } from '@/src/types';
import { canAcceptRef } from '@/src/utils/canAcceptRef';

import * as styles from './Link.css';

export const LinkStyles = styles;

export type LinkProps = {
  href: string;
  selected?: boolean;
  className?: string;
  component?: LinkComponentType;
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Navigation link
 * @constructor
 */
export const Link = ({
  href,
  selected,
  className,
  component: LinkComponent,
  children,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  const ref = useRef<HTMLAnchorElement>(null);

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
