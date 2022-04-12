# moh-design-system-poc

## Roadmap

- [ ] Set up vanilla-extract theme/styles (theme contract, mapping tokens)
- [ ] Set up docs site (MDX)
- [ ] Set up playroom (Prototyping tool)
- [ ] Set up bundling and package deployment
- [ ] Give it a cool name? e.g. Seek has 'Braid', MOH has...

## Inspirations

[Braid](https://github.com/seek-oss/braid-design-system)

## Setup

In your React project, first install the library:

```
$ npm install --save moh-design-system
```

At the root of your project, import the reset, required theme and `ThemeProvider` component.

```js
import myCovidRecordTheme from 'moh-design-system/themes/myCovidRecord';
import { ThemeProvider, Button } from 'moh-design-system';
// ...etc.
```

Finally, render the `ThemeProvider` component, providing the imported theme via the `theme` prop:

```js
import myCovidRecordTheme from 'moh-design-system/themes/myCovidRecord';
import { ThemeProvider, Button } from 'moh-design-system';

const App = () => {
  return (
    <ThemeProvider theme={myCovidRecordTheme}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  );
};
```

## Local development

Run the docs website by going into the `/docs/` folder and running:

```bash
yarn dev
```

---

## Storybook

Documentation can be created as `.stories.mdx` files inside the `./stories` directory. e.g. `Introduction.stories.mdx`

Create component stories as either a `.stories.mdx` or `.stories.{ts|tsx|js|jsx}` file. e.g. `Button.stories.tsx`

### Themes

See `.storybook/preview.js` for how themes are configured.

To run storybook:
```bash
yarn storybook
```