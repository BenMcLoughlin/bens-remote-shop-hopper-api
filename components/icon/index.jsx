import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontIconCodes = {
    [`bug`]: '\\e90f',
    [`stopwatch`]: '\\e914',
    [`task`]: '\\e910',
    [`story`]: '\\e911',
    [`arrow-down`]: '\\e90a',
    [`arrow-left-circle`]: '\\e917',
    [`arrow-up`]: '\\e90b',
    [`chevron-down`]: '\\e900',
    [`chevron-left`]: '\\e901',
    [`chevron-right`]: '\\e902',
    [`chevron-up`]: '\\e903',
    [`board`]: '\\e904',
    [`help`]: '\\e905',
    [`link`]: '\\e90c',
    [`menu`]: '\\e916',
    [`more`]: '\\e90e',
    [`attach`]: '\\e90d',
    [`plus`]: '\\e906',
    [`search`]: '\\e907',
    [`issues`]: '\\e908',
    [`settings`]: '\\e909',
    [`close`]: '\\e913',
    [`feedback`]: '\\e918',
    [`trash`]: '\\e912',
    [`github`]: '\\e915',
    [`shipping`]: '\\e91c',
    [`component`]: '\\e91a',
    [`reports`]: '\\e91b',
    [`page`]: '\\e919',
    [`calendar`]: '\\e91d',
    [`arrow-left`]: '\\e91e',
    [`arrow-right`]: '\\e91f'
};

const propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
    size: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number
};

const defaultProps = {
    className: undefined,
    size: 16,
    left: 0,
    top: 0
};

const Icon = ({ type, ...iconProps }) => (
    <StyledIcon {...iconProps} data-testid={`icon:${ type }`} code={fontIconCodes[type]} />
);

export const StyledIcon = styled.i`
    display: inline-block;
    font-size: ${ (props) => `${ props.size }px` };
    ${ (props) => props.left || props.top ? `transform: translate(${ props.left }px, ${ props.top }px);` : '' }
    &:before {
        content: "${ (props) => props.code }";
        font-family: "jira" !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;