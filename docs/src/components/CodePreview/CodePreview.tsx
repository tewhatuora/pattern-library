import * as React from 'react';
import { default as NextImage } from 'next/image';
import { default as NextLink } from 'next/link';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { mdx } from '@mdx-js/react';
import { PrismTheme } from 'prism-react-renderer';

import * as Components from 'moh-design-system/components';
import { Box, Button, Inline, Text } from 'moh-design-system/components';
import { vars } from 'moh-design-system/themes/vars.css';

import { CopyButton } from '../CopyButton';
import './styles.css';

export type Props = {
  backgroundColor?: Components.BoxProps['backgroundColor'];
  code: string;
  expand?: boolean;
  theme?: PrismTheme;
};

type State = {
  expand: boolean;
};

const initialState = {
  expand: false,
};

export const CodePreview = ({ backgroundColor = 'neutral25', code, expand = false, theme }: Props) => {
  const previewRef = React.useRef<HTMLElement>(null);
  const [state, setState] = React.useState<State>({
    ...initialState,
    expand,
  });

  return (
    <LiveProvider
      as="div"
      code={code}
      scope={{
        mdx,
        ...Components,
        previewRef,
        vars,
        NextImage,
        NextLink,
      }}
      theme={theme}
      transformCode={(code) => '/** @jsx mdx */' + code}
    >
      <Box
        backgroundColor="neutral25"
        borderColor="neutral50"
        borderRadius="xlarge"
        borderWidth="standard"
        overflow="hidden"
      >
        <Box
          backgroundColor={backgroundColor}
          borderBottomRadius={state.expand ? undefined : 'xlarge'}
          borderTopRadius="xlarge"
          overflow="scroll"
          padding={6}
          ref={previewRef}
        >
          <LivePreview />

          <Text color="error100">
            <LiveError
              style={{
                fontFamily: 'inherit',
                margin: 0,
              }}
            />
          </Text>
        </Box>

        {state.expand && (
          <Box position="relative">
            <LiveEditor />

            <Box position="absolute" right={3} top={3}>
              <CopyButton content={code} />
            </Box>
          </Box>
        )}
      </Box>

      <Box marginY={2}>
        <Inline align="right" space={2}>
          <Button variant="tertiary" onClick={() => setState((x) => ({ ...x, expand: !x.expand }))}>
            {state.expand ? 'Hide Code' : 'View Code'}
          </Button>
        </Inline>
      </Box>
    </LiveProvider>
  );
};
