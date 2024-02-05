
## [4.0.0-beta.0](///compare/v3.1.0...v4.0.0-beta.0) (2024-02-05)


### ⚠ BREAKING CHANGES

* the My Health Record theme was originally named “myRecord”. This was the codename for My Health Record before an official name was provided. This change updates it to be in line with the official name.

### Features

* **Accordion:** add `Accordion` semantic tokens ebc7c0a
* add `getFocusSelectors` helper 2097862
* add `log` helper beb8434
* **Alert:** add `Alert` semantic tokens 20bdada
* **AnchorLink:** add `AnchorLink` semantic tokens 0c2f962
* **Avatar:** add `Avatar` semantic tokens 5aa38e8
* **Badge:** add `Badge` semantic tokens 585cf50
* **Banner:** add `Banner` semantic tokens 3108553
* **Breadcrumbs:** add `Breadcrumbs` semantic tokens 368d6b1
* **Card:** add `Card` semantic tokens 39c759f
* **Checkbox:** add `Checkbox` semantic tokens f674743
* **Content:** add `Content` semantic tokens 906087c
* **Dialog:** add `Dialog` semantic tokens fb310f9
* **Divider:** add `Divider` semantic tokens 288b446
* **focus:** update default focus colour fb1e1c1
* **Footer:** add `Footer` semantic tokens fddb5b5
* **Header:** add `Header` semantic tokens 0f5a6b0
* **Icon:** add Clear Icon semantic tokens f73c5bd
* **InputDropdown:** add `InputDropdown` semantic tokens 0b861ab
* **InputField:** add `InputField` semantic tokens e63e8f6
* **InputLabel:** add `InputLabel` semantic tokens 5cc979e
* **InputMessage:** add `InputMessage` semantic tokens e43477e
* **InputPhone:** add `InputPhone` semantic tokens fbde1ce
* **InputSearch:** add `InputSearch` semantic tokens 0110f3d
* **List:** add `List` semantic tokens 05f961d
* **Loader:** add `Loader` semantic tokens 57c821a
* **My Health Record theme:** add “My Health Record” theme to Storybook b874729
* **Navigation.Link:** add `Navigation.Link` semantic tokens 100f1b6
* **Navigation:** add `Navigation` semantic tokens 98b90ea
* **Notice:** add `Notice` semantic tokens & add “caution” variant fb03be2
* **Pagination:** add `Pagination` semantic tokens eb72c09
* **RadioGroup:** add `RadioGroup` semantic tokens 91074e2
* **semantic tokens:** add basic semantic token support 0255d75
* **semantic tokens:** update themes to support semantic tokens 7555b08
* **Storybook:** add “Poppins” font to Storybook 3a9d3fb
* **Tabs:** add `Tabs` semantic tokens dd569bb
* **Tag:** add `Tag` semantic tokens 9013815
* **TextLink:** add `TextLink` semantic tokens 2f2f0ea
* **TextLinkButton:** add `TextLinkButton` semantic tokens ba7ac1b
* **ToggleButton:** add `ToggleButton` semantic tokens 31647bd
* **ToggleSwitch:** add `ToggleSwitch` semantic tokens 0cc73b1
* **typography:** add typography semantic tokens 0ce1c3b


### Bug Fixes

* **Button:** Remove `TextLinkButton` border f2b8aa0
* **InputField:** focus input on clear d3da24f
* **Input:** fix clearable state logic 793614d
* **InputLabel:** move tertiary label inside of label element 1f6ad19
* **InputPhone:** fix country flag not showing on iOS Safari 7eef74a
* **InputPhone:** focus input on clear c56e962
* **InputPhone:** no longer focus input on country change 1901655
* **Text:** fix `Text`’s `color` prop 9f402ce
* **token colours:** fix alpha in colour tokens c4d05f6


* rename My Health Record theme to “myHealthRecord” ae1f72d
