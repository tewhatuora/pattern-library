import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

import { Text } from '../Text/Text';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Breadcrumbs.docs.mdx';
import { TextLink } from '../TextLink/TextLink';

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
      <TextLink to="#100">First</TextLink>
      <TextLink to="#200">Second</TextLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const BoldText = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} boldText>
      <TextLink to="#100">First</TextLink>
      <TextLink to="#200">Second</TextLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const BoldLinks = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} boldLinks>
      <TextLink to="#100">First</TextLink>
      <TextLink to="#200">Second</TextLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const NoVistedStyle = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args} noVisited>
      <TextLink to="#100">First</TextLink>
      <TextLink to="#200">Second</TextLink>
      <Text>Third</Text>
    </Breadcrumbs>
  );
};

export const Truncated = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <TextLink to="#100">First</TextLink>
      <TextLink to="#200">Second</TextLink>
      <TextLink to="#300">Third</TextLink>
      <TextLink to="#400">Fourth</TextLink>
      <TextLink to="#400">Fifth</TextLink>
      <TextLink to="#400">Sixth</TextLink>
      <TextLink to="#400">Seventh</TextLink>
      <TextLink to="#400">Eighth</TextLink>
      <TextLink to="#400">Ninth</TextLink>
      <Text>Tenth</Text>
    </Breadcrumbs>
  );
};
