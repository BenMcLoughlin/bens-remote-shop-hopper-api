import { css } from 'styled-components';
import Color from 'color';

export const theme = {
    color: {
        primary: '#000000',
        secondary: '#A4A4A4',
        text: '#404040',
        accent: '#D84D2B',
        dark: '#23203F',
        lightGrey: '#716F87',
        greenLight: '#14E2A4',
        greenDark: '#14C691',
        blueLight: '#4D8AF0',
        blueDark: '#2771EC',
        white: '#FFFFFF',
    },
    opacity: 1,
    font: {
        tiny: '0.8rem',
        smallest: '1rem',
        small: '1.4rem',
        smallMedium: '1.6rem',
        medium: '2.2rem',
        mediumLarge: '3.5rem',
        large: '4rem',
        large2: '6.5rem',
        largest: '17rem',
    },
    gradient: {
        primary: `background: #67DCA8;
                background: -webkit-linear-gradient(top left, #67DCA8, #5CC597);
                background: -moz-linear-gradient(top left, #67DCA8, #5CC597);
                background: linear-gradient(to bottom right, #67DCA8, #5CC597);
                `,
        secondary: `background: #2771EC
                background: -webkit-linear-gradient(top left, #2771EC, #4D8AF0);
                background: -moz-linear-gradient(top left, #2771EC, #4D8AF0);
                background: linear-gradient(to bottom right, #2771EC, #4D8AF0);
                `,
    },
    shadow: {
        primary: `-webkit-box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);
                box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);`,
    },
    border: {
        primary: '1px solid #DCDCDC',
    },
    flex: {
        vertical: {
            center: `
            display: flex;
            align-items: center;`,
        },
        center: `
            display: flex;
            justify-content: center;
            align-items: center;`,
    },
};

// Bear with me
export const color = {
    primary: '#0052cc', // Blue
    success: '#0B875B', // green
    danger: '#E13C3C', // red
    warning: '#F89C1C', // orange
    secondary: '#F4F5F7', // light grey

    textDarkest: '#172b4d',
    textDark: '#42526E',
    textMedium: '#5E6C84',
    textLight: '#8993a4',
    textLink: '#0052cc',

    backgroundThemeGreen: '#14C691',
    backgroundMedium: '#dfe1e6',
    backgroundLight: '#ebecf0',
    backgroundLightest: '#F4F5F7',
    backgroundLightPrimary: '#D2E5FE',
    backgroundLightSuccess: '#E4FCEF',

    borderLightest: '#dfe1e6',
    borderLight: '#C1C7D0',
    borderInputFocus: '#4c9aff',
};

export const sizes = {
    appNavBarLeftWidth: 64,
    secondarySideBarWidth: 230,
    minViewportWidth: 1000,
};

export const zIndexValues = {
    modal: 1000,
    dropdown: 101,
    navLeft: 100,
};

export const font = {
    regular: 'font-family: "CircularStdBook"; font-weight: normal;',
    medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
    bold: 'font-family: "CircularStdBold"; font-weight: normal;',
    black: 'font-family: "CircularStdBlack"; font-weight: normal;',
    size: (size) => `font-size: ${size}px;`,
};

export const mixin = {
    darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
    lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
    rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
    boxShadowMedium: css`
        box-shadow: 0 0.05rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    `,
    boxShadowDropdown: css`
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
    `,
    truncateText: css`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
    clickable: css`
        cursor: pointer;
        user-select: none;
    `,
    hardwareAccelerate: css`
        transform: translateZ(0);
    `,
    cover: css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    `,
    placeholderColor: (colorValue) => css`
        ::-webkit-input-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        :-moz-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        ::-moz-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
        :-ms-input-placeholder {
            color: ${colorValue} !important;
            opacity: 1 !important;
        }
    `,
    scrollableY: css`
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    `,
    customScrollbar: ({ width = 8, background = color.backgroundMedium } = {}) => css`
        &::-webkit-scrollbar {
            width: ${width}px;
        }
        &::-webkit-scrollbar-track {
            background: none;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 99px;
            background: ${background};
        }
    `,
    backgroundImage: (imageURL) => css`
        background-image: url('${imageURL}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ${color.backgroundLight};
    `,
    link: (colorValue = color.textLink) => css`
        cursor: pointer;
        color: ${colorValue};
        ${font.medium}
        &:hover, &:visited, &:active {
            color: ${colorValue};
        }
        &:hover {
            text-decoration: underline;
        }
    `,
    tag: (background = color.backgroundMedium, colorValue = color.textDarkest) => css`
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        color: ${colorValue};
        background: ${background};
        ${font.bold}
        ${font.size(12)}
    i {
            margin-left: 4px;
        }
    `,
};
