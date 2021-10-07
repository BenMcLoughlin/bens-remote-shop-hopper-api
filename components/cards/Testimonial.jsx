import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { profile, star } from '../../public/assets/testimonials/profile.js';

export const Testimonial = ({ name, role, content, rating, image }) => {
    return (
        <Wrapper>
            <ProfilePhoto>
                <Image src={profile[image]} width={200} height={200} />
            </ProfilePhoto>
            <About>
                <Name>{name}</Name>
                <Role>{role}</Role>
                <Content>"{content}"</Content>
                <Stars>
                    {[1, 2, 3, 4, 5].map((d) => (
                        <Image src={star} width={15} height={15} />
                    ))}
                </Stars>
            </About>
        </Wrapper>
    );
};

export default Testimonial;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 60rem;
    width: 37rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    justify-content: space-center;
`;
const ProfilePhoto = styled.div`

    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
    -moz-box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
    box-shadow: 2px 39px 48px -16px rgba(0, 0, 0, 0.27);
`;
const Name = styled.div`
    font-size: ${(p) => p.theme.font.smallMedium};
    font-weight: 800;
    height: 3rem;
`;
const Role = styled.div`
    font-size: ${(p) => p.theme.font.smallMedium};
    height: 4rem;
    font-weight: 300;
`;
const Content = styled.div`
    font-size: ${(p) => p.theme.font.small};
    height: 17rem;
    font-style: italic;
    font-weight: 200;
    text-transform: none;
    text-align: center;
`;
const About = styled.div`
    font-size: ${(p) => p.theme.font.medium};
    height: 45rem;
    width: 40rem;
    padding: 2rem;
    margin-top: -7rem;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
        -webkit-box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
        -moz-box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
        box-shadow: 2px 3px 48px -16px rgba(0, 0, 0, 0.27);
    }
    transition: all 0.3s ease;
`;
const Stars = styled.div`
    font-size: ${(p) => p.theme.font.small};
    height: 2rem;
    width: 20rem;
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: red;
`;
const Star = styled(Image)`
    font-size: ${(p) => p.theme.font.small};
    height: 2rem;
    width: 20rem;
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: red;
`;
