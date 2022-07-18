import { Content, ContentProps } from './Content';

export default {
  title: 'Components/Content',
  component: Content,
  argTypes: {
    headingAs: {
      control: {
        type: 'select',
        options: ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend'],
      },
    },
  },
};

export const Default = (args: ContentProps) => {
  return <Content {...args}>Content</Content>;
};
Default.args = {
  heading: 'Heading',
  subheading: 'Subheading',
  headingLevel: '1',
};
