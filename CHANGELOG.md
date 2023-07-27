
## [3.0.0](https://gitlab.com/alphero/moh-design-system/compare/v2.0.0...v3.0.0) (2023-07-03)


### Features

* avatar: new avatar component ([d852c00](https://gitlab.com/alphero/moh-design-system/commit/d852c004f9e0a2e1cf8ebe6f5c4201de9442eb16))
* avatar: update the size function to scale text and element ([e56b9ed](https://gitlab.com/alphero/moh-design-system/commit/e56b9ed979765c6c4f2a507287d74540a7a3f0fc))
* inputs on blur and on focus events ([2a69695](https://gitlab.com/alphero/moh-design-system/commit/2a696958918a0e5bb633d9b65dc4022673c7ec52))


### Bug Fixes

* Update types for color, add width to avoid layout shift, add margin right for menu toggle ([164591f](https://gitlab.com/alphero/moh-design-system/commit/164591fb222867d85a579cf62aca2cce20eedca4))

## [2.0.0](https://gitlab.com/alphero/moh-design-system/compare/v1.0.0...v2.0.0) (2023-05-10)


### ⚠ BREAKING CHANGES

* The `Header` component’s API has changed to make it more composable. Instead of passing props to the `Header` component to build it, The `Header` has been broken up into compound components so you can build it declaratively.
* the global font sizes set on `html` and `body` have now been removed. This is to allow incremental adoption of the design system as this affects the entire site. You will need to adjust any rem and/or em units that you have used in your CSS. Previously 1rem === 10px, now 1rem === 16px (browser default). You will need to multiply your rem values by 0.625 (10px/16px).

### Bug Fixes

* (temp) add option to show underline on anchor links ([3a30718](https://gitlab.com/alphero/moh-design-system/commit/3a30718808b2b8c79520e657ae96e93fbb3304b3))
* (TEMP) allow component override for imprint items ([031f7df](https://gitlab.com/alphero/moh-design-system/commit/031f7df972b899c3372a1a9a8d0b289bd1c077d0))
* `Accordion` wasn’t resizing correctly ([8d39aaa](https://gitlab.com/alphero/moh-design-system/commit/8d39aaa24c5682123f7d025da9b11bc0e77653d4))
* allow buttons 100% width at mobile ([7b63829](https://gitlab.com/alphero/moh-design-system/commit/7b63829e2636f0bfcb5584aec4d238a2df41c295))
* **CCC3-2190:** update Footer imprint items to be spaced with margin instead of flex gap ([ba7fefe](https://gitlab.com/alphero/moh-design-system/commit/ba7fefe8617bc7579e38b6d40433985ed76ea7dc))
* **CCC3-2190:** update Footer items to be spaced with margin instead of flex gap ([34ad4b1](https://gitlab.com/alphero/moh-design-system/commit/34ad4b174ba61e774f3c3a4840280482cc4ec8b4))
* change text link icon layout to inline ([ff4bf9e](https://gitlab.com/alphero/moh-design-system/commit/ff4bf9e6ee0d3e1d41ac8404e8b18eeaa5a6b6d2))
* define list-style-type for `List` ([7f7175d](https://gitlab.com/alphero/moh-design-system/commit/7f7175db7dbc6607dba9c6c4f35db0547e97c755))
* fix issue with uncontrolled dialog not opening ([719f70b](https://gitlab.com/alphero/moh-design-system/commit/719f70b4ea180afd3fce6c046a8259be953c31ef))
* fix styling issues and dialog overlay closing ([c640c40](https://gitlab.com/alphero/moh-design-system/commit/c640c405ed25b572deb8bfb7368fc2d683bc9fd8))
* handle the passing of `className` to `Header` components better ([7748d0b](https://gitlab.com/alphero/moh-design-system/commit/7748d0bdce9cef1c436052b2406606c2072851c1))
* make `Header` atomic with compound components ([f6e3501](https://gitlab.com/alphero/moh-design-system/commit/f6e3501235a0bd7553d87eed483fed6f22c5e315))
* make close button first focusable element in dialog ([0880e49](https://gitlab.com/alphero/moh-design-system/commit/0880e4949924cc301d765b5135b802985cd62460))
* make close button last focusable element in dialogs ([bda7abf](https://gitlab.com/alphero/moh-design-system/commit/bda7abf267049207cacfe8c8202a397e717c7f6e))
* remove allowed children from `Navigation.Side` ([1f8c5fb](https://gitlab.com/alphero/moh-design-system/commit/1f8c5fb91f4bad4d67aebb00454cd6b57267452a))
* remove allowed children to allow styled dialog actions ([9eaa138](https://gitlab.com/alphero/moh-design-system/commit/9eaa138f08241be36145fab7b9a8f74ac83fbd45))
* remove box props and justify content prop from button component ([350d7b4](https://gitlab.com/alphero/moh-design-system/commit/350d7b4bda49affb190984215233348f204e3428))
* remove global font-sizes and update theme parser ([ed1c38a](https://gitlab.com/alphero/moh-design-system/commit/ed1c38af326d8b423218152da4daeb33eb0bf547))
* remove invalid and unused data attributes on list root ([0ff8f3b](https://gitlab.com/alphero/moh-design-system/commit/0ff8f3baafbc83d8d67164e62a1b0e8a52f433d0))
* remove large footer padding at tablet breakpoint ([d179ca0](https://gitlab.com/alphero/moh-design-system/commit/d179ca0f98c061c2cb008636a0c534f1217d5961))
* resolve typescript errors ([d0a38d0](https://gitlab.com/alphero/moh-design-system/commit/d0a38d0ae342e9c08548b3e170ac83f51aaabb3f))
* restructure Button's icon layout to use margin instead of flex gap ([d352f7f](https://gitlab.com/alphero/moh-design-system/commit/d352f7facc07a43cd47fa7451819ddb262457812))
* reverse footer imprint items on mobile ([3cacefe](https://gitlab.com/alphero/moh-design-system/commit/3cacefeaa7cb5817d764fc91c2bf0b13bec12d05))
* update `Button` to use correct rems ([3a42849](https://gitlab.com/alphero/moh-design-system/commit/3a42849d4804a0aa9722e797327fcafd159e06b4))
* update `Checkbox` to use correct rems ([1a344a9](https://gitlab.com/alphero/moh-design-system/commit/1a344a98820dcb616428491892bacf3354da91e4))
* update `Container` to use correct rems ([884e1aa](https://gitlab.com/alphero/moh-design-system/commit/884e1aa7149a1dae126462b6b036ab1d08283a84))
* update `CountryDropdown` to use correct rems ([ec8dedc](https://gitlab.com/alphero/moh-design-system/commit/ec8dedce5951143b1ed05157232e0329f350f7b7))
* update `Footer` to use correct rems ([d12275b](https://gitlab.com/alphero/moh-design-system/commit/d12275b48d3a90f826d4341c8e253e73d46c15bb))
* update `Header` to use correct rems ([59ad888](https://gitlab.com/alphero/moh-design-system/commit/59ad888e2a3968e6a70319648d657014598775ca))
* update `ImageBlock` to use correct rems ([08efdca](https://gitlab.com/alphero/moh-design-system/commit/08efdca33f5e0abc8a3c3405feaf0ceedd7734e2))
* update `InputField` to use correct rems ([13b4002](https://gitlab.com/alphero/moh-design-system/commit/13b4002c19d5ee55bc494b7d458fa3bb8d5ae5c4))
* update `InputMessage` to use correct rems ([be2effc](https://gitlab.com/alphero/moh-design-system/commit/be2effc600f8909a627f745615dc1d9e997feeaf))
* update `InputSearch` to use correct rems ([0a5d20d](https://gitlab.com/alphero/moh-design-system/commit/0a5d20dfaa87d9f46ef4d191c6aadcb83fb57857))
* update `List` to use correct rems ([a8a8222](https://gitlab.com/alphero/moh-design-system/commit/a8a822227f44dc5cf0c9fb77e5333bd728c93f23))
* update `Loader` to use correct rems ([755e875](https://gitlab.com/alphero/moh-design-system/commit/755e87523f0ede846f0a7067d38edbf918f2eb8b))
* update `Menu` to use correct rems ([ff4321d](https://gitlab.com/alphero/moh-design-system/commit/ff4321d5762283124ce8197c5a28f70304d6771c))
* update `Notice` to use correct rems ([23368cd](https://gitlab.com/alphero/moh-design-system/commit/23368cd149364b13922c1cec3f7fddaeaa7d4172))
* update `Pagination` to use correct rems ([7534e23](https://gitlab.com/alphero/moh-design-system/commit/7534e2356292e9492c5a1d5bd90bb0c68bbb77a6))
* update `RadioGroup` to use correct rems ([1e2ef14](https://gitlab.com/alphero/moh-design-system/commit/1e2ef146143282b490e80e89da734545b84b8f25))
* update `Tabs` to use correct rems ([1aa688f](https://gitlab.com/alphero/moh-design-system/commit/1aa688fbdbfe21df6ceb4585aced07544862dc92))
* update `Tag` to use correct rems ([42f4e37](https://gitlab.com/alphero/moh-design-system/commit/42f4e37125ab38ca96d4f6234bff9838b61c347a))
* update `ToggleButton` to use correct rems ([d030df7](https://gitlab.com/alphero/moh-design-system/commit/d030df7c41b91ed1c458638f8a155bbf7ea4373c))
* update `ToggleSwitch` to use correct rems ([1c80725](https://gitlab.com/alphero/moh-design-system/commit/1c80725a1ad3f5b2c76267af5e7c568626c1a665))
* update breakpoints to standard values ([9b46634](https://gitlab.com/alphero/moh-design-system/commit/9b466343693d5a31a6fdc3728070350d0bb942a8))
* update CSS that changes switch text colour to white to target only switches ([51833ba](https://gitlab.com/alphero/moh-design-system/commit/51833ba371ded521588392cfa13dadac5acdd829))
* update footer layout to flex layout ([b900ffc](https://gitlab.com/alphero/moh-design-system/commit/b900ffc747005c910df90f8d552f9199e1e99937))
* update Stack component to use margin instead of flex gap ([a5a3e5d](https://gitlab.com/alphero/moh-design-system/commit/a5a3e5df46cd41915c57a1f036c7ef32f06bb4b1))
* update types on imageBlock and allowedChildren on Footer ([5f6291c](https://gitlab.com/alphero/moh-design-system/commit/5f6291ce9f550f2426c175e4ded0bad4ff305356))
* updated `Badge` sizes ([cc5a28c](https://gitlab.com/alphero/moh-design-system/commit/cc5a28c6119cf18faf38afb84ff0cf828389bfd9))
* updated `Banner` sizes ([894e19b](https://gitlab.com/alphero/moh-design-system/commit/894e19bf36cfc7355e11901ec72f156136935105))
* updated button to accept children other than just text ([67d5edf](https://gitlab.com/alphero/moh-design-system/commit/67d5edf463531cb86762c5c55547f1d1a415b381))

## [1.0.0](https://gitlab.com/alphero/moh-design-system/compare/v0.0.64-beta.4...v1.0.0) (2022-10-04)


### Features

* created `TextArea` component which is a wrapper for `InputText` ([99dbd2e](https://gitlab.com/alphero/moh-design-system/commit/99dbd2e971468a66bdd7a2a187498b5e827ebed1))


### Bug Fixes

* added `iconPosition` prop to `TextLink` copmonent ([ac1caf0](https://gitlab.com/alphero/moh-design-system/commit/ac1caf05fb01e0d70fb2ca70554784e3ab0d5fd5))
* added `space` prop and Stack to Tabs component ([54fe6a1](https://gitlab.com/alphero/moh-design-system/commit/54fe6a1d4371e74e977e7605f4c0a038e9258940))
* export missing components/styles ([8db867d](https://gitlab.com/alphero/moh-design-system/commit/8db867d39704fde449986ead6c039dbc2015669b))
* fix accordion heading level element ([71dfa82](https://gitlab.com/alphero/moh-design-system/commit/71dfa826ef017fb8fcc8ba7988dcb1cd427b2aed))
* fixed badges in Installation page ([7fee83f](https://gitlab.com/alphero/moh-design-system/commit/7fee83ffcea809b48067ad6e1cd328a78ebb3a83))
* updated logo for Header component ([4f7569a](https://gitlab.com/alphero/moh-design-system/commit/4f7569aef3d1e2e2e71c0be4de7f4c8ced8e2813))

### [0.0.64-beta.4](https://gitlab.com/alphero/moh-design-system/compare/v0.0.64-beta.3...v0.0.64-beta.4) (2022-09-28)


### Bug Fixes

* add margin to bottom of logo container ([eb0338f](https://gitlab.com/alphero/moh-design-system/commit/eb0338fb351ce1fa2872823bde55d4e3988f7b69))
* use small font size for menu list items ([5802928](https://gitlab.com/alphero/moh-design-system/commit/58029282691b770c84eb5c8623bed76dfe260737))
* used small font size for footer imprint items, updated Copyright statement ([48f5c2c](https://gitlab.com/alphero/moh-design-system/commit/48f5c2cc0b93b3e46e2055e0e5a36d11d293d380))

### [0.0.64-beta.3](https://gitlab.com/alphero/moh-design-system/compare/v0.0.64-beta.2...v0.0.64-beta.3) (2022-09-22)

### [0.0.64-beta.2](https://gitlab.com/alphero/moh-design-system/compare/v0.0.64-beta.0...v0.0.64-beta.2) (2022-09-22)

### 0.0.64-beta.0 (2022-09-22)


### Features

* generate component docs ([0a6c185](https://gitlab.com/alphero/moh-design-system/commit/0a6c1855548a52394f339915df74023df7196562))


### Bug Fixes

* fix syntax of all rules ([6e68f8f](https://gitlab.com/alphero/moh-design-system/commit/6e68f8f48b58a525ccf786426073a9c4d55ae31e))
* installed published version of themes ([ed334af](https://gitlab.com/alphero/moh-design-system/commit/ed334af7d48d8219b4bc712ce97bcd45701ca9c5))
* remove dry run flags ([14c1dc4](https://gitlab.com/alphero/moh-design-system/commit/14c1dc4187a3460b60fb312d3d7e020225efd8ba))
* run install & build on all rules ([bb95dc2](https://gitlab.com/alphero/moh-design-system/commit/bb95dc25a28323f020e9b96aca9ab6cacf0cb06d))
* skip git pre-commit hooks ([f0195f3](https://gitlab.com/alphero/moh-design-system/commit/f0195f319367e262d77e032cbdb657d11d4a492d))
* update CI pipleines ([e39cd6d](https://gitlab.com/alphero/moh-design-system/commit/e39cd6df435439c7cb28d2eeae9881c93aaf1054))
* update lock file ([558df19](https://gitlab.com/alphero/moh-design-system/commit/558df1975b038f5d3e7de0343cc9f1665d09d4c1))
## v1.1.0 (2022-05-04)
### What's new?
  Tēnā koutou beautiful people,
  
  Miro and I have just published version 1.1 of the pattern library for all 3 libraries (MCR, MHA and Neutral).
  
  Please swap your files to consume the latest version of the libraries in Figma following this guide:
  
  Swap style and component libraries – Figma Help Center (I’ve also attached Alphero’s simple diagram as a PDF).
  
  The original libraries will remain published for the time being, but they are now out of date. If you need a hand swapping libraries, feel free to sing out.
  
  What’s new?
  
  **We’ve updated the checkbox styles:**
  
  Checkbox styling has been updated using the tokens in a way that allows the My Health Account library to use the yellow accent colour. This also matches the style we are happy with in CISS and RATs and injects a tiny amount of personality into them via rounded corners.

  ![Checkbox styles](./1.1/1.png "Checkbox styles")

  **We’ve removed dropshadows removed from all text inputs:**

  Dropshadows have been removed from all input fields as we discovered once we started using the library that most of the team currently use the input fields on a white background. If there’s a need, we can add it back in later as an option you toggle on or off.

  ![Dropshadows](./1.1/2.png "Dropshadows")

  **We’ve added new banner styles:**

  A new announcement Banner component has been added. The component can already be found in production via My Covid Record and the COVID-19 Health Hub and it consists of 3 variants - Alert, Information, and Urgent. The component features an icon and text and can optionally be dismissed.

  ![Banner styles](./1.1/3.png "Banner styles")

  **We’ve changed the focus states (on buttons and text links):**

  The focus state colour and thickness has been updated. It's modelled after the focus styles used across My Covid Record (also mentioned above), but we will begin to roll this out across all apps for improved accessibility and consistency.

  ![Button focus states](./1.1/4.png "Button focus states")

  **We’ve updated the footer:**

  We have updated the layout and spacing in the footer. The same variant options are available (no social/social icons, 0-5 columns, mobile/desktop, light/dark)Discussions are underway around potentially creating a universal version that includes content so that we are able to provide all MOH apps with the exact same footer, uniting all products to feel like they are a part of the same site. That is currently in concept/discovery phase.

  ![Updated footer](./1.1/5.png "Updated footer")

  **We’ve added paragraph spacing to the type styles:**

  We have added paragraph spacing to the type styles for when longer pieces of text are in use. This is applied at the token level, so it can be a variable that we change per library.

  **Focus on accessibility:**

  We’ve also made some minor tweaks to the error and focus states across several components to improve accessibility (simply making the border wider on error, and changing the focus state to blue to match our MCR style which we’re adopting universally, but may not yet apply to every component).

  We’d love to hear from you if you have any feedback or requests, or if you just want to korero about the library.
  
  Ngā mihi nui,
  
Alex
