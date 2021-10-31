import styled, { css } from 'styled-components';
import { color, font, mixin } from 'frontend/styles/theme';
import { Spinner } from 'frontend/components/icons';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icons';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'success', 'danger', 'secondary', 'empty']),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    iconSize: PropTypes.number,
    disabled: PropTypes.bool,
    isWorking: PropTypes.bool,
    onClick: PropTypes.func
};

const defaultProps = {
    className: undefined,
    children: undefined,
    variant: 'secondary',
    icon: undefined,
    iconSize: 18,
    disabled: false,
    isWorking: false,
    onClick: () => {}
};

// eslint-disable-next-line
export const SpinnerButton = forwardRef(
    ({ children, variant, icon, iconSize, disabled, isWorking, onClick, ...buttonProps }, ref) => {
        const handleClick = () => {
            if (!disabled && !isWorking) {
                onClick();
            }
        };

        return (
            <StyledButton
                {...buttonProps}
                onClick={handleClick}
                variant={variant}
                disabled={disabled || isWorking}
                isWorking={isWorking}
                iconOnly={!children}
                ref={ref}>
                {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

                {!isWorking && icon && typeof icon === 'string' ? (
                    <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
                ) : (
                    icon
                )}
                {children && <Text withPadding={isWorking || icon}>{children}</Text>}
            </StyledButton>
        );
    }
);

const getIconColor = (variant) =>
    ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff';

SpinnerButton.propTypes = propTypes;
SpinnerButton.defaultProps = defaultProps;

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    vertical-align: middle;
    line-height: 1;
    padding: 0 ${(props) => (props.iconOnly ? 9 : 12)}px;
    white-space: nowrap;
    border-radius: 3px;
    transition: all 0.1s;
    appearance: none;
    ${mixin.clickable}
    ${font.size(14.5)}
  ${(props) => buttonVariants[props.variant]}
  &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`;

const colored = css`
    color: #fff;
    background: ${(props) => color[props.variant]};
    ${font.medium}
    &:not(:disabled) {
        &:hover {
            background: ${(props) => mixin.lighten(color[props.variant], 0.15)};
        }
        &:active {
            background: ${(props) => mixin.darken(color[props.variant], 0.1)};
        }
        ${(props) =>
            props.isActive &&
            css`
                background: ${mixin.darken(color[props.variant], 0.1)} !important;
            `}
    }
`;

const secondaryAndEmptyShared = css`
    color: ${color.textDark};
    ${font.regular}
    &:not(:disabled) {
        &:hover {
            background: ${color.backgroundLight};
        }
        &:active {
            color: ${color.primary};
            background: ${color.backgroundLightPrimary};
        }
        ${(props) =>
            props.isActive &&
            css`
                color: ${color.primary};
                background: ${color.backgroundLightPrimary} !important;
            `}
    }
`;

const buttonVariants = {
    primary: colored,
    success: colored,
    danger: colored,
    secondary: css`
        background: ${color.secondary};
        ${secondaryAndEmptyShared};
    `,
    empty: css`
        background: #fff;
        ${secondaryAndEmptyShared};
    `
};

export const StyledSpinner = styled(Spinner)`
    position: relative;
    top: 1px;
`;

export const Text = styled.div`
    padding-left: ${(props) => (props.withPadding ? 7 : 0)}px;
`;
