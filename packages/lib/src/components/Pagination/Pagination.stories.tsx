import { useCallback, useState } from 'react';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    pages: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Default = (args: PaginationProps) => {
  const [current, setCurrent] = useState(1);

  const handleChange = useCallback(
    (page: number) => {
      setCurrent(page);
    },
    [setCurrent],
  );

  return <Pagination {...args} current={current} onChange={handleChange} />;
};
