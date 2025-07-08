import { PropsWithChildren } from 'react';

import { tableCell } from '../ThemeItems.css';

export const TableCell = ({ children }: PropsWithChildren<any>) => <td className={tableCell}>{children}</td>;
