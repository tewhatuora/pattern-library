import * as React from 'react';

import { Box, Heading, Stack, Text } from 'moh-design-system/components';

type Props = {
  description?: React.ReactNode;
  title: React.ReactNode;
};

export const Header = ({ description, title }: Props) => {
  return (
    <Box as="header" marginBottom={description ? 16 : 10}>
      <Stack space={10}>
        <Heading as="h1" color="neutral100" level="2">
          {title}
        </Heading>

        {description && (
          <Text color="neutral75" size="large">
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  );
};
