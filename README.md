<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tewhatuora/standards-template">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./static/img/two-dark-theme-logo.svg">
      <img alt="Health New Zealand Te Whatu Ora Logo" src="./static/img/two.svg" width="50%">
    </picture>
  </a>

  <h3 align="center">Health New Zealand | Te Whatu Ora API Development and Security Standards</h3>

  <p align="center">
    This GitHub repository serves as both a template example and user guide, of how to publish HNZ collateral (standards, guides, Glossaries etc) using github and the tooling built in to this project. The template is based on the HNZ API Standards developed by Middleware NZ for HNZ. The idea is that by copying and editing this project, more HNZ collateral can be published for consumption with minimum development effort <a href="https://apistandards.digital.health.nz">https://apistandards.digital.health.nz</a>.
    <br />
    <br />
    <a href="https://tewhatuora.github.io/standards-template/">The example output</a>
    ·
    <a href="https://github.com/tewhatuora/standards-template/issues">Submit feedback</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

# Getting Started

### Using this template

The best way to use this template to create your own standards is to use this repository as a template to create your own duplicate repository. You can then edit and update this new repository as you need.

There are a number of ways to do this but the simplest is to use the [GitHub Client](https://cli.github.com/)

Once you have [installed the GitHub client](https://github.com/cli/cli#installation) and [authenticated the client](https://cli.github.com/manual/gh_auth) you can use this repository as a template.  

To create a `private` repository

```bash
gh repo create your-github-org/your-new-repo-name --template tewhatuora/standards-template --private
```

To create a `public` repository

```bash
gh repo create your-github-org/your-new-repo-name --template tewhatuora/standards-template --public
```

This will create a repository in GitHub that you can now update as you please.

Example output

```sh
  gh repo create tewhatuora/template-test1 --template tewhatuora/standards-template --public
    ✓ Created repository tewhatuora/template-test1 on GitHub
      https://github.com/tewhatuora/template-test1
  git clone git@github.com:tewhatuora/template-test1.git
    Cloning into 'template-test1'...
    remote: Enumerating objects: 101, done.
    remote: Counting objects: 100% (101/101), done.
    remote: Compressing objects: 100% (88/88), done.
    remote: Total 101 (delta 5), reused 90 (delta 3), pack-reused 0
    Receiving objects: 100% (101/101), 1.18 MiB | 837.00 KiB/s, done.
    Resolving deltas: 100% (5/5), done.
```

### Editing a repository

There are many ways to your new repository. For those new to use with github, this can be most simply achieved by "cloning" the repository onto your own machine and using your favorite editor such as Virtual Studio Code to create your content. 

### Local Running

Once you have the project cloned onto your machine, you will likely want to "run" it locally, allowing you to see the current form of the content, allowing you to check your work as you make changes. 

These are the steps you will need to perform in order to achieve this:

1. Install the [Node.js runtime.](https://nodejs.org/en/download), which allows us to run Javascript code.
2. Install NPM packages.

  This project uses external packages (tools and libraries), which we need to install in order for everything to work properly. Run the command below,
  in the root of the project.

   ```sh
   npm install
   ```

4. Start the website in development

Run the command below to then render the output.

   ```sh
   npm start
   ```

Once you have done this you can view your project's output at 'http://localhost:3000/' in a browser.

<!-- Content -->

# Content 

## Content Editing and Management

All of the content that is displayed in the generated output is housed/found in the `docs` folder of the project. The content is structured in 
in a series of "markdown" files, each corresponding to its own page. Note that the structures of the files within folders matches the manner in which they are displayed in the right hand side bar on the output. 

These markdown files can be edited, any text editor can be used, or the GitHub user interface. In order to view the changes you have made to your project, follow the steps explained in the "Local Run" section below.

### Spell check and formatting

There a couple of tools that help to check in the spelling and formatting of the content in the "docs" files is correct.

In order to check that formatting of the markdown is correct, you can perform markdown linting by running the following command:

```sh
npm run markdownlint
```

And in order to run a spell check:

```sh
npm run spellcheck
```

Any words that do not appear in the default dictionaries used by the spellchecker can be added to the [projects dictionaries defined here.](/dictionaries)

Any issues with the [markdown linting](https://github.com/DavidAnson/markdownlint) can be overridden across the project in the [configuration file .markdownlint.jsonc](.markdownlint.jsonc) or overridden per file by adding the following comment to the file.

```html
<!-- markdownlint-disable MD024 MD036 MD040 MD041 MD051 -->
```

<!- Standards>

## Standards

We have defined a component called a "standard"; essentially a rule that follows a given format. We have tooling that runs when then output is built, which achieves two things:

- Inserts "tool-tips", a block of supportive/explanatory text that appears when a given standard is hovered over.
- Extracts all the standards, and generates a master checklist, which provides a complete list of all outcomes that anyone following your standards will need to adhere to.

### "Standard" Component Attributes

- `id`: A unique identifier for the rule. It follows the pattern `HNZAS_<RULE_TYPE>_<SHORT_DESCRIPTION>`.

- `type`: The type of rule, such as MUST, SHOULD, MAY, SHOULD_NOT, MUST_NOT.

- `toolTip`: A brief description that appears as a tooltip when hovering over the rule.

- `wrapper`: The HTML tag used to wrap the text, commonly `li` for list items or `span` for inline text.

- `dupe`: A boolean (true/false) attribute that indicates if the rule is a duplicate of another rule. This is used to prevent the rule from being included twice in the master checklist.


### Basic Usage

To wrap a piece of text in an `ApiStandard` component, use the following structure:

Note that the `ApiStandard id=` value must match the following regular expression

`^HNZAS_(MUST|MUST_NOT|SHOULD|SHOULD_NOT|MAY)_[\w_]+$`

```jsx

<ApiStandard id="UNIQUE_ID" type="RULE_TYPE" toolTip="Description of the rule." wrapper="li">

  Your text here

</ApiStandard>

```

### Example

```jsx

<ApiStandard id="HNZAS_MUST_USE_TLS" type="MUST" toolTip="All communications to or from an API MUST use TLS 1.3 or higher." wrapper="li">

  All communications to or from an API **MUST** use TLS 1.3 or higher.

</ApiStandard>

```

## Trends and Common Patterns

### Single Line Rules

When documenting simple rules, wrap the rule text in an `ApiStandard` component:

```jsx

<ApiStandard id="HNZAS_SHOULD_HAVE_HOME_PAGE" type="SHOULD" toolTip="A FHIR IG should have a home page with a clear high level description of the implementation." wrapper="li">

  A FHIR IG **SHOULD** have a home page: "A clear high level description of the implementation"

</ApiStandard>

```

### Multiple Sentences

For more complex rules that span multiple sentences, ensure each sentence is clear and the entire rule is wrapped:

```jsx

<ApiStandard id="HNZAS_MUST_PUBLISH_CAPABILITY_STATEMENT" type="MUST" toolTip="FHIR APIs MUST publish a CapabilityStatement resource at the {{API_URL}}/metadata endpoint." wrapper="li">

  FHIR APIs **MUST** publish a **CapabilityStatement** resource at the `{{API_URL}}/metadata` endpoint.

</ApiStandard>

```

### Lists of Requirements

When listing multiple requirements, each item should be wrapped individually:

```jsx

<ApiStandard id="HNZAS_MUST_USE_TLS" type="MUST" toolTip="All communications to or from an API MUST use TLS 1.3 or higher." wrapper="li">

  All communications to or from an API **MUST** use TLS 1.3 or higher.

</ApiStandard>

<ApiStandard id="HNZAS_MUST_ENCRYPT_TOKENS" type="MUST" toolTip="Tokens MUST be encrypted." wrapper="li">

  Tokens **MUST** be encrypted.

</ApiStandard>

```

## Markdown Tips

Markdown is a simple language that can be converted to stylised HTML content to be rendered on a web page. There are a number of tips [here](https://www.markdownguide.org/basic-syntax/) to get you started.

## Diagrams as Code

The preference in this repo is to produce diagrams as code. The tooling that we are using utilises [plantuml](https://plantuml.com) as the primary diagramming tool. The preference is for these diagrams to be included inline in the markdown.

When creating plantuml diagrams there are a number of examples already in the repository and you will find a bunch of snippets [here](./plantuml)

# Technical Considerations and Customisation

## Docusaurus Configuration

Docusaurus is the tool that is used for building the output, it is a static site generator. It is configured using the docusaurus.config.js file. There are a few things in here that you will need to adjust when altering this:

  - Updating the URL (and base URL if needed)
  - Updating the project name which is used for the Github pages deployment. The organization name may need to be updated too.

## Versioning

The template comes with a versioning component built in. This utilises the docusaurus native [versioning](https://docusaurus.io/docs/versioning) functionality. The template will give you version `1.1` and `Draft`. This is for example only. To create a new version for your new repo delete the contents of the `versioned_docs/version-1.1` directory and `versioned_sidebars` directory. Also delete the `versions.json` file. Create a new version as per the docusaurus documentation e.g.

```sh
npm run docusaurus docs:version 1.1
```

This command will create a copy of the content in your `docs` directory in the `versioned_docs` directory. The content in `docs` is now considered to be draft content. Versions can be navigated to using the version dropdown menu (top right of screen). Note that `draft` content will have a banner indicating that it is unpublished content.

Also note that versioning can be complicated. If your documentation does not require this functionality you should remove the versioned documents and json file as well as removing or commenting out the version configuration in `docusaurus.config.js`.

```json
versions: {
  current: {
    label: 'Draft',
    path: 'draft',
  },
},
```

## Github Pages Deployment

This project can leverage Github Pages to deploy the docusaurus rendered site. This is all configured in the .github/workflows/deploy-gh-pages.yml file. As it currently stands, when a change is pushed into the "main" branch of the repository, the site is built and deployed to the given URL. You may want change this branch, or process depending on your use case needs.

Note that there are some limitations / considerations when using GitHub pages.

- You will need to enable GitHub pages for your repository - navigate to Settings-->Pages in the GitHub UI and set the `Source` to `GitHub Actions`
- The GitHub repository needs to be EITHER `public` or, if `private` it must be in a GitHub Enterprise Organisation.
- You will probably want to add a custom domain - this can be done under the `Settings` tab of your GitHub repository.

## Package Maintenance

This project leverages many external packages, which are managed using NPM (Node Package Manager). These packages are updated by their developers regularly, and as such for the sake of security, performance and functionality, the version of the packages that we use should also be updated. This can be done by running:

 ```sh
   npm update
   ```

This will update the versions reference in the package.json folder.

## License

Refer to the [LICENSE](./LICENSE.md) file for information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
