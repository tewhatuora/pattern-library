import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';
import { Card, Stack, Text } from '../../packages/lib/src/components';
import { block, code } from './ThemeItems.css';
import { Group, PathBadge, Table, TableCell } from './components';
/**
 * Color
 */
const Color = () => {
  const { tokens } = useTheme();

  return (
    <Card>
      <Stack space="medium">
        <Group label="Color" level="1" path="tokens.color" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gridAutoRows: '100px',
            columnGap: '10px',
            rowGap: '10px',
          }}
        >
          {!!tokens?.color &&
            Object.keys(tokens?.color)?.map((name) => {
              if (typeof tokens?.color[name] === 'string') {
                return (
                  <div className={block} key={`color.${name}`} style={{ backgroundColor: tokens?.color[name] }}>
                    <Text>{name}</Text>
                  </div>
                );
              }
            })}
        </div>
        <Card>
          <Stack space="medium">
            <Group label="Semantic" level="2" path="tokens.color.sematic" />
            <Stack space="medium">
              {Object.keys(tokens?.color.semantic)?.map((name) => (
                <Card key={`tokens.color.semantic.${name}`}>
                  <Stack space="medium">
                    <Group label={name} level="3" path={`tokens.color.sematic.${name}`} />
                    <Stack space="medium">
                      {Object.keys(tokens?.color.semantic[name])?.map((subName) => {
                        if (typeof tokens?.color.semantic[name][subName] === 'string') {
                          return (
                            <Table key={`tokens.color.semantic.${name}.${subName}`}>
                              <tr>
                                <TableCell>
                                  <Text weight="bold">{subName}</Text>
                                </TableCell>
                                <TableCell>
                                  <div
                                    className={block}
                                    style={{
                                      width: 200,
                                      height: 100,
                                      backgroundColor: tokens.color.semantic[name][subName],
                                    }}
                                  />
                                </TableCell>
                                <TableCell>
                                  <code className={code}>{tokens.color.semantic[name][subName]}</code>
                                </TableCell>
                                <TableCell>
                                  <PathBadge path={`tokens.color.semantic.${name}.${subName}`} />
                                </TableCell>
                              </tr>
                            </Table>
                          );
                        }
                        return (
                          <Card key={`tokens.color.semantic.${name}.${subName}`}>
                            <Stack space="medium">
                              <Group label={subName} level="4" path={`tokens.color.semantic.${name}.${subName}`} />
                              <Stack space="medium">
                                {Object.keys(tokens?.color.semantic[name][subName])?.map((subSubName) => {
                                  if (typeof tokens?.color.semantic[name][subName][subSubName] === 'string') {
                                    return (
                                      <Table key={`tokens.color.semantic.${name}.${subName}.${subSubName}`}>
                                        <tr>
                                          <TableCell>
                                            <Text weight="bold">{subSubName}</Text>
                                          </TableCell>
                                          <TableCell>
                                            <div
                                              className={block}
                                              style={{
                                                width: 200,
                                                height: 100,
                                                backgroundColor: tokens.color.semantic[name][subName][subSubName],
                                              }}
                                            />
                                          </TableCell>
                                          <TableCell>
                                            <code className={code}>
                                              {tokens.color.semantic[name][subName][subSubName]}
                                            </code>
                                          </TableCell>
                                          <TableCell>
                                            <PathBadge
                                              path={`tokens.color.semantic.${name}.${subName}.${subSubName}`}
                                            />
                                          </TableCell>
                                        </tr>
                                      </Table>
                                    );
                                  }

                                  return (
                                    <Card key={`tokens.color.semantic.${name}.${subName}.${subSubName}`}>
                                      <Stack space="medium">
                                        <Group
                                          label={subSubName}
                                          level="4"
                                          path={`tokens.color.semantic.${name}.${subName}.${subSubName}`}
                                        />
                                        <Stack space="medium">
                                          <Table>
                                            {Object.keys(tokens?.color.semantic[name][subName][subSubName])?.map(
                                              (state) => (
                                                <tr
                                                  key={`tokens.color.semantic.${name}.${subName}.${subSubName}.${state}`}
                                                >
                                                  <TableCell>
                                                    <Text weight="bold">{state}</Text>
                                                  </TableCell>
                                                  <TableCell>
                                                    <div
                                                      className={block}
                                                      style={{
                                                        width: 200,
                                                        height: 100,
                                                        backgroundColor:
                                                          tokens.color.semantic[name][subName][subSubName][state],
                                                      }}
                                                    />
                                                  </TableCell>
                                                  <TableCell>
                                                    <code className={code}>
                                                      {tokens.color.semantic[name][subName][subSubName][state]}
                                                    </code>
                                                  </TableCell>
                                                  <TableCell>
                                                    <PathBadge
                                                      path={`tokens.color.semantic.${name}.${subName}.${subSubName}.${state}`}
                                                    />
                                                  </TableCell>
                                                </tr>
                                              ),
                                            )}
                                          </Table>
                                        </Stack>
                                      </Stack>
                                    </Card>
                                  );
                                })}
                              </Stack>
                            </Stack>
                          </Card>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Card>
        <JsonView collapsed={false} style={vscodeTheme} value={{ color: tokens?.color }} />
      </Stack>
    </Card>
  );
};

export default Color;
