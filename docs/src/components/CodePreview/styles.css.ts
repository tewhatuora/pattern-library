import { globalStyle } from '@vanilla-extract/css';

import { vars } from 'moh-design-system/themes/vars.css';

globalStyle('.npm__react-simple-code-editor__textarea', {
  fontFamily: 'monospace !important',
  fontSize: '16px !important',
  padding: vars.space['6'] + ' !important',
  paddingRight: vars.space['14'] + ' !important',
});

globalStyle('.npm__react-simple-code-editor__textarea:focus-visible', {
  outline: 'none',
});

globalStyle('.npm__react-simple-code-editor__textarea + pre', {
  fontFamily: 'monospace !important',
  fontSize: '16px !important',
  padding: vars.space['6'] + ' !important',
  paddingRight: vars.space['14'] + ' !important',
});
