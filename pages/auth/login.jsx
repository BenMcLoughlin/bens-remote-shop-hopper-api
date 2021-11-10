/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FormText, CheckBox, LoginButton } from 'frontend/components';
import { useSignUpForm } from 'frontend/hooks';
import Link from 'next/link';
import { getProviders, useSession, signOut, signIn } from 'next-auth/react';

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers }
    };
}

const Login = (props) => {
    const [fields, setField] = useSignUpForm();
    const { providers } = props;
    const [wantsEmails, setWantsEmails] = useState(false);

    const { data: session, status } = useSession();
    const [errors, setErrors] = useState({});

    const loading = status === 'loading';
    let errorsArray = Object.values(errors);
    const noErrors = errorsArray.length === 2 && errorsArray.every((d) => !d);

    return (
        <Wrapper>
            <Left>
                <CalloutText>Find your perfect outfit, locally</CalloutText>
                <ImageWrapper>
                    <Image
                        src={'/../public/assets/onboard/shutterstock/womanInHat.jpg'}
                        width={1400}
                        height={1200}
                        loading="eager"
                    />
                </ImageWrapper>
            </Left>
            <Form>
                <Title>Log In</Title>
                <SubTitle>
                    Don&apos;t have an account?
                    <Link href="/auth/signup" style={{ textDecoration: 'none' }}>
                        <LinkText> Sign Up</LinkText>
                    </Link>
                </SubTitle>
                <Inputs>
                    <FormText
                        {...fields.email}
                        handleChange={(e) => setField(e)}
                        errors={errors}
                        setErrors={setErrors}
                    />
                    <FormText
                        {...fields.password}
                        handleChange={(e) => setField(e)}
                        errors={errors}
                        setErrors={setErrors}
                    />
                </Inputs>
                <Buttons>
                    <LoginButton
                        oAuth={'none'}
                        label={'Sign In'}
                        valid={true}
                        handleChange={() => {
                            signIn('credentials', {
                                email: fields.email.value,
                                password: fields.password.value
                            });
                        }}
                    />
                    <Disclaimer>By continuing, you agree to accept our Privacy Policy & Terms of Service.</Disclaimer>
                    <LoginButton
                        oAuth={'facebook'}
                        label={'sign in with facebook'}
                        handleChange={() => signIn(providers.facebook.id)}
                    />
                    <LoginButton
                        oAuth={'google'}
                        label={'sign in with google'}
                        handleChange={() => signIn(providers.google.id)}
                    />
                </Buttons>
            </Form>
        </Wrapper>
    );
};

export default Login;
// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5rem;
`;

const Left = styled.div`
    width: 60%;
    opacity: 0.7;
    position: relative;
    text-align: center;
    @media (max-width: 600px) {
        position: absolute;
        width: 100%;
        opacity: 0.2;
    }
`;
const ImageWrapper = styled.div`
    position: absolute;
    width: 140%;
    right: 0;
    top: 0;
    opacity: 0.8;
`;
const Form = styled.form`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: black;
    height: 100%;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
const Title = styled.div`
    height: 6rem;
    margin-top: 3rem;
    font-size: ${(p) => p.theme.font.mediumLarge};
`;
const CalloutText = styled.div`
    z-index: 10;
    font-size: ${(p) => p.theme.font.mediumLarge};
    margin-top: 1rem;
    @media (max-width: 600px) {
        opacity: 0;
    }
`;
const SubTitle = styled.div`
    height: 5rem;
    font-size: ${(p) => p.theme.font.small};
    display: flex;
    justify-content: space-around;
    width: 25rem;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20%;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    height: 40%;
`;
const LinkText = styled.div`
    font-weight: 800;
    cursor: pointer;
    text-decoration: underline;
`;

const Disclaimer = styled.div`
    display: flex;
    justify-content: center;
    height: 6rem;
    width: 20rem;
    border-bottom: 1px solid grey;
    position: relative;
    &::after {
        position: absolute;
        content: 'OR';
        width: 3rem;
        height: 3rem;
        bottom: -2rem;
        border-radius: 3px;
        background: ${(p) => p.theme.color.background};
        font-size: ${(p) => p.theme.font.smallMedium};
    }
`;
