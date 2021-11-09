import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const About = () => <Wrapper>We're a bunch of cool guys!</Wrapper>;

About.propTypes = {
    welcome: PropTypes.object,
    whoWeAre: PropTypes.object,
    howItWorks: PropTypes.object,
    callout: PropTypes.object,
    testimonials: PropTypes.object,
    news: PropTypes.object,
    callout1: PropTypes.object,
    callout2: PropTypes.object
};

export default About;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`;
