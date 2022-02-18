import dedent from 'dedent';

let resetImported = false;

export const markResetImported = () => {
  resetImported = true;
};

export const ensureResetImported = () => {
  if (!resetImported) {
    throw new Error(dedent`
      moh-design-system components imported before reset.
      Make sure to import the moh-design-system reset module before importing any components. 
      This ensures the CSS reset does not override the component styles. 
    
      e.g.
      import 'moh-design-system/reset'; // <-- Must be first
      import { ThemeProvider, Box } from 'moh-design-system';
    `);
  }
};
