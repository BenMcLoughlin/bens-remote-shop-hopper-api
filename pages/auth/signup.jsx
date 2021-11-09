/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { FormText, CheckBox, LoginButton } from 'frontend/components';
import { useSignUpForm } from 'frontend/hooks';
import createUser from 'backend/requests/createUser';
import { getProviders, useSession, signIn } from 'next-auth/react';

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: { providers }
    };
}

const SignUp = (props) => {
    const [fields, setField] = useSignUpForm();
    const { providers } = props;
    const [wantsEmails, setWantsEmails] = useState(false);
    const [errors, setErrors] = useState({});

    const { data: session, status } = useSession();
    const loading = status === 'loading';

    let errorsArray = Object.values(errors);

    const noErrors = errorsArray.length === 4 && errorsArray.every((d) => !d);

    const onSubmit = async (userData) => {
        const result = await createUser(userData);

        if (result.error) {
            return alert(result.error);
        }

        await signIn('credentials', result);
    };
    console.log('fields: ', fields);
    return (
        <Wrapper>
            <Left>
                <ImageWrapper>
                    <Image
                        src={'/../public/assets/onboard/shutterstock/womanInHat.jpg'}
                        width={1200}
                        height={1200}
                        loading="eager"
                    />
                </ImageWrapper>
            </Left>
            <Form method="post">
                <Title>Sign Up</Title>
                <SubTitle>
                    Already have an account?
                    <Link href="/auth/login" style={{ textDecoration: 'none' }}>
                        <LinkText> Login</LinkText>
                    </Link>
                </SubTitle>
                <Inputs>
                    {Object.values(fields).map((field, i) => (
                        <FormText
                            {...field}
                            key={field.label}
                            handleChange={(e) => setField(e)}
                            errors={errors}
                            setErrors={setErrors}
                            fields={fields}
                        />
                    ))}
                </Inputs>
                <CheckBox
                    label={'Sign Up for email updates'}
                    value={wantsEmails}
                    handleChange={(boolean) => setWantsEmails(boolean)}
                    e
                />
                <Buttons>
                    <LoginButton
                        oAuth={'none'}
                        label={'sign Up'}
                        valid={noErrors}
                        handleChange={() => {
                            onSubmit({
                                email: fields.email.value,
                                password: fields.password.value
                            });
                        }}
                    />
                    <Disclaimer>
                        By continuing, you agree to accept our Privacy Policy & Terms of Service.
                    </Disclaimer>
                    <LoginButton
                        oAuth={'facebook'}
                        label={'sign up with facebook'}
                        handleChange={() => signIn(providers.facebook.id)}
                    />
                    <LoginButton
                        oAuth={'google'}
                        label={'sign up with google'}
                        handleChange={() => {
                            console.log('providers.google.id: ', providers.google.id);
                            signIn(providers.google.id);
                        }}
                    />
                </Buttons>
            </Form>
        </Wrapper>
    );
};

export default SignUp;
// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5rem;
`;

const Left = styled.div`
    width: 50%;
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
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: black;
    @media (max-width: 600px) {
        width: 100%;
    }
`;
const Title = styled.div`
    height: 6rem;
    margin-top: -0.5rem;
    font-size: ${(p) => p.theme.font.mediumLarge};
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
    height: 30%;
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
