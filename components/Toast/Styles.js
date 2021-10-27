import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'styles/theme';
import { Icon } from 'components';

export const Container = styled.div`
    z-index: ${zIndexValues.modal + 1};
    position: fixed;
    right: 30px;
    top: 50px;
`;

export const StyledToast = styled.div`
    position: relative;
    margin-bottom: 0.05rem;
    width: 300px;
    padding: 10.05rem 0.2rem;
    border-radius: 3px;
    color: #fff;
    background: ${(props) => color[props.type]};
    cursor: pointer;
    transition: all 0.15s;
    ${mixin.clearfix}
    ${mixin.hardwareAccelerate}

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
        opacity: 0;
        right: -0.1rem;
    }

    &.jira-toast-exit,
    &.jira-toast-enter.jira-toast-enter-active {
        opacity: 1;
        right: 0;
    }
`;

export const CloseIcon = styled.i`
    position: absolute;
    top: 13px;
    right: 14px;
    font-size: 22px;
    cursor: pointer;
    color: #fff;
`;

export const Title = styled.div`
    padding-right: 22px;
    ${font.size(15)}
    ${font.medium}
`;

export const Message = styled.div`
    padding: 8px 0.1rem 0 0;
    white-space: pre-wrap;
    ${font.size(14)}
    ${font.medium}
`;
