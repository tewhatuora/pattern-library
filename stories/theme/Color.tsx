import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';
import { Stack, Text } from '../../packages/lib/src/components';
import { block, code, colorSection, colorSwatches, swatch, swatchHolder } from './ThemeItems.css';
import { ColorRow, Group, PathBadge, Section, Table, TableCell } from './components';

/**
 * Color
 */
const Color = () => {
  const { tokens } = useTheme();

  return (
    <Section>
      <Stack space="xsmall">
        <Group label="Color" level="1" path="tokens.color" />
        <div className={colorSwatches}>
          {!!tokens?.color &&
            Object.keys(tokens?.color)?.map((name) => {
              if (typeof tokens?.color[name] === 'string') {
                return (
                  <div className={swatchHolder} key={`color.${name}`}>
                    <div
                      className={swatch}
                      style={{
                        backgroundColor: tokens?.color[name],
                      }}
                    />
                    <code className={code}>{name}</code>
                  </div>
                );
              }
            })}
        </div>
        <Section>
          <Stack space="xsmall">
            <Group label="semantic" level="2" path="tokens.color.sematic" />
            <Stack space="xsmall">
              {Object.keys(tokens?.color.semantic)?.map((name) => (
                <Section key={`tokens.color.semantic.${name}`}>
                  <Stack space="xsmall">
                    <Group label={name} level="3" path={`tokens.color.sematic.${name}`} />
                    <Stack space="xsmall">
                      {Object.keys(tokens?.color.semantic[name])?.map((subName) => {
                        if (typeof tokens?.color.semantic[name][subName] === 'string') {
                          return (
                            <Table key={`tokens.color.semantic.${name}.${subName}`}>
                              <ColorRow
                                color={tokens.color.semantic[name][subName]}
                                name={subName}
                                path={`tokens.color.semantic.${name}.${subName}`}
                              />
                            </Table>
                          );
                        }
                        return (
                          <Section key={`tokens.color.semantic.${name}.${subName}`}>
                            <Stack space="xsmall">
                              <Group label={subName} level="4" path={`tokens.color.semantic.${name}.${subName}`} />
                              <Stack space="xsmall">
                                {Object.keys(tokens?.color.semantic[name][subName])?.map((subSubName) => {
                                  if (typeof tokens?.color.semantic[name][subName][subSubName] === 'string') {
                                    return (
                                      <Table key={`tokens.color.semantic.${name}.${subName}.${subSubName}`}>
                                        <ColorRow
                                          color={tokens.color.semantic[name][subName][subSubName]}
                                          name={subSubName}
                                          path={`tokens.color.semantic.${name}.${subName}.${subSubName}`}
                                        />
                                      </Table>
                                    );
                                  }

                                  return (
                                    <Section key={`tokens.color.semantic.${name}.${subName}.${subSubName}`}>
                                      <Stack space="xsmall">
                                        <Group
                                          key={`tokens.color.semantic.${name}.${subName}.${subSubName}`}
                                          label={subSubName}
                                          level="4"
                                          path={`tokens.color.semantic.${name}.${subName}.${subSubName}`}
                                        />
                                        <Stack space="xsmall">
                                          <Table>
                                            {Object.keys(tokens?.color.semantic[name][subName][subSubName])?.map(
                                              (state) => (
                                                <ColorRow
                                                  color={tokens.color.semantic[name][subName][subSubName][state]}
                                                  key={`tokens.color.semantic.${name}.${subName}.${subSubName}.${state}`}
                                                  name={state}
                                                  path={`tokens.color.semantic.${name}.${subName}.${subSubName}.${state}`}
                                                />
                                              ),
                                            )}
                                          </Table>
                                        </Stack>
                                      </Stack>
                                    </Section>
                                  );
                                })}
                              </Stack>
                            </Stack>
                          </Section>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Section>
              ))}
            </Stack>
          </Stack>
        </Section>
        <JsonView collapsed={false} style={vscodeTheme} value={{ color: tokens?.color }} />
      </Stack>
    </Section>
  );
};

export default Color;
