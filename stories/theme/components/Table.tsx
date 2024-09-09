import { PropsWithChildren } from 'react';

import { table } from '../ThemeItems.css';

export const Table = ({ children }: PropsWithChildren<any>) => (
  <table cellPadding={0} cellSpacing={0} className={table}>
    <tbody>{children}</tbody>
  </table>
);
