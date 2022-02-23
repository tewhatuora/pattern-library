import * as React from 'react';

import { Box, BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight, useHeading } from '../../hooks/typography';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

type HeadingProps = {
  level: HeadingLevel;
  weight?: HeadingWeight;
  align?: BoxProps['textAlign'];
  color?: BoxProps['color'];
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'legend';
  children?: React.ReactNode;
  id?: string;
};

export const Heading = ({ level, weight, align, as, children, id, color }: HeadingProps) => {
  return (
    <Box
      as={as ?? resolveDefaultComponent[level]}
      className={useHeading({ weight, level })}
      color={color}
      id={id}
      textAlign={align}
    >
      {children}
    </Box>
  );
};
