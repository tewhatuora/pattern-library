import icons from '../Icon/icons';
import { InputLabel, InputLabelProps } from './InputLabel';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputLabel.docs.mdx';

export default {
  title: 'Input/InputLabel',
  component: InputLabel,
  argTypes: {
    heading: {
      defaultValue: 'Heading',
    },
    subheading: {
      defaultValue: 'Subheading',
    },
    tertiaryLabel: {
      defaultValue: 'Tertiary label',
    },
    tertiaryLabelIcon: {
      options: ['', ...Object.keys(icons)],
      control: { type: 'select' },
    },
    tertiaryLabelIconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
      defaultValue: 'left',
    },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: InputLabelProps) => {
  return <InputLabel {...args} />;
};
