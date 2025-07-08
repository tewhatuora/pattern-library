import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useEffect, useState } from 'react';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Card, Stack, Text } from '../../packages/lib/src/components';
import { Group, PathBadge, Table, TableCell } from './components';
import { code } from './ThemeItems.css';

/**
 * Border radius
 */
const Transitions = () => {
  const { tokens } = useTheme();

  const [run, setRun] = useState(false);

  useEffect(() => {
    setTimeout(() => setRun(!run), 1000);
  }, [run]);

  return (
    <Card>
      <Stack space="medium">
        <Group label="Transitions" level="1" path="tokens.transitions" />
        <Table>
          {Object.keys(tokens.transitions).map((name) => (
            <tr key={`tokens.transitions.${name}`}>
              <TableCell>
                <Text weight="bold">{name}</Text>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: tokens.color.primary100,
                    transition: tokens.transitions[name],
                    transform: run ? `translateX(100%)` : `translateX(0%)`,
                    opacity: run ? '1' : '0',
                  }}
                />
              </TableCell>
              <TableCell>
                <code className={code}>{tokens.transitions[name]}</code>
              </TableCell>
              <TableCell>
                <PathBadge path={`tokens.transitions.${name}`} />
              </TableCell>
            </tr>
          ))}
        </Table>
        <JsonView collapsed={false} style={vscodeTheme} value={{ transitions: tokens?.transitions }} />
      </Stack>
    </Card>
  );
};

export default Transitions;
