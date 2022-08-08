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

  ![Checkbox styles](stories/assets/1.1/1.png "Checkbox styles")

  **We’ve removed dropshadows removed from all text inputs:**

  Dropshadows have been removed from all input fields as we discovered once we started using the library that most of the team currently use the input fields on a white background. If there’s a need, we can add it back in later as an option you toggle on or off.

  ![Dropshadows](stories/assets/1.1/2.png "Dropshadows")

  **We’ve added new banner styles:**

  A new announcement Banner component has been added. The component can already be found in production via My Covid Record and the COVID-19 Health Hub and it consists of 3 variants - Alert, Information, and Urgent. The component features an icon and text and can optionally be dismissed.

  ![Banner styles](stories/assets/1.1/3.png "Banner styles")

  **We’ve changed the focus states (on buttons and text links):**

  The focus state colour and thickness has been updated. It's modelled after the focus styles used across My Covid Record (also mentioned above), but we will begin to roll this out across all apps for improved accessibility and consistency.

  ![Button focus states](stories/assets/1.1/4.png "Button focus states")

  **We’ve updated the footer:**

  We have updated the layout and spacing in the footer. The same variant options are available (no social/social icons, 0-5 columns, mobile/desktop, light/dark)Discussions are underway around potentially creating a universal version that includes content so that we are able to provide all MOH apps with the exact same footer, uniting all products to feel like they are a part of the same site. That is currently in concept/discovery phase.

  ![Updated footer](stories/assets/1.1/5.png "Updated footer")

  **We’ve added paragraph spacing to the type styles:**

  We have added paragraph spacing to the type styles for when longer pieces of text are in use. This is applied at the token level, so it can be a variable that we change per library.

  **Focus on accessibility:**

  We’ve also made some minor tweaks to the error and focus states across several components to improve accessibility (simply making the border wider on error, and changing the focus state to blue to match our MCR style which we’re adopting universally, but may not yet apply to every component).

  We’d love to hear from you if you have any feedback or requests, or if you just want to korero about the library.
  
  Ngā mihi nui,
  
Alex