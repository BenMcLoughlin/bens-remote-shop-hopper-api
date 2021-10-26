import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { CSSTransition } from "react-transition-group"

export const SlideTransition = (props) => {
    const [slideIn, setSlideIn] = useState(false);

    if (props.timeout) {
        setTimeout(() => setSlideIn(true), props.timeout);
    } else {
        setSlideIn(props.in);
    }

    return (
        <TransitionInLeft
            in={slideIn}
            mountOnEnter
            unmountOnExit
            timeout={1000}
            classNames="transition-back"
        >
            {props.children}
        </TransitionInLeft>
    );
};

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  30% {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  100% {opacity: 1;
        transform: 
        translate3d(0, 0, 0);
  }
`
const fadeOut = keyframes`
  0% { opacity: 1;}
  30% { opacity: 0;}
  100% {opacity: 0;}
`

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }

  30% {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const TransitionInLeft = styled(CSSTransition)`
  &.transition-forward-enter-active {
    animation-name: ${fadeInRight};
    animation-duration: 1s;
  }
  &.transition-back-enter-active {
    animation-name: ${fadeInLeft};
    animation-duration: 1s;
  }
  &.transition-forward-exit-active,
  &.transition-back-exit-active {
    animation-name: ${fadeOut};
    animation-duration: 1.1s;
  }
`
