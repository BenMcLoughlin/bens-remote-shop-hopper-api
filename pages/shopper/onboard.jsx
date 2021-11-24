import React from 'react';
import styled from 'styled-components';
import { onboardProps } from 'frontend/content/onboardProps';
import { Next, Back, SlideToSide } from 'frontend/components';
import { ProgressBar } from 'frontend/components/layout/ProgressBar.jsx';
import Image from 'next/image';
import { renderComponent } from 'frontend/utils/ui';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

const Onboard = () => {
    const router = useRouter();
    const { user, isLoading } = useUser();

    const { props, globalState, setGlobalState } = onboardProps();

    const { onboardPageNum: num } = globalState.ui;

    const pages = ['location', 'styles', 'brands', 'sizes'];

    let selectedPage = pages[num];
 
    const sendEmail = async () => {
        let userEmail = process.env.NODE === 'development' ? 'dev@shophopper.ca' : user?.name;
        const res = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sendTo: userEmail, template: 'welcome' })
        });
        let data = await res.json();
    };

    const updateProfile = async () => {
        const res = await fetch('/api/updateProfile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(globalState.user)
        });
        let data = await res.json();
    };

    return (
        <Wrapper>
            <ProgressBar progress={num} length={pages.length} />
            <SlideToSide array={pages} position={num}>
                <Content>{renderComponent(selectedPage, { ...props })}</Content>
            </SlideToSide>

            <NextWrapper>
                <Next
                    valid={props[selectedPage].handleErrors()}
                    handleChange={() => {
                        if (num + 1 < pages.length) {
                            setGlobalState({ ui: { onboardPageNum: num + 1 } });
                        } else {
                            router.push('/shopper/welcome');
                            sendEmail();
                            updateProfile();
                        }
                    }}
                />
            </NextWrapper>
            {num > 0 && (
                <BackWrapper>
                    <Back
                        handleChange={() => {
                            setGlobalState({
                                ui: { onboardPageNum: num > 0 ? num - 1 : 0 }
                            });
                        }}
                    />
                </BackWrapper>
            )}
        </Wrapper>
    );
};

export default withPageAuthRequired(Onboard);

// ---------------------------STYLES-------------------------------------------//
const Wrapper = styled.div`
    position: absolute;
    top: 10rem;
    left: 0rem;
    width: 100%;
    height: 80vh;
    z-index: 2;
    opacity: ${(p) => p.theme.opacity};
`;
const Content = styled.div`
    position: absolute;
    height: 100%;
    top: 2rem;
    width: 100%;
`;

const NextWrapper = styled.div`
    height: 10rem;
    position: absolute;
    top: 20%;
    right: 10%;
    z-index: 100;
`;
const BackWrapper = styled.div`
    height: 10rem;
    position: absolute;
    left: 4rem;
    z-index: 100;
`;
