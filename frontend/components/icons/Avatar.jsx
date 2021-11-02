import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, mixin } from 'frontend/styles/theme';

const propTypes = {
    className: PropTypes.string,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number
};

const defaultProps = {
    className: undefined,
    avatarUrl: null,
    name: '',
    size: 32
};

const Avatar = ({ className, avatarUrl, name, size, ...otherProps }) => {
    const sharedProps = {
        className,
        size,
        'data-testid': name ? `avatar:${name}` : 'avatar',
        ...otherProps
    };

    if (avatarUrl) {
        return <Image avatarUrl={avatarUrl} {...sharedProps} />;
    }

    return (
        <Letter color={getColorFromName(name)} {...sharedProps}>
            <span>{name.charAt(0)}</span>
        </Letter>
    );
};

const colors = [
    '#DA7657',
    '#6ADA57',
    '#5784DA',
    '#AA57DA',
    '#DA5757',
    '#DA5792',
    '#57DACA',
    '#57A5DA'
];

const getColorFromName = (name) => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

export const Image = styled.div`
    display: inline-block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 100%;
    ${(props) => mixin.backgroundImage(props.avatarUrl)}
`;

export const Letter = styled.div`
    display: inline-block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 100%;
    text-transform: uppercase;
    color: #fff;
    background: ${(props) => props.color};
    ${font.medium}
    ${(props) => font.size(Math.round(props.size / 1.7))}
  & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;
