# Pattern library themes

`@healthnz/pattern-library-themes`

### Configuration

[Style Dictionary](https://amzn.github.io/style-dictionary/) can output design tokens for multiple platforms from a single source.

Add your platform to `config.js`.
For example, a web platform with a built in format and a custom format:

```json
"platforms": {
  "web": {
    "transformGroup": "js",
    "files": [
      {
        "format": "javascript/es6",
        "destination": "theme.ts"
      },
      {
        "format": "myCustomFormat",
        "destination": "myCustomFormat.ts"
      },
    ]
  }
}
```

#### Custom formats

Create a file for your platform (e.g `ios.js`) in `scripts/formats`.
```js
const registerFormats = (StyleDictionary) => {
  StyleDictionary.registerFormat({
    name: 'ios/swift-custom-formatter',
    formatter: function ({ options }) {
      return `
        
      `;
    }
  });
  
  // Register more formats here
};

export default registerFormats;
```

Add the formatter to the platform's `files` array in `config.js`:

```json
"platforms": {
  "files": [
    {
      "format": "ios/swift-custom-formatter",
      "destination": "MyCustomFormat.swift"
    }
  ]
}
```

---

### Usage

1. Export tokens from Figma using the [Design tokens plugin](https://github.com/lukasoppermann/design-tokens).

2. Place the exported `.json` file(s) into `input/themes/[themeName]`.

3. Commit the changes, and GitLab CI will:
   - Run Style Dictionary transforms on the tokens.
   - Publish a new release of the package to NPM. 

Once published, the updated theme will be available in the next version.

#### JavaScript (Vanilla Extract)
```js
import { myTheme } from '@healthnz/pattern-library-themes';

...

<ThemeProvider theme={myTheme}>
  ...
</ThemeProvider>
```
