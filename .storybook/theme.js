import { create } from '@storybook/theming';

export default create({
    base: 'light',
    brandTitle: 'Ministry of Health',
    brandUrl: '/',
    brandImage: './Logo.svg',

    colorPrimary: '#E5E5E5',
    colorSecondary: '#0071BC',

    // UI
    appBg: '#002E6E',
    appContentBg: '#fff',
    appBorderColor: '#7E94B5',
    appBorderRadius: 8,

    // Typography
    fontBase: '"Fira Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#fff',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#002E6E',
    barSelectedColor: '#002E6E',
    barBg: '#eceff4',

    // Form colors
    inputBg: 'white',
    inputBorder: '#7E94B5',
    inputTextColor: '#002E6E',
    inputBorderRadius: 8,
});
