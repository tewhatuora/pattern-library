import { PropsWithChildren, ReactElement, cloneElement, createElement } from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  to: string;
  component?: 'a' | ReactElement;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
};

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
}: PropsWithChildren<AnchorLinkProps>) => {
  const textStyles = useText({ weight, size });
  const props = {
    className: clsx(textStyles, styles.link),
    href: to,
  };
  const linkChildren = [
    <Icon className={styles.icon} icon="chevron_right" key="icon" variant="functionalIcons" />,
    children,
  ];

  if (typeof component === 'string') {
    return createElement(component, props, linkChildren);
  }

  return cloneElement(component, props, linkChildren);
};

AnchorLink.displayName = 'AnchorLink';
