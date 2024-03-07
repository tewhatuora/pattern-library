
## [4.0.0](///compare/v4.0.0-beta.0...v4.0.0) (2024-03-07)


### ⚠ BREAKING CHANGES

* **themes:** the `myHealthRecord` theme has been renamed to `webSelfService` to more accurately reflect it.
* **themes:** the `myCovidRecord` & `myHealthAccount` themes have been removed.

### Features

* **Accordion:** update `Accordion` props 9923efb
* **Accordion:** update `Accordion` styles 798e6fc
* **Accordion:** update `Accordion`’s item gap 765483f
* **AnchorLink:** set default weight to “link-normal” efe568b
* **Dialog:** update `Dialog`’s overlay colour token 2d11e51
* **InputDate:** add `showRequiredAsterisk` prop e1dbe94
* **inputs:** add `showRequiredAsterisk` prop to input components 61fa7ac
* **Storybook:** add “All” story for `Heading` c8fc408
* **Storybook:** add `Button` “link” variant 7c2f5f6
* **Storybook:** update `Breadcrumbs` default styling 8f4e5a7
* **TextLinkButton:** set default weight to “link-normal” 04d852c
* **TextLink:** set default weight to “link-normal” 48a5c69
* **themes:** add `structure.background.overlay` token 10b4c03
* **themes:** remove `myCovidRecord` & `myHealthAccount` themes 87c5c22
* **themes:** rename `myHealthRecord` theme to `webSelfService` 6d57e31
* **themes:** update neutral theme to use new token structure b1f1896
* **theme:** update `Web Self-Service` theme tokens ea0597b


### Bug Fixes

* **Accordion:** fix `Accordion`’s chevron icon colour 2a93643
* **Button:** fix `Button`’s variant types 84a602c
* **InputPhone:** fix `InputPhone` rendering issue 504d77b
* **Links:** add correct link text decoration 066607f
* **Row:** fix `Row`’s type dependency 91305a5
* **types:** fix type error where component props are undefined 3e4b3d6
* **types:** fix type resolution for Vite bundler 7b76369
