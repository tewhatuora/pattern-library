import JsonView from '@uiw/react-json-view';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';

import { Source } from '@storybook/addon-docs';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Card, Column, Heading, Row, Stack, Text } from '../../packages/lib/src/components';

/**
 * Color
 */
const UseTheme = () => {
  const { tokens } = useTheme();

  return (
    <Source
      code={`
import { useTheme } from '@te-whatu-ora/anatomic';

...

const { tokens } = useTheme();
`}
      dark
      language="tsx"
    />
  );
};

export default UseTheme;
