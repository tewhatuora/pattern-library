import DocsPage from '../../packages/lib/utils/DocsPage';
import UseThemeDocs from '../UseTheme.mdx';

export default {
  title: 'Theme',
  argTypes: {},
  parameters: {
    docs: {
      page: () => <DocsPage docs={UseThemeDocs} />,
    },
  },
};
