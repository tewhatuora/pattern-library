import { AnchorHTMLAttributes, FC, PropsWithChildren, RefObject, useRef } from 'react';
import clsx from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  to: string;
  component?: FC<any>;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
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
    className: clsx(textStyles, styles.link),
    href: to,
    rel: rest.target === '_blank' ? 'noopener noreferrer' : rest.rel,
  };

  const linkChildren = (
    <>
      <Icon className={styles.icon} icon="chevron_right" key="icon" variant="functionalIcons" />
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
