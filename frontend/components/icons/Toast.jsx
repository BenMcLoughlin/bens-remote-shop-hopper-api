import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';
import styled from 'styled-components';
import { color, font, mixin, zIndexValues } from 'frontend/styles/theme';

export const Toast = () => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        const addToast = ({ type = 'success', title, message, duration = 5 }) => {
            const id = uniqueId('toast-');

            setToasts((currentToasts) => [...currentToasts, { id, type, title, message }]);

            if (duration) {
                setTimeout(() => removeToast(id), duration * 1000);
            }
        };

        pubsub.on('toast', addToast);

        return () => {
            pubsub.off('toast', addToast);
        };
    }, []);

    const removeToast = (id) => {
        setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    };

    return (
        <Container>
            <TransitionGroup>
                {toasts.map((toast) => (
                    <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
                        <StyledToast
                            key={toast.id}
                            type={toast.type}
                            onClick={() => removeToast(toast.id)}>
                            <CloseIcon type="close" />
                            {toast.title && <Title>{toast.title}</Title>}
                            {toast.message && <Message>{toast.message}</Message>}
                        </StyledToast>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Container>
    );
};

export const Container = styled.div`
    z-index: ${zIndexValues.Model + 1};
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
