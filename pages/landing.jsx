import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { landingProps } from '../controller/landingProps';
import Image from 'next/image';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {
    Header,
    HowItWorks,
    News,
    Testimonials,
    Callout,
    Welcome,
    WhoWeAre,
    Footer,
} from '../components/landing';
import { ScrollUp } from '../components';

export async function getStaticProps(context) {
    return {
        props: landingProps,
    };
}

const Landing = ({ welcome, whoWeAre, howItWorks, callout, testimonials, news, footer }) => {
    return (
        <Layout>
            <FixedPosition>
                <Header to="test1" />
                <Welcome {...welcome} />
                <WhoWeAre {...whoWeAre} />
                <HowItWorks {...howItWorks} />
                <Callout {...callout} />
                <Testimonials {...testimonials} />
                <News {...news} />
                <Footer {...footer} />
                <ScrollUp />
            </FixedPosition>
        </Layout>
    );
};

export default Landing;

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    height: 10rem;
`;
const FixedPosition = styled.div`
    height: 10rem;
    position: absolute;
    width: 100%;

    height: 100%;
`;
