import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { Link } from '../Link/Link';
import { Text } from '../Text/Text';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Breadcrumbs.docs.mdx';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    withBackground: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <Link href="#100">First</Link>
      <Link href="#200">Second</Link>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const Truncated = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <Link href="#100">First</Link>
      <Link href="#200">Second</Link>
      <Link href="#300">Third</Link>
      <Link href="#400">Fourth</Link>
      <Link href="#400">Fifth</Link>
      <Link href="#400">Sixth</Link>
      <Link href="#400">Seventh</Link>
      <Link href="#400">Eighth</Link>
      <Link href="#400">Ninth</Link>
      <Text>Tenth</Text>
    </Breadcrumbs>
  );
};
