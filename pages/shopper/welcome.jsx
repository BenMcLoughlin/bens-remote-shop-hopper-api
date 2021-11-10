import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Banner, ProfileCard, Paragraph, Image } from 'frontend/components';

const Welcome = () => (
    <Wrapper>
        <Banner
            title={'Welcome'}
            subTitle={'Amazing Local Outfits Our On There Way Soon!'}
            imgSrc={'/../public/assets/banners/clothingOnRack.jpg'}
        />
        <Row>
            <Paragraph
                title={'Well Hello There!'}
                align="left"
                contents={[
                    'Welcome to the ShopHopper community. The best place to find amazing local boutique fashion that perfect matches your style, size and budget.',
                    "We can't wait to help you discover all the incredible local shops and outfits right here in your own back yard. "
                ]}
            />
            <Image src={'/../public/assets/shutterstock/womanInStripedShirt.jpg'} />
        </Row>
        <H1>What Happens Next?</H1>
        <Row>
            <Image src={'/../public/assets/shutterstock/parisStorefront.jpg'} />
            <Paragraph
                title={'Finding You Perfect Outfits'}
                align="right"
                contents={[
                    'Our little personalized shopping robots have already begun searching your local area to find you amazing deals and fresh new items that match your style and size.',
                    "Every week you'll get an email with the very best outfits that we've selected just for you!"
                ]}
            />
        </Row>
        <Row>
            <Paragraph
                title={'The ShopHopper App Is Coming Soon!'}
                align="left"
                contents={[
                    'Our ShopHopper app will bring together all the best local boutique fashion retailer in your area to create a convenient and personalized local shopping experience. ',
                    'We want to make it easy to search through the stores in the area with one simple click so you can save time, look great, and shop local!  '
                ]}
            />
            <Image src={'/../public/assets/media/shopHopperPhone.png'} height={900} />
        </Row>
        <Row>
            <Paragraph
                title={'We Want To Hear From You!'}
                align="center"
                contents={[
                    'This is just the beginning of our local fashion shopping initiative and we want to make our local shopping platform the best it can be. As we continue to build our platform we want to hear form you, our community, on how we can make it better!',
                    'Tell us what features well help you find better outfits locally? What challenges you are facing discovering items that match your style and size? And How we can improve.',
                    'We appreciate your feedback and with your help, we know, we can transform how we shop locally.'
                ]}
            />
        </Row>
        <Row>
            <ProfileCard
                imgSrc="/../public/assets/profilePhotos/ryanLancaster.jpg"
                title="Ryan Lancaster"
                subTitle={'President & CEO Co-Founder'}
            />
            <Paragraph
                title={'Thank You For Being A Part Of This Movement'}
                align="left"
                contents={[
                    '"From the entire ShopHopper Team, thank you so much for joining our community and for being a part of this movement to create a better way to shop locally. We believe local  boutique retailers offer more than just unique fashion. They are the drivers of our local economy, the catalyst for more responsible fashion manufacturing, and the solution to a more environmentally and socially conscious way of shopping.',
                    'We\'re on a mission to make local retail shopping more convenient, personalize, and fun and we thank you for joining us on that journey."',
                    'We appreciate your feedback and with your help, we know, we can transform how we shop locally.'
                ]}
            />
        </Row>
    </Wrapper>
);

Welcome.propTypes = {
    arrayOfComponents: PropTypes.array
};

export default Welcome;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
`;
const Row = styled.div`
    width: 80%;
    display: flex;
    gap: 4rem;
    padding: 5rem;
    justify-content: space-between;
    position: relative;
`;
const H1 = styled.div`
    font-size: 3rem;
`;
