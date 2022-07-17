import { Content } from './Content';

export default {
  title: 'Components/Content',
  component: Content,
};

export const Default = () => {
  return (
    <Content heading="Heading" headingLevel="2" subheading="Subheading">
      Content
    </Content>
  );
};
