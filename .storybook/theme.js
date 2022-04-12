import { create } from '@storybook/theming';

export default create({
    base: 'light',
    brandTitle: 'Ministry of Health',
    brandUrl: '/',
    brandImage: './Logo.svg',

    colorPrimary: '#002E6E',
    colorSecondary: '#0071BC',

    // UI
    appBg: '#E5E5E5',
    appContentBg: '#fff',
    appBorderColor: '#7E94B5',
    appBorderRadius: 8,

    // Typography
    fontBase: '"Fira Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#002E6E',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#fff',
    barBg: '#002E6E',

    // Form colors
    inputBg: 'white',
    inputBorder: '#7E94B5',
    inputTextColor: '#002E6E',
    inputBorderRadius: 8,
});
