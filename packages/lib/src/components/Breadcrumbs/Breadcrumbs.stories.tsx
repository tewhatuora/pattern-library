import { expect, within } from 'storybook/test';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

import { Text } from '../Text/Text';
import DocsPage from '../../../utils/DocsPage';

import Docs from './Breadcrumbs.docs.mdx';
import { TextLink } from '../TextLink/TextLink';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Transactional Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    withBackground: {
      control: {
        type: 'boolean',
      },
    },
    boldLinks: {
      control: { type: 'boolean' },
    },
    boldText: {
      control: { type: 'boolean' },
    },
    noVisited: {
      control: { type: 'boolean' },
    },
  },
  args: {
    withBackground: false,
    boldLinks: false,
    boldText: false,
    noVisited: false,
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
    chromatic: { viewports: [1100] },
  },
};

const crumbs = [
  <TextLink key="home" to="#home">
    Home
  </TextLink>,
  <TextLink key="services" to="#services">
    Services
  </TextLink>,
  <Text key="immunisation">Immunisation</Text>,
];

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%">
      <Variant label="Default">
        <Breadcrumbs>{crumbs}</Breadcrumbs>
      </Variant>
      <Variant label="withBackground">
        <Breadcrumbs withBackground>{crumbs}</Breadcrumbs>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Text styles">
      <Variant label="boldLinks">
        <Breadcrumbs boldLinks>{crumbs}</Breadcrumbs>
      </Variant>
      <Variant label="boldText">
        <Breadcrumbs boldText>{crumbs}</Breadcrumbs>
      </Variant>
      <Variant label="noVisited">
        <Breadcrumbs noVisited>{crumbs}</Breadcrumbs>
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="Number of crumbs">
      <Variant label="Single crumb (current page only)">
        <Breadcrumbs>
          <Text>Home</Text>
        </Breadcrumbs>
      </Variant>
      <Variant label="Many crumbs: the middle ones collapse to an ellipsis when they don't fit">
        <Breadcrumbs>
          <TextLink to="#home">Home</TextLink>
          <TextLink to="#services">Health services</TextLink>
          <TextLink to="#region">Services in your region</TextLink>
          <TextLink to="#vaccinations">Vaccinations and immunisations</TextLink>
          <TextLink to="#children">Childhood immunisations</TextLink>
          <Text>Immunisation schedule</Text>
        </Breadcrumbs>
      </Variant>
      <Variant label="Long current page: wraps once the middle crumbs have collapsed">
        <Breadcrumbs>
          <TextLink to="#home">Home</TextLink>
          <TextLink to="#services">Health services</TextLink>
          <Text>Immunisation schedule for babies, children and young people</Text>
        </Breadcrumbs>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = {
  controls: { disable: true },
  // Each Breadcrumbs is a navigation landmark with the fixed name "Breadcrumb". A page should only have one, but the
  // Overview shows several side by side, so the duplicate landmark names are expected here.
  a11y: { config: { rules: [{ id: 'landmark-unique', enabled: false }] } },
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

export const SingleCrumb = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <Text>Home</Text>
    </Breadcrumbs>
  );
};

SingleCrumb.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getAllByText('Home')).toHaveLength(1);
  await expect(canvasElement.querySelector('[aria-current="page"]')).toHaveTextContent('Home');
};
