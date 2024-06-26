import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '../../packages/lib/src/components/ThemeProvider/ThemeContext';

import { Stack, Text } from '../../packages/lib/src/components';
import { Group, PathBadge, Section, Table, TableCell } from './components';
import { code } from './ThemeItems.css';

/**
 * Border width
 */
const BorderWidth = () => {
  const { tokens } = useTheme();

  return (
    <Section>
      <Stack space="medium">
        <Group label="Border width" level="1" path="tokens.border.width" />
        <Table>
          {Object.keys(tokens.border.width).map((size) => (
            <tr key={`tokens.border.width.${size}`}>
              <TableCell>
                <Text weight="bold">{size}</Text>
              </TableCell>
              <TableCell>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    border: `${tokens.border.width[size]} solid ${tokens.color.semantic.card.border}`,
                  }}
                />
              </TableCell>
              <TableCell>
                <code className={code}>{tokens.border.width[size]}</code>
              </TableCell>
              <TableCell>
                <PathBadge path={`tokens.border.width.${size}`} />
              </TableCell>
            </tr>
          ))}
        </Table>
        <JsonView
          collapsed={false}
          style={vscodeTheme}
          value={{
            border: {
              width: tokens.border.width,
            },
          }}
        />
      </Stack>
    </Section>
  );
};

export default BorderWidth;
