import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Banner, ProfileCard, Paragraph, Image } from 'frontend/components';

const About = () => (
    <Wrapper>
        <Banner title={'About'} subTitle={'WHO WE ARE'} imgSrc={'/../public/assets/banners/twoFriendsWalking.jpg'} />
        <Row>
            <Paragraph
                title={'Building a better way to shop locally'}
                align="left"
                contents={[
                    "Let's be honest, no one has time to run around to a bunch of different stores anymore. And, finding outfits that match our style and size shouldn't be so hard...",
                    'So we created ShopHopper as a better, easier, and more personalized way to shop boutique local fashion. '
                ]}
            />
            <Image src={'/../public/assets/shutterstock/womanLookingAtPhone.jpg'} width={900} />
        </Row>
        <Row>
            <Image src={'/../public/assets/shutterstock/parisStorefront.jpg'} />
            <Paragraph
                title={'One spot to find all your favourite local shops'}
                align="right"
                contents={[
                    'ShopHopper brings together all the best local boutique fashion retailer in your area to create a convenient and personized local shopping experience.',
                    "Now it's easy to search through the stores in the area to find outfits that match your style and size and also snag some amazing deals!"
                ]}
            />
        </Row>
        <Row>
            <Image src={'/../public/assets/shutterstock/womanChoosing.jpg'} />
            <Paragraph
                title={'One spot to find all your favourite local shops'}
                contents={[
                    'We want to bring you that feeling you get when you find that perfect outfits that not only look great but fit perfectly, everyday!',
                    "With our personalized fashion recommendations we'll automatically find you the best deals outfits that perfectly match your style and size from local retailers you love. "
                ]}
            />
        </Row>
        <Row>
            <Paragraph
                title={'What We Stand For'}
                align="center"
                contents={[
                    'It’s our mission to change the way people shop locally. We want to make it easier for local shoppers to find amazing boutique local retailers and give them the personalize experience to help them fall in love with products that perfectly match their style and size. ',
                    'We want to boost the profiles of local retailers and make it as easy to shop locally as it is to shop on any big eCommerce platform. ShopHopper is not just a shopping app but a truly personalized and convenient local shopping experience. We’re here to help you save time, look great and support local.'
                ]}
            />
        </Row>
        <H1>Our Team </H1>
        <Row>
            <ProfileCard
                imgSrc="/../public/assets/profilePhotos/ryanLancaster.jpg"
                title="Ryan Lancaster"
                subTitle={'President & CEO Co-Founder'}
            />
            <ProfileCard
                imgSrc="/../public/assets/profilePhotos/nathanMosely.jpg"
                title="Nathan Moseley"
                subTitle={'Senior Software Engineer Co-Founder'}
            />
            <ProfileCard
                imgSrc="/../public/assets/profilePhotos/benMcLoughlin.jpg"
                title="Ben McLoughlin"
                subTitle={'Software Engineer Co-Founder'}
            />
        </Row>
    </Wrapper>
);

About.propTypes = {
    arrayOfComponents: PropTypes.array
};

export default About;

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
    background: #e4eeed;
    padding: 5rem;
    justify-content: space-between;
    position: relative;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
const H1 = styled.div`
    font-size: 3rem;
`;
