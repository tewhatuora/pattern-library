import { PropsWithChildren } from 'react';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

type ContentProps = {
  heading: string;
  headingLevel: '1' | '2' | '3' | '4';
  subheading?: string;
  variant?: 'light' | 'dark';
};

/**
 * Grid Content component
 * @param props
 * @constructor
 */
export const Content = ({ heading, headingLevel, subheading, children }: PropsWithChildren<ContentProps>) => {
  return (
    <>
      <Heading level={headingLevel}>{heading}</Heading>
      <Heading as="div" level="4">
        {subheading}
      </Heading>
      <Text>{children}</Text>
    </>
  );
};
