/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useWindowSize } from 'frontend/hooks';

export const SlideToSide = ({ children, array, position }) => {
    const [direction, setDirection] = useState('forward');
    const [lastValue, setLastValue] = useState(0);
    const [timeout, setTimeout] = useState(1000);

    const [width] = useWindowSize();

    useEffect(() => {
        setDirection(lastValue < position ? 'forward' : 'back');
        setLastValue(position);
        if (width < 600) {
            setTimeout(0);
        }
    }, [lastValue, position, width]);

    return (
        <TransitionGroup>
            {array.map(
                (d, i) =>
                    i === position && (
                        <Transition
                            key={i}
                            timeout={timeout}
                            classNames={`transition-${direction}`}>
                            {children}
                        </Transition>
                    )
            )}
        </TransitionGroup>
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
`;
const fadeOut = keyframes`
  0% { opacity: 0;}
  30% { opacity: 0;}
  100% {opacity: 0;}
`;

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
`;

const Transition = styled(CSSTransition)`
    width: 100%;
    position: relative;
    height: 100%;
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
`;
