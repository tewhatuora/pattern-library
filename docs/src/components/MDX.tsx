import { MDXProviderProps } from '@mdx-js/react';
import slugify from '@sindresorhus/slugify';

import { Box } from 'moh-design-system/components';

// import * as styles from '~/styles/utils.css';
// import { CodeBlock } from './CodeBlock';
// import { Link } from './Link';
// import { SearchIcons } from './SearchIcons';
// import { PropsTable } from './PropsTable';

export const MDX: MDXProviderProps['components'] = {
  // PropsTable,
  // SearchIcons,
  // Default components
  // https://mdxjs.com/table-of-components/
  // a: (props) => <Link className={styles.link} {...props} />,
  // code: (props) => <CodeBlock {...props} />,
  h2: ({ children }) => {
    const id = slugify(children);
    return (
      <Box display="block" marginBottom="6" marginTop="12">
        <Box id={id}>
          <Box as="a" href={`#${id}`}>
            {children}
            <Box marginLeft="2">#</Box>
          </Box>
        </Box>
      </Box>
    );
  },
  inlineCode: ({ children }) => <Box as="code">{children}</Box>,
  p: ({ children }) => (
    <Box marginY="6">
      <Box as="p" lineHeight="1.625" variant="base">
        {children}
      </Box>
    </Box>
  ),
  pre: (props) => <Box marginY="6" {...props} />,
};
