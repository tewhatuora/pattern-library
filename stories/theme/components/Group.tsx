import { group } from '../ThemeItems.css';
import { Heading } from '../../../packages/lib/src';
import { PathBadge } from './PathBadge';

type GroupProps = {
  label: string;
  level: '1' | '2' | '3' | '4';
  path: string;
};

export const Group = ({ label, level, path }: GroupProps) => (
  <div className={group}>
    <Heading level={level}>{label}</Heading>
    <PathBadge path={path} />
  </div>
);
