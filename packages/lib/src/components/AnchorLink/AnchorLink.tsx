import {
  AnchorHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  createElement,
  forwardRef,
  useRef,
} from 'react';
import clsx from 'clsx';
import { AriaLinkOptions, useLink } from '@react-aria/link';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  to: string;
  component?: 'a' | ReactElement;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
} & AriaLinkOptions &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type CustomAnchorLinkProps = {
  to: string;
  component: ReactElement;
} & AriaLinkOptions;

const CustomAnchorLink = forwardRef(
  ({ component, ...rest }: PropsWithChildren<CustomAnchorLinkProps>, ref: ForwardedRef<HTMLElement>) =>
    cloneElement(component as ReactElement<any, string>, { ...rest, ref }, rest.children),
);

/**
 * Links to a specified anchor point within the same page.
 * @constructor
 */
export const AnchorLink = ({
  to,
  size = 'medium',
  weight = 'regular',
  component = 'a',
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

  if (typeof component === 'string') {
    return <>{createElement(component, { ...props, ref }, linkChildren)}</>;
  }

  return (
    <CustomAnchorLink {...props} component={component} ref={ref} to={to}>
      {linkChildren}
    </CustomAnchorLink>
  );
};

AnchorLink.displayName = 'AnchorLink';
