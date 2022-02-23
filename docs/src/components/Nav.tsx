import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

import { Box, Stack, Text } from 'moh-design-system/components';

// import { createGitHubLink } from '~/utils/github';
// import { createPlayroomLink } from '~/utils/playroom';
import { useIsMounted } from '~/utils/isMounted';

import * as styles from '~/styles/utils.css';

import { Link } from './Link';
import { ThemeToggle } from './ThemeSetting/ThemeToggle';

type Link = { name: string; route: string };

export type Props = {
  links: { name: string; links: Link[] }[];
};

export const Nav = ({ links }: Props) => {
  const isMounted = useIsMounted();
  const router = useRouter();

  return (
    <Box flexDirection="column" height="full">
      <Box paddingBottom={6}>
        <Stack space={4}>
          <NavLink active={router.asPath === '/'} href="/">
            Home
          </NavLink>
          <ThemeToggle />
        </Stack>
      </Box>

      <Box className={styles.list} display="block" height="full" paddingBottom={20} paddingTop={6}>
        <Stack space={10}>
          {/* <Stack space="3">
            <NavLink href={createGitHubLink()}>GitHub</NavLink>
            <NavLink href={createPlayroomLink()}>Playroom</NavLink>
          </Stack> */}

          <Stack space={4}>
            <Text size="small">Guides</Text>
            <Stack space={3}>
              <NavLink href="/guides/development">Development</NavLink>
              {/* <NavLink href="/guides/playroom">Playroom</NavLink> */}
            </Stack>
          </Stack>

          {links.map((x) => (
            <Stack key={x.name} space={4}>
              <Text size="small">{x.name}</Text>

              <Stack space={3}>
                {x.links.map((y) => (
                  <NavLink active={isMounted && router.asPath.split('#')[0] === y.route} href={y.route} key={y.route}>
                    {y.name}
                  </NavLink>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const NavLink = ({
  href,
  children,
}: React.PropsWithChildren<{
  active?: boolean;
  href: string;
}>) => {
  return (
    <Box>
      <Link href={href}>{children}</Link>
    </Box>
  );
};
