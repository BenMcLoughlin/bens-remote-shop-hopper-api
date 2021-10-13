import React from 'react';
import PropTypes from 'prop-types';
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

export function getStaticProps(context) {
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

Landing.propTypes = {
    welcome: PropTypes.string,
    whoWeAre: PropTypes.string,
    howItWorks: PropTypes.string,
    callout: PropTypes.string,
    testimonials: PropTypes.string,
    news: PropTypes.string,
    footer: PropTypes.string
};

export default Landing;

// ---------------------------STYLES-------------------------------------------//

const FixedPosition = styled.div`
    height: 10rem;
    position: absolute;
    width: 100%;
    font-size: calc(0.03em + 0.66vw);
    height: 100%;
`;