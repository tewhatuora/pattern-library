import { ArgsTable, Description, PRIMARY_STORY, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';

const DocsPage = (props) => {
  const Docs = props?.docs || null;
  return (
    <>
      <div className="anatomic__docs">
        <Title />
        <Subtitle />
        <Docs />
        <hr />
        <Description />
      </div>
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

export default DocsPage;
