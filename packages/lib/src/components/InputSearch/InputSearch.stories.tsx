import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { InputSearch, InputSearchProps } from './InputSearch';
import DocsPage from '../../../utils/DocsPage';

import Docs from './InputSearch.docs.mdx';

export default {
  title: 'Forms/InputSearch',
  component: InputSearch,
  argTypes: {
    id: { control: false },
    name: { control: false },
    onChange: { control: false },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: InputSearchProps) => <InputSearch {...args} />;

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputSearchProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    ref?.current?.focus();
  }, [ref]);

  return <InputSearch {...args} ref={ref} />;
};
WithFocus.argTypes = {
  placeholder: {
    defaultValue: 'Search',
  },
};

export const Filled = (args: InputSearchProps) => {
  const [value, setValue] = useState<string | undefined>('Filled');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputSearch {...args} value={value} onChange={handleChange} />;
};

/**
 * Example with a form wrapping the
 * component to handle `onSubmit`
 * @param args
 * @constructor
 */
export const SearchFormExample = (args: InputSearchProps) => {
  return (
    <form action="/" method="GET" onSubmit={() => alert('Search submitted')}>
      <InputSearch {...args} />
    </form>
  );
};
