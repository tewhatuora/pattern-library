import { PropsWithChildren } from 'react';

import { ContrastVariant } from '../../types';

export const ContrastWrapper = ({ variant, children }: PropsWithChildren<{ variant?: ContrastVariant }>) => {
  return variant === 'dark' ? (
    <div
      style={{ backgroundColor: 'rgb(222, 219, 219)', border: '1px solid gray', borderRadius: '4px', padding: '3rem' }}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
