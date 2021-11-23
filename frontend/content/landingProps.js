export const landingProps = {
    nameOfProps: 'landingProps',
    welcome: {
        title: "LET'S FIND YOUR PERFECT OUTFIT, LOCALLY",
        subTitle:
            'ShopHopper searches through all your favorite local independent retailers to bring you the best deals on perfect “for you” pieces.'
    },
    callout1: {
        image: 'womanChoosing',
        fontColor: 'black',
        blotch1: 'bigBlueLittleYellow',
        blotch2: 'blueOrangeGrey',
        title: '<p>discover amazing local deals on outfits selected <b>just for you!</b></p>',
        clothingIcon: 'handbag'
    },
    howItWorks: {
        about: 'ShopHopper is a 100% Free Service Focused On Making It Easier To Shop Locally',
        title: 'how it works',
        cards: [
            {
                number: 1,
                titleText: 'sign up for free and choose your style',
                image: 'actionStep1',
                flexDirection: 'row',
                brushImage: '/public/assets/landing/brushNumbers/brushNumber1.png'
            },
            {
                number: 2,
                titleText: "we'll hop through all the local shops",
                image: 'actionStep2',
                flexDirection: 'row-reverse',
                brushImage: '/public/assets/landing/brushNumbers/brushNumber2.png'
            },
            {
                number: 3,
                titleText: 'delivering the best deals just for you',
                image: 'actionStep3',
                flexDirection: 'row',
                brushImage: '/public/assets/landing/brushNumbers/brushNumber3.png'
            }
        ]
    },
    whoWeAre: {
        title: 'How ShopHopper Can Help You Shop Smarter',
        cards: [
            {
                icon: 'computer',
                title: 'Never miss a sale, discount, or flash sale on your size and style',
                subTitle:
                    'We search through all your favorite local shops to find the best deals for your style profile'
            },
            {
                icon: 'tShirts',
                title: 'Discover curated pieces selected to match your style and budget',
                subTitle:
                    'Our stylists will deliver perfect "for you" pieces that will have you looking and feeling amazing'
            },
            {
                icon: 'heart',
                title: 'Support independant retailers in your community',
                subTitle: 'Find amazing gems from independent retailers hiding in your own backyard'
            },
            {
                icon: 'map',
                title: 'Get directions to local stores or buy online',
                subTitle:
                    'Easily get directions to local stores or order online and receive your purchase directly to your door'
            }
        ]
    },

    callout2: {
        image: 'heel',
        title: 'QUIT RUNNING AROUND…',
        fontColor: 'white',
        blotch1: 'blueRedSpackles',
        blotch2: 'redOrangeBlue',
        subTitle: `<p>we're bringing the best local deals and perfect <b>for you</b> items right to your phone</p>`,
        clothingIcon: 'yellowShoes'
    },
    testimonials: {
        title: 'Testimonials',
        subTitle: 'LOCAL SHOPPERS LOVE SHOPHOPPER',
        cards: [
            {
                name: 'Angel Kaushal',
                role: 'LOCAL SHOPPER',
                content:
                    'Great idea! Love this as a way for people to shop local and highlight local business! Love the idea of highlighting woman-run or different cultures business too!',
                rating: 5,
                image: 'AngelProfilePhoto'
            },
            {
                name: 'Justina LeeStolz',
                role: 'LOCAL SHOPPER',
                content:
                    'I would love one centralized searchable engine to find all local products like Amazon which amalgamates all products to one place',
                rating: 5,
                image: 'JustinaProfilePhoto'
            },
            {
                name: 'Candacy Glinsbockel',
                role: 'LOCAL SHOPPER',
                content: "OMG… I can't believe you can show me what’s on sale in my size locally... This is amazing!",
                rating: 5,
                image: 'candacyGlinsbockel'
            }
        ]
    },
    news: {
        title: 'NEWS & EVENTS',
        cards: [
            {
                number: '1',
                title: 'MODEL SHARES HER PACKING LIST FOR SUMMER',
                subTitle: 'Ryan Lancaster  17 January 2018',
                content:
                    'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable . foliage of my trees, and but a thousand',
                image: 'guysTalking',
                flexDirection: 'row',
                link: ''
            },
            {
                number: '1',
                title: 'NOTHING COMPARES TO SWEDISH SUMMER',
                subTitle: 'Ryan Lancaster  17 January 2018',
                content:
                    'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable . foliage of my trees, and but a thousand',
                image: 'vrHeadset',
                flexDirection: 'row-reverse',
                link: ''
            }
        ]
    },
    footer: {
        top: {
            title: 'Sign up for our private beta!',
            subTitle:
                'Help us build the best local shopping platform possible. Sign up to be a part of our ShopHopper private beta and give us your thoughts and feedback to help power the local shopping movement.'
        },
        bottom: {
            title: 'Our Shophopper App is Coming Soon!',
            subTitle: 'Please sign up to get more info and share your thoughts'
        },
        options: {
            social: ['Twitter', 'Facebook', 'Instagram', 'Youtube', 'Discord'],
            copyright: ['© 2021 Shop Hopper. All rights reserved.', 'ryan@shophopper.ca', '(250) 318-0225']
        }
    }
};
