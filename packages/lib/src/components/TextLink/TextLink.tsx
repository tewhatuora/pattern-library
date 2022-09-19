import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';

import { UseTextProps, useText } from '../../hooks/typography';

import { IconType } from '../Icon/icons';

import * as styles from './TextLink.css';

export const TagStyles = styles;

export interface TextLinkProps extends Pick<BoxProps, 'as'> {
  /** Font size token */
  size?: UseTextProps['size'];
  /** Font weight token */
  weight?: UseTextProps['weight'];
  /** Text alignment */
  align?: BoxProps['textAlign'];
  /** CSS display property */
  display?: BoxProps['display'];
  /** Additional CSS className. (Use `__anatomic__` for an example) */
  className?: BoxProps['className'];
  /** URL/path to link to if `as` is set to `a` */
  href?: string;
  /** Icon to display **/
  icon?: IconType;
}

/**
 * TextLinkButton
 * A semantic button that looks like a link.
 * Because this is a button - we don’t
 * require a ‘pressed state’ as we do
 * with our link components.
 * @param props
 * @constructor
 */
export const TextLink = ({
  href,
  size = 'medium',
  align,
  weight = 'link-normal',
  children,
  icon,
  className,
}: PropsWithChildren<TextLinkProps>) => {
  const textStyles = useText({ weight, size });

  return (
    <Box as="a" className={clsx(textStyles, styles.link, className)} href={href} textAlign={align}>
      {children}
      {!!icon && <Icon icon={icon} variant="functionalIcons" />}
    </Box>
  );
};
