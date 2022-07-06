import { HTMLAttributes } from 'react';

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = (props: ListItemProps) => {
  return <li {...props} />;
};
