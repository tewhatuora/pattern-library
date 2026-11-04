import { ElementType } from 'react';
import { ArgTypes, Description, Primary, Subtitle, Title } from '@storybook/addon-docs/blocks';

import { Classnames } from '../../../stories/components';

const DocsPage = (props: { docs: ElementType }) => {
  const Docs = props.docs;
  return (
    <>
      <div className="patternlibrary__docs">
        <Title />
        <Subtitle />
      </div>
      {/* The first story: each component's Overview, showing its main variations together. Outside the docs wrapper,
          whose link styles would restyle the components */}
      <Primary />
      <div className="patternlibrary__docs">
        <Docs />
        <hr />
        <Description />
      </div>
      <hr />
      <h3>Props</h3>
      <ArgTypes />
      <hr />
      <Classnames />
      {/*<ArgsTable story={PRIMARY_STORY} />*/}
      {/*<Stories />*/}
    </>
  );
};

export default DocsPage;
