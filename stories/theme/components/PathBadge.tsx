import { codeBadge } from '../ThemeItems.css';

export const PathBadge = ({ path }: { path: string }) => <span className={codeBadge}>{path}</span>;
