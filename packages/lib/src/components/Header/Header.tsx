import { useState } from 'react';
import clsx from 'clsx';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';
import { ButtonRoot } from '../Button/Button';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { InputSearch } from '../InputSearch/InputSearch';

import Logo from '../../assets/logo-moh.svg?component';

import * as styles from './Header.css';

export const HeaderStyles = styles;

export type HeaderProps = {
  variant: 'dark' | 'light';
  beta?: boolean;
  withSearch?: boolean;
  language?: boolean;
  name?: boolean;
  className?: string;
};

const HeaderLink = ({ link, icon, className, children }) => {
  return (
    <a className={clsx(styles.headerLink, className)} href={link}>
      <Icon icon={icon} variant="functionalIcons" />
      <Text weight="regular">{children}</Text>
    </a>
  );
};

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <ButtonRoot className={styles.mobileMenuButton} onPress={() => setOpen(!open)}>
      <Text>{open ? 'Close' : 'Menu'}</Text>
      <Icon icon={open ? 'cross' : 'menu'} variant="decorativeIcons" />
    </ButtonRoot>
  );
};
/**
 * Found at the top of all mobile and desktop pages
 *
 * Fixes on scroll at mobile
 * Breaks to mobile when Navigation does
 *
 * @constructor
 */
export const Header = ({ variant = 'light', withSearch, beta, language, name }: HeaderProps) => {
  const color = variant === 'light' ? 'primary100' : 'primary0';

  return (
    <header className={styles.header[variant]}>
      <Stack alignItems="center" horizontal space="small">
        <Box color={color} display="flex" flexDirection="column">
          <Text size="small">My COVID</Text>
          <Text size="small" weight="bold">
            Placeholder
          </Text>
          {beta && (
            <span>
              <Badge variant="info">Beta</Badge>
            </span>
          )}
        </Box>
        <Box color={color}>
          <a className={styles.logo} href="/">
            <Logo />
          </a>
        </Box>
      </Stack>
      <Stack className={styles.searchNav} color={color} horizontal space="small">
        {language && (
          <HeaderLink icon="language" link="#Language">
            Language
          </HeaderLink>
        )}
        {name && (
          <HeaderLink icon="person" link="#FirstnameSurname">
            Name Surname
          </HeaderLink>
        )}
        {withSearch && (
          <form action="/" method="GET">
            <InputSearch id="search" name="search" placeholder="Search" variant={variant} />
          </form>
        )}
      </Stack>
      <MenuButton />
    </header>
  );
};

Header.displayName = 'Header';
