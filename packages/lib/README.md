# Design Pattern Library

`@healthnz/pattern-library`


# Installation

To install the pattern library, open a terminal at the root of your project workspace and run the following command:

```bash
$ yarn add @healthnz/pattern-library @healthnz/pattern-library-themes
$ # or using NPM
$ npm install @healthnz/pattern-library @healthnz/pattern-library-themes
```

The themes package is a peer dependency, so your app provides the themes and the library shares them.

## Include fonts
Each theme uses Google Fonts. Include the ones for your theme in your HTML (in Next.js, `app/layout.tsx` or `pages/_document.tsx`).

`neutral` uses Poppins:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap" rel="stylesheet" />
```

`webSelfService` uses Public Sans:

```html
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
```

## Import styles
The pattern library styles include a CSS bootstrap and the component styles, and the themes styles define each theme's values.

Import both once, at the root of your app: `app/layout.tsx` or `pages/_app.tsx` in Next.js, `app/root.tsx` in React Router, or your entry file in a Vite app.

```js
import '@healthnz/pattern-library/styles';
import '@healthnz/pattern-library-themes/styles';
```

## Configure your application
Below is an example of how to configure an application with a pre-constructed theme object:

```tsx
import '@healthnz/pattern-library/styles';
import '@healthnz/pattern-library-themes/styles';
import { ThemeProvider } from '@healthnz/pattern-library';
import { neutral } from '@healthnz/pattern-library-themes';

<ThemeProvider theme={neutral}>
  <App />
</ThemeProvider>
```

Instead of hardcoding the foundation values in the pattern library, we choose to implement a theming system allowing applications to supply their core values to the library.

The theming system introduced a concept of theme object. To configure it, you'll need to build your own theme object or import a pre-constructed one from the pattern library. The theme object will be used to render the foundation variables and define a theme provider at the root of your application.

### Server components (Next.js App Router)
Every component is a client component, and can be rendered from a server component. Compound components are also exported by name for this, because a server component can't dot into a client module: use `<DialogRoot>`, `<HeaderRoot>`, `<NavigationItem>` and so on, or use `<Dialog.Root>` from a file marked `'use client'`.

### Testing
Components need a `ThemeProvider`, so wrap them in one when rendering in tests. jsdom lacks two browser APIs the library uses, so stub them in your test setup file:

```ts
window.matchMedia ??= (query) =>
  ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList;
globalThis.ResizeObserver ??= class { observe() {} unobserve() {} disconnect() {} };
```

### Component props
Each component's props are documented in its types, so your editor shows them on hover and in autocomplete. The [Storybook](https://main--630296ff1edaa813b72e85c0.chromatic.com/) has live examples and a props table for every component.

### Start creating components
You're all set! You can start creating your application with the pattern library:

```tsx
import { Container, Text, Button } from '@healthnz/pattern-library';

export const App = () => (
  <Container>
    <Text>Hello World!</Text>
    <Button variant="primary">Primary button</Button>
  </Container>
);
```
