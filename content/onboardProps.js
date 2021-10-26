import useGlobal from '../globalState/store';
import brandsList from '../content/data/onboardOptions/brands.json';

export function onboardProps() {
    const [ globalState, globalActions ] = useGlobal();

    const { setGlobalState } = globalActions;

    const { user } = globalState;

    return {
        props: {
            header: {
                links: {
                    top: [
                        {
                            title: 'sign up',
                            subTitle: 'join free',
                            link: ''
                        },
                        {
                            title: 'wish list',
                            subTitle: 'add fav',
                            link: ''
                        }
                    ],
                    bottom: [
                        {
                            title: 'Get The App',
                            link: ''
                        }
                    ]
                },

                categories: [ 'Womenswear', 'Menswear', 'accessories', 'beauty', 'more' ]
            },

            location: {
                images: [
                    {
                        src: '/../public/assets/onboard/shutterstock/womansWear.png',
                        caption: 'Womanswear'
                    },
                    {
                        src: '/../public/assets/onboard/shutterstock/mensWear.png',
                        caption: 'Menswear'
                    }
                ],
                question: 'Which do you prefer to shop? ',
                handleErrors: () => user.location.lat !== 49.8
            },
            gender: {
                images: [
                    {
                        src: '/../public/assets/onboard/shutterstock/womanByBlueWall.jpg',
                        caption: 'Womanswear'
                    },
                    {
                        src: '/../public/assets/onboard/shutterstock/manByGreyWall.jpg',
                        caption: 'Menswear'
                    }
                ],
                question: 'Which do you prefer to shop? ',
                dropdown: {
                    title: 'choose your style',
                    options: [ 'mens', 'womans' ],
                    value: globalState.user.gender,
                    handleChange: (value) => setGlobalState({ user: { gender: value } })
                },
                handleErrors: () => user.gender.length > 0
            },
            styles: {
                options: [
                    'casual',
                    'bohemian',
                    'activeWear',
                    'vintage',
                    'businessCasual',
                    'hipHop',
                    'skater',
                    'punkRock'
                ],
                question: 'Choose at least 2 styles you like to wear',
                selectedValues: globalState.user.styles,
                handleChange: (value) => {
                    const { styles } = globalState.user;
                    const newValues = styles.includes(value)
                        ? styles.filter((d) => d !== value)
                        : [ ...styles, value ];
                    setGlobalState({ user: { styles: newValues } });
                },
                handleErrors: () => user.styles.length >= 2
            },
            brands: {
                options: brandsList,
                question: 'Choose all the brands you love to buy',
                selectedValues: globalState.user.brands,
                handleChange: (value) => {
                    const { brands } = globalState.user;
                    const newValues = brands.includes(value)
                        ? brands.filter((d) => d !== value)
                        : [ ...brands, value ];
                    setGlobalState({ user: { brands: newValues } });
                },
                handleErrors: () => user.brands.length >= 2
            },
            sizes: {
                sizeTypes: [
                    {
                        question: 'Whats your top size?',
                        component: 'Dropdown',
                        options: [
                            'XS / 0',
                            'XS / 2',
                            'S / 4',
                            'S / 6',
                            'M / 8',
                            'M / 10',
                            'L / 12',
                            'L / 14',
                            'XL / 16',
                            'XL / 18',
                            'XXL / 22',
                            'XXL / 24'
                        ],
                        value: globalState.user.size.top,
                        name: 'top'
                    },
                    {
                        question: 'Whats your waist size?',
                        options: [
                            '24-25 / XXS',
                            '25-26 / XS',
                            '27-28 / S',
                            '28-29 / S',
                            '29-30 / M',
                            '31-32 / M',
                            '33-34 / L',
                            '35-37 / L',
                            '38-39 / XL',
                            '40-41 / XL',
                            '42-43 / XXL',
                            '44-46 / XXL',
                            '47-49 / 3XL',
                            '50-52 / 3XL',
                            '53-55 / 4XL',
                            '56-58 / 4XL'
                        ],
                        value: globalState.user.size.bottom,
                        name: 'bottom'
                    },
                    {
                        question: 'Whats your shoe size?',
                        options: [
                            '4 / 212',
                            '5 / 220',
                            '6 / 229',
                            '7 / 237',
                            '8 / 246',
                            '9 / 254',
                            '10 / 262',
                            '11 / 270'
                        ],
                        value: globalState.user.size.shoes,
                        name: 'shoes'
                    }
                ],
                handleChange: (value, name) => {
                    console.log('Hello from onboardProps');
                    setGlobalState({ user: { size: { [name]: value } } });
                },
                handleErrors: () => true
            }
        },
        globalState,
        setGlobalState
    };
}