import { PropsWithChildren } from 'react';

import { Content, ContentProps } from './Content';
import Docs from './Content.docs.mdx';

import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

const headingLevels = ['1', '2', '3', '4', '5'] as const;

export default {
  title: 'Components/Content',
  component: Content,
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    headingLevel: {
      options: headingLevels,
      control: { type: 'select' },
    },
    subheading: {
      control: {
        type: 'text',
      },
    },
    headingAs: {
      options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend'],
      control: {
        type: 'select',
      },
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Each example uses a `p` for its heading, so the overview doesn't add many headings to the page outline
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="260px" title="Heading level, with subheading">
      {headingLevels.map((level) => (
        <Variant key={level} label={`headingLevel="${level}"`}>
          <Content heading="Heading" headingAs="p" headingLevel={level} subheading="Subheading">
            Body text sits under the heading.
          </Content>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="260px" title="Without subheading">
      {headingLevels.map((level) => (
        <Variant key={level} label={`headingLevel="${level}"`}>
          <Content heading="Heading" headingAs="p" headingLevel={level}>
            Body text sits under the heading.
          </Content>
        </Variant>
      ))}
    </Variants>
    <Variants minWidth="320px" title="Long content">
      <Variant label="Wraps">
        <Content
          heading="A long heading that wraps onto a second line when space runs out"
          headingAs="p"
          headingLevel="2"
          subheading="A long subheading that also wraps onto another line"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient sit consequat nisl, lectus sed sit. Dui
          turpis vestibulum, scelerisque tristique amet augue facilisis.
        </Content>
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: PropsWithChildren<ContentProps>) => {
  return <Content {...args} />;
};
Default.args = {
  children: 'Content',
  heading: 'Heading',
  subheading: 'Subheading',
  headingLevel: '1',
};
