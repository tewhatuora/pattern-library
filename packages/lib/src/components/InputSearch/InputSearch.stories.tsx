import { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';

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
    onSubmit: { control: false },
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

export const Default = (args: InputSearchProps) => {
  delete args.onSubmit;
  return <InputSearch {...args} />;
};

/**
 * Example with forwarding a ref, and using it
 * to focus() the underlying <input /> field
 * @param args
 * @constructor
 */
export const WithFocus = (args: InputSearchProps) => {
  delete args.onSubmit;
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
  delete args.onSubmit;
  const [value, setValue] = useState<string | undefined>('Filled');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputSearch {...args} value={value} onChange={handleChange} />;
};

export const OnFocusAndBlurEvent = (args: InputSearchProps) => {
  delete args.onSubmit;
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = '';
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.backgroundColor = 'yellow';
  };

  return <InputSearch {...args} onBlur={handleBlur} onFocus={handleFocus} />;
};

export const OnSubmitEvent = (args: InputSearchProps) => {
  const [value, setValue] = useState<string | undefined>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    alert(`Search for ${value}`);
  };

  return <InputSearch {...args} value={value} onChange={handleChange} onSubmit={handleSubmit} />;
};
