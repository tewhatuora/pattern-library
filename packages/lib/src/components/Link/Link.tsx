import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { UseTextProps, useText } from '../../hooks/typography';

import * as styles from './Link.css';

export const LinkStyles = styles;

type LinkProps = {
  href: string;
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
};

/**
 * Anchor link to a URL
 * @param props
 * @constructor
 */
export const Link = ({ href, size = 'medium', weight = 'regular', children }: PropsWithChildren<LinkProps>) => {
  const textStyles = useText({ weight, size });

  return (
    <a className={clsx(textStyles, styles.link)} href={href}>
      {children}
    </a>
  );
};

Link.displayName = 'Link';
