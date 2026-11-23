import { useCallback, useEffect, useState } from 'react';

import { Pagination, PaginationProps } from './Pagination';
import Docs from './Pagination.docs.mdx';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

export default {
  title: 'Patterns/Pagination',
  component: Pagination,
  argTypes: {
    pages: {
      control: {
        type: 'number',
      },
    },
    current: {
      control: {
        type: 'number',
        min: 1,
      },
    },
    showPageButtons: {
      options: ['unset', 'true', 'false'],
      mapping: { unset: undefined, true: true, false: false },
      control: {
        type: 'radio',
        labels: { unset: 'unset (by screen size)', true: 'true', false: 'false' },
      },
    },
    onChange: {
      control: false,
    },
  },
  args: {
    pages: 13,
    current: 1,
    showPageButtons: 'unset',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Keeps its own page, so each example in the Overview can be clicked through
const Interactive = ({ current, ...props }: PaginationProps) => {
  const [page, setPage] = useState(current);
  return <Pagination {...props} current={page} onChange={setPage} />;
};

export const Overview = () => (
  <VariantSections>
    <Variants minWidth="100%" title="Position (showPageButtons, on their own row below desktop)">
      <Variant label="First page (no Previous)">
        <Interactive current={1} pages={13} showPageButtons />
      </Variant>
      <Variant label="Middle page (ellipses either side)">
        <Interactive current={7} pages={13} showPageButtons />
      </Variant>
      <Variant label="Last page (no Next)">
        <Interactive current={13} pages={13} showPageButtons />
      </Variant>
      <Variant label="Few pages (no ellipses)">
        <Interactive current={2} pages={4} showPageButtons />
      </Variant>
    </Variants>
    <Variants minWidth="100%" title="showPageButtons">
      <Variant label="false: page select instead of buttons">
        <Interactive current={4} pages={13} showPageButtons={false} />
      </Variant>
      <Variant label="unset: buttons on desktop, select on smaller screens">
        <Interactive current={4} pages={13} />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: PaginationProps) => {
  const { current } = args;
  const [page, setPage] = useState(current);

  useEffect(() => {
    setPage(current);
  }, [current]);

  const handleChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  return <Pagination {...args} current={page} onChange={handleChange} />;
};
