import { Content, ContentProps } from './Content';

export default {
  title: 'Components/Content',
  component: Content,
};

export const Default = (args: ContentProps) => {
  return <Content {...args}>Content</Content>;
};
