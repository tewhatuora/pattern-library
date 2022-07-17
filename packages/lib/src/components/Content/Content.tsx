import { PropsWithChildren } from 'react';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

type ContentHeadingLevel = '1' | '2' | '3' | '4' | '5';

export type ContentProps = {
  heading: string;
  headingLevel: ContentHeadingLevel;
  subheading?: string;
  variant?: 'light' | 'dark';
};

/**
 * Grid Content component
 * @param props
 * @constructor
 */
export const Content = ({ heading, headingLevel, subheading, children }: PropsWithChildren<ContentProps>) => {
  const subheadingLevel = subheadingLevelForHeadingLevel[headingLevel];

  return (
    <>
      {headingLevel === '5' ? <Text as="h5">{heading}</Text> : <Heading level={headingLevel}>{heading}</Heading>}

      {subheadingLevel === '5' ? (
        <Text as="div" weight="bold">
          {heading}
        </Text>
      ) : (
        <Heading as="div" level={subheadingLevel}>
          {subheading}
        </Heading>
      )}

      <Text>{children}</Text>
    </>
  );
};

const subheadingLevelForHeadingLevel: Record<ContentHeadingLevel, ContentHeadingLevel> = {
  '1': '3',
  '2': '4',
  '3': '4',
  '4': '5',
  '5': '5',
};
