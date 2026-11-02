import { AnchorHTMLAttributes, PropsWithChildren, useRef } from 'react';
import { clsx } from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { mergeProps } from '@react-aria/utils';

import { LinkComponentType } from '@/src/types';
import { canAcceptRef } from '@/src/utils/canAcceptRef';

import { withoutLinkOptions } from '@/src/utils/withoutLinkOptions';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import { IconType } from '../Icon/icons';

import * as styles from './TextLink.css';

export const TextLinkStyles = styles;

export type TextLinkProps = {
  /** URL or path. Rendered as `href`, including when a custom `component` is used. */
  to: string;
  /** Additional CSS className. (Use `__patternlibrary__` for an example) */
  className?: string;
  /**
   * Component to render instead of an `a`, e.g. a wrapper around a router `<Link>`. It receives `href`
   * rather than `to`, along with the other link props.
   */
  component?: LinkComponentType;
  /**
   * Font size token.
   * @default 'medium'
   */
  size?: UseTextProps['size'];
  /**
   * Font weight token.
   * @default 'link-normal'
   */
  weight?: UseTextProps['weight'];
  /** Don't style visited links differently. */
  noVisited?: boolean;
  /** Underline the link at rest. Without it the underline only shows on hover. */
  showUnderline?: boolean;
  icon?: IconType;
  /**
   * Which side of the text the icon is on.
   * @default 'right'
   */
  iconPosition?: 'left' | 'right';
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * A link for navigating, styled as text. Use `TextLinkButton` for actions. Links with `target="_blank"`
 * get `rel="noopener noreferrer"` automatically.
 *
 * @example
 * <TextLink icon="arrow_right" to="/appointments">
 *   View appointments
 * </TextLink>
 */
export const TextLink = ({
  to,
  size = 'medium',
  weight = 'link-normal',
  icon,
  iconPosition = 'right',
  noVisited = false,
  className,
  showUnderline = false,
  component: LinkComponent,
  children,
  ...rest
}: PropsWithChildren<TextLinkProps>) => {
  const ref = useRef<HTMLAnchorElement>(null);
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
      {!!icon && iconPosition === 'left' && (
        <Icon className={styles.inlineIcon({ iconPosition: 'left' })} icon={icon} variant="functionalIcons" />
      )}
      {children}
      {!!icon && iconPosition === 'right' && (
        <Icon className={styles.inlineIcon({ iconPosition: 'right' })} icon={icon} variant="functionalIcons" />
      )}
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
};
