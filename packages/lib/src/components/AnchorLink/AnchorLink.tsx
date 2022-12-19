import { AnchorHTMLAttributes, FC, PropsWithChildren, RefObject, useRef } from 'react';
import clsx from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  /** A URL/path to link to */
  to: string;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
  /** A React component to render, e. react-router-dom `<Link />` */
  component?: FC<any>;
  /** Font size for `<Text>` */
  size?: UseTextProps['size'];
  /** Font weight for `<Text>` */
  weight?: UseTextProps['weight'];
  /** Option to not display the icon */
  noIcon?: boolean;
  /** Option to not display the visited styles */
  noVisited?: boolean;
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Links to a specified anchor point within the same page.
 * @constructor
 */
export const AnchorLink = ({
  to,
  size = 'medium',
  weight = 'regular',
  noIcon = false,
  noVisited = false,
  className,
  component: LinkComponent,
  children,
  ...rest
}: PropsWithChildren<AnchorLinkProps>) => {
  const ref = useRef<HTMLElement>(null);
  const textStyles = useText({ weight, size });
  const { linkProps } = useLink({ ...rest }, ref);
  const props = {
    ...linkProps,
    ...rest,
    className: clsx(textStyles, styles.link({ noVisited }), className),
    href: to,
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
      <LinkComponent {...props} ref={ref as RefObject<any>}>
        {linkChildren}
      </LinkComponent>
    );
  }

  return (
    <a {...props} ref={ref as RefObject<HTMLAnchorElement>}>
      {linkChildren}
    </a>
  );
};

AnchorLink.displayName = 'AnchorLink';
