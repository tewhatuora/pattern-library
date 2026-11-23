import { group } from '../ThemeItems.css';
import { Text } from '../../../packages/lib/src';
import { PathBadge } from './PathBadge';

type GroupProps = {
  label: string;
  path: string;
};

export const Group = ({ label, path }: GroupProps) => (
  <div className={group}>
    <Text size="medium">{label}</Text>
    <PathBadge path={path} />
  </div>
);
