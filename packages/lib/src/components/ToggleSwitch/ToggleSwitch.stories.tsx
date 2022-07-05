import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import DocsPage from '../../../utils/DocsPage';

import Docs from './ToggleSwitch.docs.mdx';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    label: {
      defaultValue: 'ToggleSwitch Component',
    },
    headingLabel: {
      defaultValue: 'Heading',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: ToggleSwitchProps) => {
  return <ToggleSwitch {...args} />;
};
