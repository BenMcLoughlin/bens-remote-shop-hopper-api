import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { landingProps } from '../content/landingProps';
import {
    Header,
    HowItWorks,
    News,
    Testimonials,
    Callout,
    Welcome,
    WhoWeAre,
    Footer
} from '../components/landing';
import { ScrollUp } from '../components';

export async function getStaticProps(context) {
    return {
        props: landingProps
    };
}

const Landing = ({ welcome, whoWeAre, howItWorks, callout, testimonials, news, footer }) => (
    <Layout isMain>
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

export default Landing;

// ---------------------------STYLES-------------------------------------------//

const FixedPosition = styled.div`
    height: 10rem;
    position: absolute;
    width: 100%;
    font-size: calc(0.03em + 0.66vw);
    height: 100%;
`;