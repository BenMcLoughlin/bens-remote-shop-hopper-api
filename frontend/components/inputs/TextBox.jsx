/* eslint-disable */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import styled, { css } from 'styled-components';
import { color, font } from 'frontend/styles/theme';

export const TextBox = forwardRef(({ icon, className, filter, onChange, ...inputProps }, ref) => {
    const handleChange = (event) => {
        if (!filter || filter.test(event.target.value)) {
            onChange(event.target.value, event);
        }
    };

    return (
        <StyledInput className={className}>
            {/* {icon && <StyledIcon type={icon} size={15} />} todo */}
            <MagnifyingGlass size={20} style={{ position: 'absolute', margin: 5 }} />
            <InputElement
                {...inputProps}
                onChange={handleChange}
                hasIcon={Boolean(icon)}
                ref={ref}
            />
        </StyledInput>
    );
});

const propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    invalid: PropTypes.bool,
    filter: PropTypes.instanceOf(RegExp),
    onChange: PropTypes.func
};

const defaultProps = {
    className: undefined,
    value: undefined,
    icon: undefined,
    invalid: false,
    filter: undefined,
    onChange: () => {}
};

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export const StyledInput = styled.div`
    position: relative;
    display: inline-block;
    height: 32px;
    width: 100%;
`;

export const InputElement = styled.input`
    height: 100%;
    width: 100%;
    padding: 0 7px;
    border-radius: 3px;
    border: 1px solid ${color.borderLightest};
    color: ${color.textDarkest};
    background: ${color.backgroundLightest};
    transition: background 0.1s;
    ${font.regular}
    ${font.size(15)}
  ${(props) => props.hasIcon && 'padding-left: 32px;'}
  &:hover {
        background: ${color.backgroundLight};
    }
    &:focus {
        background: #fff;
        border: 1px solid ${color.borderInputFocus};
        box-shadow: 0 0 0 1px ${color.borderInputFocus};
    }
    ${(props) =>
        props.invalid &&
        css`
            &,
            &:focus {
                border: 1px solid ${color.danger};
                box-shadow: none;
            }
        `}
`;

export const StyledIcon = styled.i`
    position: absolute;
    top: 8px;
    left: 8px;
    pointer-events: none;
    color: ${color.textMedium};
`;
