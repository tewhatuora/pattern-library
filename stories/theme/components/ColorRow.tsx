import { TableCell } from './TableCell';
import { Text } from '../../../packages/lib/src';
import { block, code } from '../ThemeItems.css';
import { PathBadge } from './PathBadge';

type ColorRowProps = { name: string; color: string; path: string };

export const ColorRow = ({ name, color, path }: ColorRowProps) => (
  <tr>
    <TableCell>
      <Text size="xsmall">{name}</Text>
    </TableCell>
    <TableCell>
      <div
        className={block}
        style={{
          width: 100,
          height: 30,
          backgroundColor: color,
        }}
      />
    </TableCell>
    <TableCell>
      <code className={code}>{color}</code>
    </TableCell>
    <TableCell>
      <PathBadge path={path} />
    </TableCell>
  </tr>
);
