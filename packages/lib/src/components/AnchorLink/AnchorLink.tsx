import { AnchorHTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import { clsx } from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { mergeProps, useObjectRef } from '@react-aria/utils';

import { LinkComponentType } from '@/src/types';
import { canAcceptRef } from '@/src/utils/canAcceptRef';

import { withoutLinkOptions } from '@/src/utils/withoutLinkOptions';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  /** Destination, set as the `href`. Use this rather than `href`. */
  to: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /** Component to render instead of `<a>`, e.g. a wrapper around react-router-dom `<Link />`. It receives `href`, and a `ref` if it can accept one. */
  component?: LinkComponentType;
  /**
   * Text size token.
   * @default 'medium'
   */
  size?: UseTextProps['size'];
  /**
   * Text weight token.
   * @default 'link-normal'
   */
  weight?: UseTextProps['weight'];
  /** Hides the chevron icon shown before the text. */
  noIcon?: boolean;
  /** Uses the normal link colour for visited links instead of the visited colour. */
  noVisited?: boolean;
  /** Underlines the link at rest. By default it is underlined only on hover and focus. */
  showUnderline?: boolean;
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Styled text link with a leading chevron. Adds `rel="noopener noreferrer"` when `target="_blank"`.
 *
 * @example
 * <AnchorLink to="/services">Our services</AnchorLink>
 */
export const AnchorLink = forwardRef<HTMLAnchorElement, PropsWithChildren<AnchorLinkProps>>(
  (
    {
      to,
      size = 'medium',
      weight = 'link-normal',
      noIcon = false,
      noVisited = false,
      className,
      showUnderline = false,
      component: LinkComponent,
      children,
      ...rest
    }: PropsWithChildren<AnchorLinkProps>,
    forwardedRef,
  ) => {
    // One ref for react-aria and the caller (e.g. a Radix trigger with asChild)
    const ref = useObjectRef(forwardedRef);
    const textStyles = useText({ weight, size });
    const { linkProps } = useLink(rest, ref);
    // mergeProps chains any handlers both define, rather than one replacing the other
    const props = {
      ...mergeProps(withoutLinkOptions(rest), linkProps),
      className: clsx(textStyles, styles.link({ noVisited, underline: showUnderline }), className),
      // `to` is the documented prop; fall back to a plain `href` so it isn't overwritten with undefined
      href: to ?? rest.href,
      rel: rest.target === '_blank' ? 'noopener noreferrer' : rest.rel,
    };

    const linkChildren = (
      <>
        {!noIcon && <Icon className={styles.icon} icon="chevron_right" key="icon" variant="functionalIcons" />}
        {children}
      </>
    );

    if (LinkComponent) {
      return (
        <LinkComponent {...props} ref={canAcceptRef(LinkComponent) ? ref : undefined}>
          {linkChildren}
        </LinkComponent>
      );
    }

    return (
      <a {...props} ref={ref}>
        {linkChildren}
      </a>
    );
  },
);

AnchorLink.displayName = 'AnchorLink';
