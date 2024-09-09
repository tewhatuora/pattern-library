import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Stack, Text } from '../../packages/lib/src/components';
import { Group, PathBadge, Section, Table, TableCell } from './components';
import { code } from './ThemeItems.css';

/**
 * Border radius
 */
const BorderRadius = () => {
  const { tokens } = useTheme();

  return (
    <Section>
      <Stack space="medium">
        <Group label="Border radius" level="1" path="tokens.border.radius" />
        <Stack space="medium">
          {Object.keys(tokens.border.radius).map((style) => (
            <Section>
              <Stack space="medium">
                <Group label={style} level="2" path={`tokens.border.radius.${style}`} />
                <Table>
                  {Object.keys(tokens.border.radius[style]).map((dimension) => (
                    <tr key={`tokens.border.radius.${style}.${dimension}`}>
                      <TableCell>
                        <Text weight="bold">{dimension}</Text>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            border: `1px solid ${tokens.color.semantic.card.border}`,
                            [`border${dimension[0].toUpperCase()}${dimension.substr(1, dimension.length)}Radius`]:
                              tokens.border.radius[style][dimension],
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <code className={code}>{tokens.border.radius[style][dimension]}</code>
                      </TableCell>
                      <TableCell>
                        <PathBadge path={`tokens.border.radius.${style}.${dimension}`} />
                      </TableCell>
                    </tr>
                  ))}
                </Table>
              </Stack>
            </Section>
          ))}
        </Stack>
        <JsonView
          collapsed={false}
          style={vscodeTheme}
          value={{
            border: {
              radius: tokens.border.radius,
            },
          }}
        />
      </Stack>
    </Section>
  );
};

export default BorderRadius;
