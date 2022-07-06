import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Badge } from '../Badge/Badge';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import * as styles from './Header.css';

export const HeaderStyles = styles;

export type HeaderProps = {
  variant: 'dark' | 'light';
};

/**
 * Found at the top of all mobile and desktop pages
 *
 * Fixes on scroll at mobile
 * Breaks to mobile when Navigation does
 *
 * @constructor
 */
export const Header = ({ variant = 'light' }: HeaderProps) => {
  const color = variant === 'light' ? 'primary100' : 'primary0';

  return (
    <header className={styles.header[variant]}>
      <Box color={color} display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Text>My COVID</Text>
          <Text weight="bold">Placeholder</Text>
          <Badge variant="info">Beta</Badge>
        </Box>
        <div>LOGO</div>
      </Box>
      <Box className={styles.searchNav} color={color} flexDirection="row">
        <TextLinkButton icon="language" iconPosition="left">
          Language
        </TextLinkButton>
        <TextLinkButton icon="person" iconPosition="left">
          Firstname Surname
        </TextLinkButton>
        <div>SEARCH</div>
      </Box>
    </header>
  );
};

Header.displayName = 'Header';
