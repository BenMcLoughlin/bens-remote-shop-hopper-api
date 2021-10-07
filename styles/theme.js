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
        white: '#FFFFFF'
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
        largest: '17rem'
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
                `
    },
    shadow: {
        primary: `    -webkit-box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);
                     -moz-box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);
                   box-shadow: 1px 19px 77px -34px rgba(0, 0, 0, 0.75);
`
    },
    border: {
        primary: '1px solid #DCDCDC'
    },
    flex: {
        vertical: {
            center: `
             display: flex;
             align-items: center;
            `
        },
        center: `
             display: flex;
             justify-content: center;
             align-items: center;
            `
    }
};