# Te Whatu Ora Anatomic design system

[![npm version](https://badge.fury.io/js/@te-whatu-ora%2Fanatomic.svg)](https://badge.fury.io/js/@te-whatu-ora%2Fanatomic)
[![storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://main--630296ff1edaa813b72e85c0.chromatic.com/)

## Table of contents

- [Te Whatu Ora Anatomic design system](#te-whatu-ora-anatomic-design-system)
  - [Table of contents](#table-of-contents)
  - [Inspirations](#inspirations)
  - [Setup](#setup)
  - [Development](#development)
    - [Pre commit hooks](#pre-commit-hooks)
    - [Build](#build)
  - [Monorepo](#monorepo)
    - [Design system library](#design-system-library)
    - [Themes](#themes)
  - [Storybook](#storybook)
    - [Themes](#themes-1)
  - [Releasing](#releasing)
    - [Prereleases](#prereleases)
  - [GitLab CI/CD Jobs](#gitlab-cicd-jobs)


## Inspirations

[Braid](https://github.com/seek-oss/braid-design-system)

## Setup

Checkout this repository, and install the dependencies:
```bash
$ yarn
```

Add the MOH remote repository:
```bash
$ git remote add https://gitlab.com/healthnz-ult/c3/anatomic.git
```

Build the themes package. First, navigate to the themes package:
```shell
cd package/themes
```

Next, build the package with:
```shell
yarn build
```

Then navigate back to the root of the project:
```shell
cd ../..
```

And now Storybook will work.

---

### Pre commit hooks

The repo has a pre-commit hook setup, which uses `lint-staged` to run `prettier` to format code, `eslint` for linting and `tsc` for TypeScript type checking.

These can be run separately and individually too:

```bash
# Prettier: format code
$ yarn lint:format
# ESLint: Lint code
$ yarn lint:fix
# TSC: Type check
$ yarn lint:types
```

### Build

Building the packages is done via GitLab CI, but if you want/need to build the packages, the following will build both the `themes` and `lib` packages:

```bash
$ yarn build
```

This is useful when making theme changes and reflecting the changes in the lib package.

## Monorepo
This project is set up as a monorepo, with a package for the design system library -
all the React components and a package for the themes, generated with style-dictionary.

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

## Releasing

Please read the [contributing guide](./CONTRIBUTING.md) before working on this repository.

TL;DR:
- Create branch
- Do work, [commit](./CONTRIBUTING.md) changes & push to `origin`
- Create merge request
- Review Chromatic/Storybook changes
- `cd` into the package that you want to update (`packages/lib` or `packages/themes`)
- Create new `major`, `minor` or `patch` release.
- Merge request is approved
- Merge

### How to release a new version:

- Always work on a feature branch e.g. `feature/my-feature`, branched off `main`.
- Ensure you commit your changes using the [commit conventions](./CONTRIBUTING.md) outlined in the contributing guide.
- Push your branch, and open a new merge request
  - This will deploy the branch to Chromatic
  - This pipeline will fail with [exit code 1](https://www.chromatic.com/docs/cli#exit-codes) if there are visual changes detected.
  - Approve or deny the changes in Chromatic, and re-run the pipeline.
  - **Release a new version to NPM**
    >  The process is the same for publishing a release for `@te-whatu-ora/anatomic` & `@te-whatu-ora/anatomic-themes`.
    - <details>
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
      
      </details>

    - <details>
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
        $ git push origin @te-whatu-ora/anatomic-themes@1.0.1
        ```
          
        This will run the CI/CD pipeline to:
          
        - Publish the package to `npm`.
      </details>
  - If Chromatic is successful, and your merge request has been approved, you may merge into `main`.
--- 

### Prereleases

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

--- 

## GitLab CI/CD Jobs

Set job images to `${CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX}/<DOCKER_IMAGE>` (e.g. `image: ${CI_DEPENDENCY_PROXY_DIRECT_GROUP_IMAGE_PREFIX}/node:20.11.1-alpine`). This will use the GitLab image proxy which will pull from Docker Hub the first time, then cache the image. This prevents the runner from hitting the Docker Hub rate limit.

**If this doesn't work for whatever reason, or you need to use a custom docker image, follow these instructions:**

Docker images for jobs must be pulled from GitLab's my-record-web Container Registry and not Docker Hub (default). Docker Hub has a maximum number of pulls every six hours and when this gets reached, every pipeline fails for six hours, preventing any deployment.

1. to save a Docker image to the project's Container Registry you must first have Docker installed: https://docs.docker.com/get-docker/.
2. you must have a [personal or project GitLab access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
3. login to the container registry
   ```sh
   TOKEN=<token>
   docker login registry.gitlab.com -u <username> --password-stdin <<<$TOKEN
   ```
4. pull the image you want to use with docker (the GitLab runners have a x86_64 CPU architecture, so you must specify "linux/amd64" as the platform)
   ```sh
   docker pull --platform linux/amd64 node:15.14.0-alpine
   ```
5. retag the image so it will be pushed to the correct container registry
   ```sh
   docker tag node:15.14.0-alpine registry.gitlab.com/healthnz-ult/c3/my-record-web/node:15.14.0-alpine
   ```
6. push the image to the project's container registry:
   ```sh
   docker push registry.gitlab.com/healthnz-ult/c3/my-record-web/node:15.14.0-alpine
   ```
7. use the newly pushed image in the [.gitlab-ci.common.yml](./.gitlab-ci.common.yml) file.
   ```yml
   image: 'registry.gitlab.com/healthnz-ult/c3/my-record-web/node:15.14.0-alpine'
   ```
