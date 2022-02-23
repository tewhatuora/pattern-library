import * as React from 'react';
import dynamic from 'next/dynamic';
import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import vsLight from 'prism-react-renderer/themes/vsLight';

import { Box, BoxProps } from 'moh-design-system/components';

import { CopyButton } from './CopyButton';
import type { Props as CodePreviewProps } from './CodePreview';

const CodePreview = dynamic<CodePreviewProps>(() => import('./CodePreview').then((mod) => mod.CodePreview), {
  loading: () => <Box backgroundColor="neutral25" borderRadius="large" width="full" />,
});

type Props = {
  backgroundColor?: BoxProps['backgroundColor'];
  children: string;
  className: string;
  live?: boolean;
  expand?: boolean;
};

export const CodeBlock = ({ children, className, live, backgroundColor, expand }: Props) => {
  const code = children.trim();

  if (live) return <CodePreview backgroundColor={backgroundColor} code={code} expand={expand} theme={vsLight} />;

  const language = className?.replace(/language-/, '') as Language;
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={vsLight}>
      {/* eslint-disable react/no-array-index-key */}
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box as="pre" borderRadius="xlarge" className={className} padding={6} position="relative" style={style}>
          <Box position="absolute" right={3} top={3}>
            <CopyButton content={code} />
          </Box>

          {tokens.map((line, i) => (
            <Box
              key={i}
              paddingRight={8}
              // whiteSpace="pre-wrap"
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <Box
                  as="span"
                  // fontFamily="mono"
                  // fontSize="base"
                  key={key}
                  // lineHeight="1.5"
                  {...getTokenProps({ token, key })}
                />
              ))}
            </Box>
          ))}
        </Box>
      )}
      {/* eslint-enable react/no-array-index-key */}
    </Highlight>
  );
};
