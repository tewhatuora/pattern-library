import { expect, within } from 'storybook/test';
import { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';

import { InputSearch, InputSearchProps } from './InputSearch';
import DocsPage from '../../../utils/DocsPage';
import { Variant, VariantSections, Variants } from '../../../../../stories/components';

import Docs from './InputSearch.docs.mdx';

export default {
  title: 'Transactional Components/InputSearch',
  component: InputSearch,
  argTypes: {
    id: { control: false },
    name: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    // Controlled by the Filled and OnSubmitEvent stories
    value: { control: false },
    submitLabel: {
      control: {
        type: 'text',
      },
    },
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    'aria-labelledby': {
      control: {
        type: 'text',
      },
    },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
    onSubmit: { control: false },
  },
  args: {
    name: 'search',
    placeholder: 'Search',
  },
  parameters: {
    docs: {
      page: () => <DocsPage docs={Docs} />,
    },
  },
};

// Distinct names, so the fields can be told apart when shown together
export const Overview = () => (
  <VariantSections>
    <Variants minWidth="280px">
      <Variant label="Empty">
        <InputSearch aria-label="Search, empty" name="search-empty" />
      </Variant>
      <Variant label="Placeholder">
        <InputSearch aria-label="Search, placeholder" name="search-placeholder" placeholder="Search for a service" />
      </Variant>
      <Variant label="Filled, with clear button">
        <InputSearch aria-label="Search, filled" defaultValue="Flu vaccination" name="search-filled" />
      </Variant>
    </Variants>
    <Variants minWidth="280px" title="Long content">
      <Variant label="Long value">
        <InputSearch
          aria-label="Search, long value"
          defaultValue="Flu vaccinations for children under five at clinics near Wellington"
          name="search-long"
        />
      </Variant>
      <Variant label="Long placeholder">
        <InputSearch
          aria-label="Search, long placeholder"
          name="search-long-placeholder"
          placeholder="Search for a service, clinic, or health topic by name"
        />
      </Variant>
    </Variants>
  </VariantSections>
);
Overview.parameters = { controls: { disable: true } };

export const Default = (args: InputSearchProps) => {
  delete args.onSubmit;
  return <InputSearch {...args} />;
};

Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument();
  await expect(canvas.getByRole('button', { name: 'Search' })).toBeInTheDocument();
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
