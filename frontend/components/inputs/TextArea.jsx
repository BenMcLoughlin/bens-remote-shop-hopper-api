/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextAreaAutoSize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';
import { color, font } from 'frontend/styles/theme';
import { startCase } from 'frontend/utils/strings';

const propTypes = {
    className: PropTypes.string,
    invalid: PropTypes.bool,
    minRows: PropTypes.number,
    value: PropTypes.string,
    label: PropTypes.string,
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

export const TextArea = forwardRef(
    ({ className, invalid, value, label, onChange, ...textareaProps }, ref) => (
        <StyledTextarea className={className} invalid={invalid}>
            <Label textValue={value} htmlFor={label}>
                <LabelText>{startCase(label)}</LabelText>
            </Label>
            <TextAreaAutoSize
                {...textareaProps}
                onChange={(event) => onChange(event.target.value, event)}
                inputRef={ref || undefined}
            />
        </StyledTextarea>
    )
);

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export const StyledTextarea = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    textarea {
        overflow-y: hidden;
        width: 100%;
        padding: 8px 12px 9px;
        border-radius: 3px;
        border: 1px solid ${color.borderLightest};
        color: ${color.textDarkest};
        background: ${color.backgroundLightest};
        ${font.regular};
        ${font.size(15)};
    &:focus {
            background: #fff;
            border: 1px solid grey;
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

const moveLabelUp = `
    top: -.2rem;
    font-size: 1.2rem;
    left 0.5rem;
    height: 1rem;
    font-weight: bold;
    width: auto;
    padding: .5rem;
`;

const LabelText = styled.div`
    z-index: 2;
    width: auto;
    margin-bottom: 1.2rem;
`;

const Label = styled.label`
    height: 2rem;
    width: 20rem;
    position: absolute;
    top: -1.9rem;
    z-index: 2;
    left 3rem;
    cursor: text;
    display: flex;
    font-size: ${(props) => props.theme.font.small};
    justify-content: center;
            width: auto;
        padding: .5rem;
    align-items: center;
        ${TextAreaAutoSize}:focus ~ & {
    ${moveLabelUp}

  };
  ${(props) => props.textValue.toString().length > 0 && moveLabelUp};
  transition: all .5s ease;
`;
