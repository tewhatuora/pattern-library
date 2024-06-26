import { PropsWithChildren } from 'react';

import { colorSection } from '../ThemeItems.css';

export const Section = ({ children }: PropsWithChildren<any>) => <div className={colorSection}>{children}</div>;
