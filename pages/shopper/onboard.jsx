import React from 'react';
import styled from 'styled-components';
import { onboardProps } from 'frontend/content/onboardProps';
import { Next, Back, SlideToSide } from 'frontend/components';
import { ProgressBar } from 'frontend/components/layout/ProgressBar.jsx';
import Image from 'next/image';
import { renderComponent } from 'frontend/utils/ui';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Onboard = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const { props, globalState, setGlobalState } = onboardProps();

    const { onboardPageNum: num } = globalState.ui;

    const pages = ['location', 'styles', 'brands', 'sizes'];

    let selectedPage = pages[num];
    console.log('selectedPage: ', selectedPage);
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
                            router.push('shopper/featured');
                        }
                    }}
                />
            </NextWrapper>
            <BackWrapper>
                <Back
                    handleChange={() =>
                        setGlobalState({
                            ui: { onboardPageNum: num > 0 ? num - 1 : 0 }
                        })
                    }
                />
            </BackWrapper>
        </Wrapper>
    );
};

export default Onboard;

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
    top: 10%;
    right: 10%;
    z-index: 100;
`;
const BackWrapper = styled.div`
    height: 10rem;
    position: absolute;
    top: -5rem;
    left: 4rem;
    z-index: 100;
`;
