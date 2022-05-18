# @mohnz/design-system

## Roadmap

- [X] Set up vanilla-extract theme/styles (theme contract, mapping tokens)
- [X] ~~Set up docs site (MDX)~~
- [X] ~~Set up playroom (Prototyping tool)~~
- [X] Set up Storybook for docs
- [ ] Set up bundling and package deployment
- [ ] Give it a cool name? e.g. Seek has 'Braid', MOH has...

## Inspirations

[Braid](https://github.com/seek-oss/braid-design-system)

## Setup

### Development

Checkout this repository, and install the dependencies:
```bash
$ yarn
```

Install `yarn` workspace plugin:
```bash
$ yarn plugin import workspace-tools
```
### Usage
In your React project, first install the library:

```bash
$ yarn add @mohnz/design-system
```

At the root of your project, import the reset, required theme and `ThemeProvider` component.

```js
import myCovidRecordTheme from '@mohnz/design-system/themes/myCovidRecord';
import { ThemeProvider, Button } from '@mohnz/design-system';
// ...etc.
```

Finally, render the `ThemeProvider` component, providing the imported theme via the `theme` prop:

```jsx
import myCovidRecordTheme from '@mohnz/design-system/themes/myCovidRecord';
import { ThemeProvider, Button } from '@mohnz/design-system';

const App = () => {
  return (
    <ThemeProvider theme={myCovidRecordTheme}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  );
};
```

---

## Storybook

Documentation can be created as `.stories.mdx` files inside the `./stories` directory. e.g. `Introduction.stories.mdx`

Create component stories as either a `.stories.mdx` or `.stories.{ts|tsx|js|jsx}` file. e.g. `Button.stories.tsx`

### Themes

See `.storybook/preview.js` for how themes are configured.

To run storybook:
```bash
$ yarn storybook
```