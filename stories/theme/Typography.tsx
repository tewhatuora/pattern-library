import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Card, Stack, Text } from '../../packages/lib/src/components';
import { Group, PathBadge, Table, TableCell } from './components';
import { code } from './ThemeItems.css';

/**
 * Border radius
 */
const Typography = () => {
  const { tokens } = useTheme();

  return (
    <Card>
      <Stack space="medium">
        <Group label="Typography" level="1" path="tokens.typography" />
        <Stack space="medium">
          <Card>
            <Stack space="medium">
              <Group label="Font weight" level="2" path="tokens.typography.fontWeight" />
              <Table>
                {Object.keys(tokens.typography?.fontWeight).map((weight) => (
                  <tr key={`typography.fontWeight.${weight}`}>
                    <TableCell>
                      <Text size="xsmall" weight="bold">
                        {weight}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Text weight={weight}>Example</Text>
                    </TableCell>
                    <TableCell>
                      <code className={code}>{tokens.typography?.fontWeight[weight]}</code>
                    </TableCell>
                    <TableCell>
                      <PathBadge path={`tokens.typography.fontWeight.${weight}`} />
                    </TableCell>
                  </tr>
                ))}
              </Table>
            </Stack>
          </Card>
          <Card>
            <Stack space="small">
              <Group label="Heading" level="2" path="tokens.typography.heading" />
              <Card>
                <Stack space="small">
                  <Group label="Weight" level="3" path="tokens.typography.heading.weight" />
                  <Table>
                    {Object.keys(tokens.typography?.heading.weight).map((weight) => (
                      <tr key={`tokens.typography.heading.weight.${weight}`}>
                        <TableCell>
                          <Text size="xsmall" weight="bold">
                            {weight}
                          </Text>
                        </TableCell>
                        <TableCell>
                          <Text weight={weight}>Example</Text>
                        </TableCell>
                        <TableCell>
                          <code className={code}>{tokens.typography?.heading.weight[weight]}</code>
                        </TableCell>
                        <TableCell>
                          <PathBadge path={`tokens.typography.heading.weight.${weight}`} />
                        </TableCell>
                      </tr>
                    ))}
                  </Table>
                </Stack>
              </Card>
              <Card>
                <Stack space="small">
                  <Group label="Level" level="3" path="tokens.typography.heading.level" />
                  {Object.keys(tokens.typography?.heading.level).map((level) => (
                    <Card>
                      <Stack space="small">
                        <Group label={level} level="4" path={`tokens.typography.heading.level.${level}`} />
                        {Object.keys(tokens.typography?.heading.level[level]).map((breakpoint) => (
                          <Card>
                            <Stack space="small">
                              <Group
                                label={breakpoint}
                                level="4"
                                path={`tokens.typography.heading.level.${level}.${breakpoint}`}
                              />
                              <Table>
                                {Object.keys(tokens.typography?.heading.level[level][breakpoint]).map((prop) => (
                                  <tr key={`tokens.typography.heading.level.${level}.${breakpoint}`}>
                                    <TableCell>
                                      <Text size="xsmall" weight="bold">
                                        {prop}
                                      </Text>
                                    </TableCell>
                                    <TableCell>
                                      <code className={code}>
                                        {tokens.typography?.heading.level[level][breakpoint][prop]}
                                      </code>
                                    </TableCell>
                                    <TableCell>
                                      <PathBadge
                                        path={`tokens.typography.heading.level.${level}.${breakpoint}.${prop}`}
                                      />
                                    </TableCell>
                                  </tr>
                                ))}
                              </Table>
                            </Stack>
                          </Card>
                        ))}
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Card>
        </Stack>
        <JsonView collapsed={false} style={vscodeTheme} value={{ typography: tokens?.typography }} />
      </Stack>
    </Card>
  );
};

export default Typography;
