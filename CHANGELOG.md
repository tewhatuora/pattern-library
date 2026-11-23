
## [2.0.0](https://github.com/tewhatuora/pattern-library/compare/v0.9.6...v2.0.0) (2026-11-23)

### ⚠ BREAKING CHANGES

* 2.0: Health NZ rebrand. Colours, radii, spacing, heading sizes and font weights change across both themes, so expect visual differences throughout. Upgrade `@healthnz/pattern-library` and `@healthnz/pattern-library-themes` together, as the generated CSS variables changed. See [the migration guide](https://github.com/tewhatuora/pattern-library/blob/main/packages/lib/MIGRATION.md) for every upgrade step.
* Dependencies: the themes package is now a peer dependency of the library, so install `@healthnz/pattern-library-themes` yourself. The library no longer brings in `lodash`, `rooks`, `usehooks-ts`, `uuid`, `focus-visible`, `dedent` or `react-keyed-flatten-children`.
* Fonts: `neutral` uses Poppins (was Fira Sans) and `webSelfService` uses Public Sans (was Poppins).
* Inputs: `InputText`, `InputPassword` and `Textarea` let `value` win over `defaultValue`, and the clear button sends a real change event. `InputPhone` `onChange` receives `undefined` when emptied (was `''`). `RadioGroup` `value` and `Tooltip` `open` are truly controlled. `Button` and `TextLinkButton` run both `onClick` and `onPress` when given both.
* Markup: `CheckboxGroup`, `RadioGroup` and `InputDate` render a named group; `Badge` no longer has `role="status"` and `Loader` now has it; `Header.MenuButton` is icon-only, named "Open menu" / "Close menu"; `Header.Right` is hidden below 1024px. Tests need a `ThemeProvider` plus `matchMedia` and `ResizeObserver` stubs in jsdom.
* Props: removed `Card` `variant` (no dark cards), `List.Root` `variant`, `Accordion.Root` `variant="dark"`, `Banner` `theme`, and `disabled` and `type` on `Badge` and `Banner`. `Header.MenuButton` `variant` is required, and `ImageBlock` `src` accepts only a URL string. `weight="link-normal"` on `TextLink`, `AnchorLink` and `TextLinkButton` is now `weight="linkNormal"`.
* Tokens: every theme token key is camelCase. Renamed 1.x keys: `header-light`, `footer-light` and `footer-dark` → `headerLight`, `footerLight` and `footerDark`; `text-link` → `textLink`; `selected-hover` and `unselected-hover` → `selectedHover` and `unselectedHover`; `link-normal` and `link-hover&focus` → `linkNormal` and `linkHoverFocus`. The `header-dark` background moved from colour to gradient tokens (`gradient.semantic.structure.background.headerDark`).

### Features

* Health NZ rebrand, React 19 and server rendering support ([da6d2e3](https://github.com/tewhatuora/pattern-library/commit/da6d2e3c3a10972a07da68e49daf2d328d0e1b0a))

## [1.0.0](https://github.com/tewhatuora/pattern-library/compare/v1.0.0-beta.0...v1.0.0) (2024-10-08)

## [1.0.0-beta.0](https://github.com/tewhatuora/pattern-library/compare/v0.9.6...v1.0.0-beta.0) (2024-10-08)

Preparation for initial 1.0.0 release
