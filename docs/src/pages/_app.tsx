import * as React from 'react';
import { AppProps } from 'next';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import { MDX } from '~/components';
import { getLayout as getDocsLayout } from '~/layouts/docs';
import { ThemeSettingProvider } from '~/components/ThemeSetting';
import { ToggleableThemeProvider } from '~/components/ThemeSetting/ToggleableThemeProvider';

import '@fontsource/fira-sans';
import '@fontsource/fira-code';

const App = ({ Component, ...pageProps }: AppProps) => {
  const getLayout = Component.getLayout || getDocsLayout;

  return (
    <ThemeSettingProvider>
      <ToggleableThemeProvider>
        <Head>
          {/* Prevent theme flash */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){try{var d=document.documentElement;var e=document.cookie.split(";").find(x=>x.includes("mode"));if(e){d.setAttribute('data-theme',e.replace("mode=","").trim())}else{d.setAttribute('data-theme','dark');}}catch(t){}}();`,
            }}
          />
        </Head>

        <MDXProvider components={MDX}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
      </ToggleableThemeProvider>
    </ThemeSettingProvider>
  );
};

export default App;
