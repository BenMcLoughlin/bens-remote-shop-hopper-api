import React from 'react';

import styled from 'styled-components';

export function getStaticProps(context) {
    return {
        props: {}
    };
}

const EmailManager = () => {
    const mockData = {
        name: 'Ben',
        email: 'Benmcl@shaw.ca'
    };
    const sendEmail = () => {
        fetch('/api/email/sendWelcome', {
            method: 'post',
            body: JSON.stringify(mockData)
        });
    };

    return (
        <Wrapper>
            <button onClick={() => sendEmail()}>Send Email</button>
            EMAIL MANAGER
        </Wrapper>
    );
};

export default EmailManager;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`;