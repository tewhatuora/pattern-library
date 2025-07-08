import { ElementType } from 'react';
import { ArgTypes, Description, Subtitle, Title } from '@storybook/addon-docs';

import { Classnames } from '../../../stories/components';

const DocsPage = (props: { docs: ElementType }) => {
  const Docs = props.docs;
  return (
    <>
      <div className="patternlibrary__docs">
        <Title />
        <Subtitle />
        <Docs />
        <hr />
        <Description />
      </div>
      <hr />
      <h3>Props</h3>
      <ArgTypes />
      <hr />
      <Classnames />
      {/*<Primary />*/}
      {/*<ArgsTable story={PRIMARY_STORY} />*/}
      {/*<Stories />*/}
    </>
  );
};

export default DocsPage;
