import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { AnchorLink } from '../AnchorLink/AnchorLink';
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
    chromatic: { viewports: [1100] },
  },
};

export const Default = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <AnchorLink noIcon to="#100">
        First
      </AnchorLink>
      <AnchorLink noIcon to="#200">
        Second
      </AnchorLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const BoldText = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} boldText>
      <AnchorLink noIcon to="#100">
        First
      </AnchorLink>
      <AnchorLink noIcon to="#200">
        Second
      </AnchorLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const BoldLinks = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} boldLinks>
      <AnchorLink noIcon to="#100">
        First
      </AnchorLink>
      <AnchorLink noIcon to="#200">
        Second
      </AnchorLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const NoVistedStyle = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} noVisited>
      <AnchorLink noIcon to="#100">
        First
      </AnchorLink>
      <AnchorLink noIcon to="#200">
        Second
      </AnchorLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const Truncated = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <AnchorLink noIcon to="#100">
        First
      </AnchorLink>
      <AnchorLink noIcon to="#200">
        Second
      </AnchorLink>
      <AnchorLink noIcon to="#300">
        Third
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Fourth
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Fifth
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Sixth
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Seventh
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Eighth
      </AnchorLink>
      <AnchorLink noIcon to="#400">
        Ninth
      </AnchorLink>
      <Text>Tenth</Text>
    </Breadcrumbs>
  );
};
