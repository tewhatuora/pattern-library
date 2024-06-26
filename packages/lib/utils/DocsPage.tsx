import { ElementType } from 'react';
import { ArgsTable, Description, PRIMARY_STORY, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';

import { Classnames } from '../../../stories/components';

const DocsPage = (props: { docs: ElementType }) => {
  const Docs = props.docs;
  return (
    <>
      <div className="anatomic__docs">
        <Title />
        <Subtitle />
        <Docs />
        <hr />
        <Description />
      </div>
      <Classnames />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </>
  );
};

export default DocsPage;
