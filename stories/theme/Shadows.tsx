import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Card, Stack, Text } from '../../packages/lib/src/components';
import { code } from './ThemeItems.css';
import { Group, PathBadge, Table, TableCell } from './components';

/**
 * Border radius
 */
const Shadows = () => {
  const { tokens } = useTheme();

  return (
    <Card>
      <Stack space="medium">
        <Group label="Shadows" level="1" path="tokens.shadows" />
        <Table>
          {Object.keys(tokens.shadows).map((name) => (
            <tr key={`tokens.shadows.${name}`}>
              <TableCell>
                <Text weight="bold">{name}</Text>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    boxShadow: tokens.shadows[name],
                  }}
                />
              </TableCell>
              <TableCell>
                <code className={code}>{tokens.shadows[name]}</code>
              </TableCell>
              <TableCell>
                <PathBadge path={`tokens.shadows.${name}`} />
              </TableCell>
            </tr>
          ))}
        </Table>
        <JsonView collapsed={false} style={vscodeTheme} value={{ shadows: tokens?.shadows }} />
      </Stack>
    </Card>
  );
};

export default Shadows;
