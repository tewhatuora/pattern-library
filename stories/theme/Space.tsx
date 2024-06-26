import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Stack, Text } from '../../packages/lib/src/components';
import { Group, PathBadge, Section, Table, TableCell } from './components';
import { code } from './ThemeItems.css';

/**
 * Color
 */
const Space = () => {
  const { tokens } = useTheme();

  return (
    <Section>
      <Stack space="medium">
        <Group label="Space" level="1" path="tokens.space" />
        <Section>
          <Stack space="medium">
            {Object.keys(tokens.space).map((name) => (
              <Stack space="medium">
                <Group label={name} level="2" path={`tokens.space.${name}`} />
                <Table>
                  {Object.keys(tokens.space[name]).map((size) => (
                    <tr key={`space.${name}.${size}`}>
                      <TableCell>
                        <Text size="xsmall" weight="bold">
                          {size}
                        </Text>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            backgroundColor: '#ccc',
                            width: tokens.space[name][size],
                            height: tokens.space[name][size],
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <code className={code}>{tokens.space[name][size]}</code>
                      </TableCell>
                      <TableCell>
                        <PathBadge path={`tokens.space.${name}.${size}`} />
                      </TableCell>
                    </tr>
                  ))}
                </Table>
              </Stack>
            ))}
          </Stack>
        </Section>
        <JsonView collapsed={false} style={vscodeTheme} value={{ space: tokens.space }} />
      </Stack>
    </Section>
  );
};

export default Space;
