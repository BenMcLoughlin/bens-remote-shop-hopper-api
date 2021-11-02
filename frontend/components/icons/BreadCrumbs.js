import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font } from 'frontend/styles/theme';

const propTypes = {
    items: PropTypes.array.isRequired
};

export const Breadcrumbs = ({ items }) => (
    <Container>
        {items.map((item, index) => (
            <Fragment key={item}>
                {index !== 0 && <Divider>/</Divider>}
                {item}
            </Fragment>
        ))}
    </Container>
);

Breadcrumbs.propTypes = propTypes;

export const Container = styled.div`
    color: ${color.textMedium};
    ${font.size(15)};
`;

export const Divider = styled.span`
    position: relative;
    top: 2px;
    margin: 0 0.1rem;
    ${font.size(18)};
`;
