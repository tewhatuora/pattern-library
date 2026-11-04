# Pattern library themes

`@healthnz/pattern-library-themes`

Themes for `@healthnz/pattern-library`, generated from design tokens with [Style Dictionary](https://styledictionary.com/).

## Usage

Install it alongside the pattern library, which lists it as a peer dependency, and import its styles once at the root of your app:

```tsx
import '@healthnz/pattern-library/styles';
import '@healthnz/pattern-library-themes/styles';
import { ThemeProvider } from '@healthnz/pattern-library';
import { neutral } from '@healthnz/pattern-library-themes';

<ThemeProvider theme={neutral}>
  <App />
</ThemeProvider>
```

Available themes: `neutral` and `webSelfService`.

## Updating a theme

1. Export the tokens from Figma with the [Design Tokens plugin](https://github.com/lukasoppermann/design-tokens).
2. Replace the `.json` file in `input/themes/<themeName>/`. A new folder adds a new theme, exported by the folder name.
3. Run `yarn build` in this package to check the output. It runs `scripts/generate.js` (Style Dictionary) and then Vite.
4. Release a new version as described in the [repository README](../../README.md#releasing).

## Configuration

`config.json` lists the platforms Style Dictionary builds and the format used for each output file. Custom transforms and formats for a platform are registered in `scripts/formats/<platform>.js`, which `generate.js` loads automatically:

```js
const registerFormats = (StyleDictionary) => {
  StyleDictionary.registerFormat({
    name: 'typescript/my-format',
    format: async ({ dictionary }) => `export default ${JSON.stringify(dictionary.tokens)};\n`,
  });
};

export default registerFormats;
```

Then reference it from the platform's `files` in `config.json`:

```json
{ "format": "typescript/my-format", "destination": "myFormat.ts" }
```
