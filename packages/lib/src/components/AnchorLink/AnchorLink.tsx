import { PropsWithChildren } from 'react';

import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

import * as styles from './AnchorLink.css';

export const AnchorLinkStyles = styles;

export type AnchorLinkProps = {
  href: string;
};

/**
 * Links to a specified anchor point within the same page.
 * @constructor
 */
export const AnchorLink = ({ href, children }: PropsWithChildren<AnchorLinkProps>) => {
  return (
    <Text as="a" className={styles.link} href={href}>
      <Icon className={styles.icon} icon="chevron_right" variant="functionalIcons" />
      {children}
    </Text>
  );
};

AnchorLink.displayName = 'AnchorLink';
