/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-scroll';

export const Next = ({
    handleChange,
    onNext,
    valid,
    label = 'Press Enter',
    to = '',
    top,
    right,
    id = 'basic',
    enablePressEnter
}) => {
    console.log('valid: ', valid);

    useEffect(() => {
        const pressEnter = (event) => {
            if (event.key === 'Enter') {
                handleChange(valid);
                if (onNext) {
                    onNext();
                }
            }
        };

        if (valid) {
            window.addEventListener('keydown', pressEnter);
            return () => window.removeEventListener('keydown', pressEnter);
        }
    }, [handleChange, onNext, valid, enablePressEnter]);

    return (
        <Wrapper
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            top={top}
            right={right}>
            <CSSTransition in={valid} mountOnEnter unmountOnExit timeout={700} classNames="fade-in">
                <Circle valid={valid}>
                    <ArrowRight
                        id={`${id}_next`}
                        valid={valid}
                        onClick={() => {
                            handleChange(valid);
                            if (onNext) {
                                onNext();
                            }
                        }}
                    />
                    <Label>{label}</Label>
                </Circle>
            </CSSTransition>
        </Wrapper>
    );
};

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled(Link)`
    z-index: 50000;
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
`;

const Circle = styled.div`
    border-radius: 50%;
    ${(props) => props.theme.neomorph};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.2rem;
    width: 5.2rem;
`;

const ArrowRight = styled(ArrowIosForwardOutline)`
    cursor: ${(props) => (props.valid ? 'pointer' : null)};
    height: 3.2rem;
    width: 3.2rem;
    color: ${(props) => props.theme.color.darkGrey};
    z-index: 500;
`;
const Label = styled.label`
    position: absolute;
    margin-top: 9rem;
    left: 0.3rem;
    width: 12rem;
    font-size: ${(props) => props.theme.font.smallest};
    @media (max-width: 600px) {
        width: 0;
        overflow: hidden;
    }
`;
