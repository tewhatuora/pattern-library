import { Source } from '@storybook/addon-docs/blocks';

/**
 * Color
 */
const UseTheme = () => {
  return (
    <Source
      code={`
import { useTheme } from '@healthnz/pattern-library';

...

const { tokens } = useTheme();
`}
      dark
      language="tsx"
    />
  );
};

export default UseTheme;
