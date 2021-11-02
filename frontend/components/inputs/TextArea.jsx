/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextAreaAutoSize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import { color, font } from 'frontend/styles/theme';

const propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
    minRows: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func
};

const defaultProps = {
    className: undefined,
    invalid: false,
    minRows: 2,
    value: undefined,
    onChange: () => {
        '';
    }
};

export const TextArea = forwardRef(({ className, invalid, onChange, ...textareaProps }, ref) => (
    <StyledTextarea className={className} invalid={invalid}>
        <TextAreaAutoSize
            {...textareaProps}
            onChange={(event) => onChange(event.target.value, event)}
            inputRef={ref || undefined}
        />
    </StyledTextarea>
));

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export const StyledTextarea = styled.div`
    display: inline-block;
    width: 100%;
    textarea {
        overflow-y: hidden;
        width: 100%;
        padding: 8px 12px 9px;
        border-radius: 3px;
        border: 1px solid ${color.borderLightest};
        color: ${color.textDarkest};
        background: ${color.backgroundLightest};
        ${font.regular}
        ${font.size(15)}
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
                }
            `}
    }
`;
