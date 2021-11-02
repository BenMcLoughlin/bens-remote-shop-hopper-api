/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

export const FadeTransition = (props) => {
    const [ fadeIn, setFadeIn ] = useState(props.in);

    useEffect(() => {
        if (props.timeout) {
            setTimeout(() => setFadeIn(true), props.timeout);
        } else {
            setFadeIn(props.in);
        }
    }, [ props.in, props.timeout ]);

    return (
        <Transition in={fadeIn} mountOnEnter unmountOnExit timeout={700} classNames="fade-in">
            {props.children}
        </Transition>
    );
};

const Transition = styled(CSSTransition)`
  &.fade-in-enter {
    opacity: 0;
  }
  &.fade-in-enter-active {
    opacity: 1;
    transition: all 800ms;
  }
`;