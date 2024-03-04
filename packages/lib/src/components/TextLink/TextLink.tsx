import { AnchorHTMLAttributes, FC, PropsWithChildren, RefObject, forwardRef } from 'react';
import clsx from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { useObjectRef } from '@react-aria/utils';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import { IconType } from '../Icon/icons';

import * as styles from './TextLink.css';

export const TextLinkStyles = styles;

export type TextLinkProps = {
  /** A URL/path to link to */
  to: string;
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: string;
  /** A React component to render, e. react-router-dom `<Link />` */
  component?: FC<any>;
  /** Font size token */
  size?: UseTextProps['size'];
  /** Font weight token */
  weight?: UseTextProps['weight'];
  /** Option to not display the visited styles */
  noVisited?: boolean;
  /** Option to show underline when not hovered */
  showUnderline?: boolean;
  /** Icon to display **/
  icon?: IconType;
  /** Where to position the icon */
  iconPosition?: 'left' | 'right';
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * TextLink
 * Links to a specified link on a different page.
 * @param props
 * @constructor
 */
export const TextLink = forwardRef<HTMLAnchorElement, PropsWithChildren<TextLinkProps>>(
  (
    {
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
    },
    forwardedRef,
  ) => {
    const ref = useObjectRef(forwardedRef);
    const textStyles = useText({ weight, size });
    const { linkProps } = useLink({ ...rest }, ref);
    const props = {
      ...linkProps,
      ...rest,
      className: clsx(textStyles, styles.link({ noVisited, underline: showUnderline }), className),
      href: to,
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
  },
);
