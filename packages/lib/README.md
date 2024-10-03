# Design Pattern Library

`@healthnz/pattern-library`

# Installation

To install the pattern library, open a terminal at the root of your project workspace and run the following command:

```bash
$ yarn add @healthnz/pattern-library
$ # or using NPM
$ npm install @healthnz/pattern-library
```

The command will install all pattern library packages in the node_modules folder of your application.

## Include fonts
The pattern library uses the Google Font "Fira Sans". Include the resources in your HTML.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
```

## Import styles
The pattern library styles include a CSS bootstrap and the component styles.

To import styles add the following import declaration to your root app:

CSS in JS
```js
import '@healthnz/pattern-library/styles';
```

## Configure your application
Below is an example of how to configure an application with a pre-constructed theme object:

```tsx
import '@healthnz/pattern-library/styles';
import { ThemeProvider } from '@healthnz/pattern-library';
import { neutral } from '@healthnz/pattern-library-themes';

<ThemeProvider theme={neutral.className}>
  <App />
</ThemeProvider>
```

Instead of hardcoding the foundation values in the pattern library, we choose to implement a theming system allowing applications to supply their core values to the library.

The theming system introduced a concept of theme object. To configure it, you'll need to build your own theme object or import a pre-constructed one from the pattern library. The theme object will be used to render the foundation variables and define a theme provider at the root of your application.

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
