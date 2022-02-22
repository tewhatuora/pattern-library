import * as React from 'react';
import { AppProps } from 'next';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import { ThemeProvider } from 'moh-design-system/components';
import neutral from 'moh-design-system/themes/neutral';
import myCovidRecord from 'moh-design-system/themes/myCovidRecord';

import { MDX } from '~/components';
import { getLayout as getDocsLayout } from '~/layouts/docs';
// import { getTheme } from '~/utils/cookies';
// import '~/styles/globals.css';

const App = ({ Component, ...pageProps }) => {
  const getLayout = Component.getLayout || getDocsLayout;

  return (
    <ThemeProvider theme={myCovidRecord}>
      <Head>
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{var d=document.documentElement;var e=document.cookie.split(";").find(x=>x.includes("mode"));if(e){d.setAttribute('data-theme',e.replace("mode=","").trim())}else{d.setAttribute('data-theme','dark');}}catch(t){}}();`,
          }}
        />
      </Head>

      <MDXProvider components={MDX}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
    </ThemeProvider>
  );
};

export default App;
