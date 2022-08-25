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

## Monorepo
This project is setup as a monorepo, with a package for the design system library -
all of the React components and a package for the themes, generated with style-dictionary.

### Design system library

`@te-whatu-ora/anatomic`

See the [documentation](packages/lib/README.md) for the design system package.

### Themes

`@te-whatu-ora/anatomic-themes`

See the [documentation](packages/themes/README.md) for the themes package.

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

Storybook will open in your browser at [http://localhost:9009/](http://localhost:9009/)

---

# Releasing

- Update [CHANGELOG.md](CHANGELOG.md) with release notes
