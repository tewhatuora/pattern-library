# Upgrading from 1.x to 2.0

2.0 brings the Health NZ rebrand, React 19 support, server rendering (including the Next.js App Router), and a round of accessibility and behaviour fixes. Most apps need the setup changes below, then a check of the components listed under breaking changes.

## Setup

1. **Upgrade both packages together.** The library and themes share generated CSS variable names that changed in 2.0, so mixing 1.x and 2.x styles silently breaks. The library now lists the themes package only as a peer dependency (`^2.0.0`), so install it yourself:
   ```bash
   npm install @healthnz/pattern-library@2 @healthnz/pattern-library-themes@2
   ```
2. **Import both stylesheets** once at the root of your app:
   ```js
   import '@healthnz/pattern-library/styles';
   import '@healthnz/pattern-library-themes/styles';
   ```
3. **Update your fonts.** `neutral` now uses Poppins (was Fira Sans), and `webSelfService` uses Public Sans (was Poppins). The [README](./README.md#include-fonts) has the links.
4. **React 18 or 19** is supported.
5. **Tests:** components need a `ThemeProvider`, and jsdom needs `matchMedia` (with `addEventListener`) and `ResizeObserver` stubs. See [Testing](./README.md#testing).
6. **Custom theme CSS:** `contract.color.semantic.structure.background['header-dark']` moved to `contract.gradient.semantic.structure.background['header-dark']`, and is now a gradient. If you build your own `Theme` object, the `Tokens` type has new required keys (see `@healthnz/pattern-library-themes` types).
7. The library no longer brings in `lodash`, `rooks`, `usehooks-ts`, `uuid`, `focus-visible`, `dedent` or `react-keyed-flatten-children`. Install them yourself if your app relied on getting them through the library.

## Breaking changes

Props and variants that were removed:

| Component           | Change                                                                     | What to do                              |
| ------------------- | -------------------------------------------------------------------------- | --------------------------------------- |
| `Card`              | `variant` (`light`/`dark`) removed; dark cards are no longer supported     | Remove `variant`                        |
| `List.Root`         | `variant` removed                                                          | Remove `variant`                        |
| `Accordion.Root`    | `variant="dark"` is ignored                                                | Remove `variant`                        |
| `Banner`            | `theme` removed (it had no effect)                                         | Remove `theme`                          |
| `Badge`, `Banner`   | `disabled` and `type` removed from the props (they render a `div`/`aside`) | Remove them                             |
| `Header.MenuButton` | `variant` is now required                                                  | Pass the same `variant` as the `Header` |
| `ImageBlock`        | `src` is `string` only (icon names were never rendered as icons)           | Pass an image URL                       |

Behaviour that changed:

| Component                                              | Change                                                                                                                                                                   | What to do                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `Button`, `TextLinkButton`                             | With both `onClick` and `onPress`, both now run (`onClick` first); before, only `onClick` ran                                                                            | Pass one unless you want both                                             |
| `InputText`, `InputPassword`, `Textarea`               | `value` now wins over `defaultValue`. The clear button sends a real change event (before, a `{ target: { name, value: '' } }` object), and uncontrolled fields now clear | Use either `value` or `defaultValue`. Read `e.target.value` in `onChange` |
| `InputDropdown`                                        | Works uncontrolled: without `value`, it starts on `defaultValue`, the placeholder, or the option marked `selected`. Before, `value` defaulted to `''`                    | Pass `value` to control it                                                |
| `InputDropdown`                                        | `onSelectBlur` and `onSelectFocus` are focus handlers (were typed as change handlers). `onBlur`/`onFocus` no longer replace them; both run                               | Update handler types                                                      |
| `InputPhone`                                           | `onChange` receives `undefined` when the field is emptied, including by the clear button (was `''`)                                                                      | Handle `undefined`                                                        |
| `RadioGroup`                                           | `value` is truly controlled                                                                                                                                              | Pair `value` with `onChange`, or use `defaultValue`                       |
| `Tooltip`                                              | `open` is truly controlled, and `defaultOpen` works. `label` is unused                                                                                                   | Pair `open` with `onOpenChange`                                           |
| `Dialog`                                               | The trigger opens the dialog through Radix and keeps its own `onPress`. `modal` is now applied. Clicking outside uses Radix's default dismiss                            | Remove workarounds for the trigger                                        |
| `TextLink`, `AnchorLink`, `Navigation.Link`            | Your handlers (e.g. `onClick`) run alongside the library's instead of replacing them. `component` is typed `LinkComponentType`                                           | Check custom link components still type-check                             |
| `ToggleButton`                                         | The hard-coded `aria-label="Text alignment"` is gone                                                                                                                     | Pass `aria-label` or `aria-labelledby`                                    |
| `Breadcrumbs`                                          | A single crumb renders once, as the current page                                                                                                                         | None                                                                      |
| `Header.Right`                                         | Hidden below 1024px, where `Header.MenuButton` appears, and wrapped in an extra `div`                                                                                    | Put its items (utility links, search) in the navigation panel too         |
| `InputDropdown`                                        | Options are keyed by `value`                                                                                                                                             | Give every option a unique `value`                                        |
| `InputText`, `InputPassword` and other labelled fields | With `disabled`, the tertiary label button is disabled and a tertiary label link loses its `href`                                                                        | None                                                                      |
| `CheckboxGroup`                                        | `error` now styles every checkbox in the group (it was ignored)                                                                                                          | Remove `error` if you only meant the message                              |
| `Card`                                                 | `border` now draws a 1px border in that colour (it had no effect)                                                                                                        | Remove `border` if you don't want one                                     |
| `Icon`                                                 | `noFill` is deprecated and does nothing (it hid filled icons)                                                                                                            | Remove `noFill`                                                           |
| Social icons                                           | Take the text colour (`currentColor`) instead of fixed black                                                                                                             | Set `color` if you relied on black                                        |
| `BreadcrumbsStyles`                                    | The unused `boldText` class is removed                                                                                                                                   | None                                                                      |

Markup that changed (update tests and CSS selectors that depend on it):

- **Badge** no longer has `role="status"`. **Loader** now has `role="status"`, and says "Loading" to screen readers when it has no message.
- **Checkbox** with `checked` and `indeterminate` renders `aria-checked="mixed"` and `data-state="indeterminate"`.
- **CheckboxGroup**, **RadioGroup** and **InputDate** render a `role="group"` (or `radiogroup`) named by the label. `id` goes on the group, not the label's `htmlFor`, and helper and error ids are generated. **InputDate** segment ids are `<id>_day`, `<id>_month` and `<id>_year`, with an id generated when none is given.
- **Dialog**'s close button is named "Close" (change it with `closeLabel`). Without a `heading`, the dialog is named by its `subheading`, or "Dialog".
- **Header.MenuButton** is icon-only: its visible "Menu"/"Close" text was replaced by the accessible names "Open menu" and "Close menu".
- **Icon** with `alt` has `role="img"`.
- **InputSearch** is named "Search" unless you pass `aria-label` or `aria-labelledby`.
- **List**: a nested list is wrapped in its own `li`.
- **Navigation** is a `nav` named "Main" (change it with `aria-label`). Selected items have `aria-current="page"`, and the mobile search field id is generated (was `search`).
- **Pagination** marks the current page with `aria-current="page"`.
- **PersonSelector**'s mobile dropdown id is generated (was `person-selector-dropdown`); pass `id` to set it. Its buttons have `aria-pressed`.
- **Footer** layout changed: social links sit beside the government logo, and `ShieldedSite` and the imprint items moved. Check your footer.

## Visual changes

The rebrand changed theme tokens across both themes: colours, radii, spacing, heading sizes and font weights. Icons now take the text colour (`currentColor`) instead of a fixed grey. Expect visual differences throughout, so review your app against the new designs rather than the old screenshots. Notable component changes:

- Header and dark footer backgrounds are gradients.
- Card has no border, only its shadow.
- Button has a minimum height rather than a fixed one, so a long label wraps and the button grows.
- `Button` with `variant="link"` renders as an inline link. It used to get the full-width, bordered button style.
- TextLinkButton is as tall as its text. Before, it took the full button height (56px, or 60px from tablet up).
- Dialog actions have space between them and above them.
- Banner `alert` shows an exclamation mark in a circle (was the document icon).
- Accordion spacing follows the design: more space after the left icon, a gap before the chevron, and less space above the open content.
- Disabled Accordion triggers and disabled Tabs are grey with a not-allowed cursor.
- Decorative icons are 24px on mobile (were 10px), so Banner, Dialog and PersonSelector icons are larger.
- Notice is full width (was 75% from tablet up), with a 24px icon and only a gap beside it.
- Badge grows when its label wraps; a wrapped badge has rounded corners rather than a pill.
- Tag padding uses spacing tokens (4px/8px on mobile, 4px/16px from tablet), long tags wrap, and the clear button is the 16px icon.
- ToggleSwitch has a gap between label and switch, and long labels wrap.
- Long breadcrumbs use the full width before collapsing (was 60% from tablet up), and a long current page wraps.
- Tabs scroll sideways when they don't fit, with the focus outline inside the tab.
- Pagination with `showPageButtons` puts the page numbers on their own row below Previous and Next on small screens.
- InputDropdown's placeholder shows (it was hidden behind the select) and truncates with an ellipsis.
- A multiline field with `rows` is exactly that many lines tall.
- InputDate's group label greys when disabled, and several field errors show one per line.
- Tertiary label icons sit closer to the text (4px on mobile, 8px from tablet).
- List item icons have a gap on either side (10px on mobile, 16px from tablet).
- AnchorLink aligns with surrounding text inside `Text`, and a wrapped label keeps its chevron at the top.
- ImageBlock buttons are full width on mobile and 360px from tablet, 24px apart, side by side when `width="full"`. `imagePosition` now works for `half` and `third` at every width.
- Navigation's mobile divider uses the right contrast, and its utility links are spaced apart.
- The dark Footer's social icons are white.
- HeroBlock has a new background, and a pattern when it has no children.
- Notice has a background colour per variant.
- Links inside `Text` are always underlined.
- Utility navigation items are pill buttons, with the icon after the label.
- Web Self-Service mobile spacing matches the design: `small` is 16px (was 10px) and `medium` is 24px (was 10px). Most mobile padding and gaps get larger.
- Links (TextLink, TextLinkButton, AnchorLink, Breadcrumbs, `Button variant="link"`) are underlined. The theme's `link-normal` text decoration was `none` because the mobile value overwrote the desktop `underline`.
- `Button variant="link"` is regular weight, not bold. This also applies to TextLinkButton and the label row's link button (e.g. InputPassword's "Show").
- ToggleButton and Pagination page buttons have dark text on hover, instead of white.
- A checked Checkbox on hover shows a dark tick on the light fill, without the navy border.
- InputMessage errors show the circled exclamation mark (`warning`) instead of the filled triangle.
- Tooltip has rounded corners and a shadow.
- Alert message text is one size larger (16px mobile, 18px desktop), and its icon is 24px on mobile.
- Loader text is one size larger (18px mobile, 20px desktop).
- The Tag close icon is black.
- With the new mobile spacing, some components were adjusted to keep to the design on mobile:
  - Card padding is 16px.
  - A List with dividers has 8px above and below each item.
  - FeatureTile has 16px side padding and 24px vertical spacing per tile.
  - Header's logo and menu button sit at the container's padding, without the extra 16px inset.
  - InputDropdown (and PersonSelector) has 32px right padding.
  - Navigation's mobile items have 16px vertical padding. Footer links are closer together (38px apart), with 16px below each list heading.
  - Dialog has 24px below its content and between its actions, and 24px bottom padding.
- Dialog's heading, subheading and content are 8px apart at every width (were 24px on mobile, 32px from tablet), with 24px between the icon and heading. Dialogs are shorter as a result.

## New in 2.0

- **Server components:** every component is a client component, and compound parts have flat named exports for the Next.js App Router, e.g. `DialogRoot`, `HeaderRoot`, `TabsList`. See [Server components](./README.md#server-components-nextjs-app-router).
- **Exported prop types** for every component, e.g. `ButtonProps` and `InputTextProps`.
- **Props are documented** in the types, so your editor shows them on hover.
- **New props:**
  - `Accordion.Root`: `dividers`, for hairline dividers instead of cards;
  - `Dialog`: `closeLabel`;
  - `Dialog.Action`: `close`;
  - `HeroBlock`: `titleLevel`;
  - `FeatureTile` features: `buttonHref` and `onButtonPress`;
  - `RadioGroup`: `defaultValue`;
  - `InputSearch`: `aria-label`, `aria-labelledby` and `submitLabel`;
  - `Navigation`: `aria-label`;
  - `PersonSelector`: `id`;
  - `ToggleSwitch`: `required`;
  - `Icon`: `noFill`;
  - `Heading` `level` accepts numbers;
  - input components forward `tertiaryLabelTooltip`.
- **Props now optional:**
  - `Stack` `space`;
  - `Badge`, `Banner` and `Notice` `variant`;
  - `ImageBlock` `shape`, `width` and `imagePosition`;
  - `Navigation` `searchFormAction` and `searchFormMethod`;
  - `Tabs` `activationMode`.
- **Smaller bundles:** dependencies are no longer bundled, so your bundler can share and tree-shake them, and the icons and logos are optimised.
- **TypeScript:** the `styles` imports are typed, so `noUncheckedSideEffectImports` (on by default from TypeScript 6) doesn't reject them.
