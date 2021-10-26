import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { landingProps } from '../content/landingProps';
import { HowItWorks, Testimonials, Callout, Welcome, WhoWeAre } from '../components/landing';

import { ScrollUp } from '../components';

export function getStaticProps(context) {
    return {
        props: landingProps
    };
}

const Landing = ({ welcome, whoWeAre, howItWorks, callout1, callout2, testimonials }) => (
    <Wrapper>
        <Welcome {...welcome} />
        <Callout {...callout1} />
        <HowItWorks {...howItWorks} />
        <WhoWeAre {...whoWeAre} />
        <Callout {...callout2} />
        <Testimonials {...testimonials} />
        <ScrollUp />
    </Wrapper>
);

Landing.propTypes = {
    welcome: PropTypes.object,
    whoWeAre: PropTypes.object,
    howItWorks: PropTypes.object,
    callout: PropTypes.object,
    testimonials: PropTypes.object,
    news: PropTypes.object,
    callout1: PropTypes.func,
    callout2: PropTypes.func
};

export default Landing;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`;