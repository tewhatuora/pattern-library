# Te Whatu Ora Anatomic design system

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
$ yarn add @te-whatu-ora/anatomic
```

At the root of your project, import the CSS, required theme and `ThemeProvider` component.

```js
import '@te-whatu-ora/anatomic/styles';
import { ThemeProvider, Button } from '@te-whatu-ora/anatomic';
import { myCovidRecordTheme } from '@te-whatu-ora/anatomic-themes';

// ...

```
Finally, render the `ThemeProvider` component, providing the imported theme via the `theme` prop:

```jsx
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