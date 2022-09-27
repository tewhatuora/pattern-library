# Te Whatu Ora Anatomic design system

[![npm version](https://badge.fury.io/js/@te-whatu-ora%2Fanatomic.svg)](https://badge.fury.io/js/@te-whatu-ora%2Fanatomic)
[![storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://main--630296ff1edaa813b72e85c0.chromatic.com/)

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

## Workflow

Please read the [contributing guide](./CONTRIBUTING.md) before working on this repository.

- Always work on a feature branch e.g. `feature/my-feature`, branched off `main`.
- Ensure you commit your changes using the [commit conventions](./CONTRIBUTING.md) outlined in the contributing guide.
- Push your branch, and open a new merge request
  - This will deploy the branch to Chromatic
  - This pipeline will fail with [exit code 1](https://www.chromatic.com/docs/cli#exit-codes) if there are visual changes detected.
  - Approve or deny the changes in Chromatic, and re-run the pipeline.
  - If it is successful, and your merge request has been approved
  - [Storybook](https://-.chromatic.com/) will update with the changes.
- [Release the change to NPM](#releasing)

---

### Releasing

Checkout the `main` branch. `git checkout main && git pull`.

<details>
<summary>@te-whatu-ora/anatomic</summary>
To release a new version of the `@te-whatu-ora/anatomic` package on NPM, run one of the following from within `packages/lib`:

**PATCH** version when you make backwards compatible bug fixes:
```bash
# Patch version v1.0.0 => v1.0.1
$ yarn run patch
```

**MINOR** version when you add functionality in a backwards compatible manner:
```bash
# Minor version v1.0.0 => v1.1.0
$ yarn run minor
```

**MAJOR** version when you make incompatible API changes:
```bash
# Major version v1.0.0 => v2.0.0
$ yarn run major
```

This will:
- Bump the package version to the appropriate semver version.
  - Update the `CHANGELOG.md` with the commits/release notes seperated out into sections based on commit types.
  - Commit the changed files: `package.json`, `CHANGELOG.md` & `CURRENT_VERSION.md`.
  - Tag the commit with the new semver version number, e.g.: `v1.0.1`.

Next, push the commit **_and_** the new tag to origin/remote.

```bash
$ git push origin v1.0.1
```

This will run the CI/CD pipeline to:

- Publish the package to `npm`.
  - Create a [release in GitLab](https://gitlab.com/healthnz-ult/c3/anatomic/-/releases), with the new version's release notes.
- </details>


<details>
<summary>@te-whatu-ora/anatomic-themes</summary>
To release a new version of the `@te-whatu-ora/anatomic-themes` package on NPM, run one of the following from within `packages/themes`:

**PATCH** version when you make backwards compatible bug fixes:
```bash
# Patch version v1.0.0 => v1.0.1
$ yarn run patch
```

**MINOR** version when you add functionality in a backwards compatible manner:
```bash
# Minor version v1.0.0 => v1.1.0
$ yarn run minor
```

**MAJOR** version when you make incompatible API changes:
```bash
# Major version v1.0.0 => v2.0.0
$ yarn run major
```

This will:
- Bump the package version to the appropriate semver version.
  - Commit the changed files: `package.json`
  - Tag the commit with the package name and new semver version number, e.g.: `@te-whatu-ora/anatomic-themes@1.0.1`.

Next, push the commit **_and_** the new tag to origin/remote.

```bash
$ git push origin v1.0.1
```

This will run the CI/CD pipeline to:

- Publish the package to `npm`.
</details>

## Prereleases

For prereleases, include the `--prerelease` flag, with a tag/channel name e.g. `beta`.
This is useful to release testable/beta versions without affecting the latest release.

```bash
$ yarn minor --prerelease beta 
```
For `v1.0.0`, this will publish a prerelease version to NPM as `v1.1.0-beta.0`

Users can install the prerelease version with:

```bash
# yarn
$ yarn add @te-whatu-ora/anatomic@beta
# npm
$ npm install @te-whatu-ora/anatomic@beta
```

`v1.0.0` will still work with
```bash
$ yarn add @te-whatu-ora/anatomic
```
