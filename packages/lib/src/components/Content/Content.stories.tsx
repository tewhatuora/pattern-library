import { Content, ContentProps } from './Content';
import { ContrastWrapper } from '../Storybook/ContrastWrapper';
import Docs from './Content.docs.mdx';

import DocsPage from '../../../utils/DocsPage';

export default {
  title: 'Components/Content',
  component: Content,
  argTypes: {
    subheading: {
      control: {
        type: 'text',
      },
    },
    headingAs: {
      control: {
        type: 'select',
        options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend'],
      },
    },
    variant: {
      defaultValue: 'light',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: ContentProps) => {
  return (
    <ContrastWrapper variant={args.variant}>
      <Content {...args}>Content</Content>
    </ContrastWrapper>
  );
};
Default.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  headingLevel: '1',
};
