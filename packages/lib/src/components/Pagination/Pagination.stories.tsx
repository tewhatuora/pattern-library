import { useCallback, useEffect, useState } from 'react';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    pages: {
      control: {
        type: 'number',
      },
      defaultValue: 13,
    },
    current: {
      disabled: true,
    },
  },
};

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
