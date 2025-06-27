import { PropsWithChildren } from 'react';

import { Card } from '../Card/Card';
import { ContrastVariant } from '../../types';

export const ContrastWrapper = ({ variant, children }: PropsWithChildren<{ variant?: ContrastVariant }>) => {
  return variant === 'dark' ? <Card>{children}</Card> : <>{children}</>;
};
