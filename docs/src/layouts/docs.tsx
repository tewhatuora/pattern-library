import * as React from 'react';
import { GetLayout, NextLayout } from 'next';
import Head from 'next/head';

import { Box } from 'moh-design-system/components';

// import { Header, Nav, NavProps, SkipNavContent, SkipNavLink } from '~/components';
import { getLayout as getBaseLayout } from './site';

export type Props = {
  meta: {
    title: string;
    description?: string;
  };
};

const Layout: NextLayout<Props> = ({ children, meta }) => {
  // const links = (process.env.navLinks as unknown as NavProps['links']) ?? [];
  return (
    <>
      <Head>
        <title>{meta?.title ? `${meta.title} — Ministry of Health NZ` : 'Ministry of Health NZ'}</title>
        <meta
          content={
            meta?.description ?? 'Design system for the Ministry of Health built with React and vanilla-extract.'
          }
          key="description"
          name="description"
        />
      </Head>

      {/* <SkipNavLink>Skip to content</SkipNavLink> */}

      <Box maxWidth="320" paddingX="6">
        <Box as="aside" paddingRight={{ tablet: '12' }} paddingTop="12" position={{ tablet: 'fixed' }}>
          {/* <Nav links={links} /> */}
        </Box>

        <Box as="main">
          {/* <SkipNavContent /> */}
          <Box as="article" maxWidth="224" paddingBottom="20" paddingTop="20" paddingX={{ desktop: '10' }}>
            {/* {meta && <Header {...meta} />} */}

            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const getLayout: GetLayout<Props> = (page) => getBaseLayout(<Layout {...page.props}>{page}</Layout>);

export default Layout;
