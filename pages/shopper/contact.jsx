import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Banner, FormText, Image, Paragraph, Button, TextArea } from 'frontend/components';

const Contact = () => {
    const [fields, setField] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});

    return (
        <Wrapper>
            <Banner
                title={'Say Hello'}
                subTitle={'We want to hear from you!'}
                imgSrc={'/../public/assets/banners/clothingOnRack.jpg'}
            />
            <Row>
                <Column>
                    <Paragraph
                        title={'Get In Touch'}
                        align="left"
                        contents={[
                            'Need Help? Questions? Feedback? Random thoughts? We want to hear from you! The best way to contact us is to use our Contact Form here.'
                        ]}
                    />
                    <Image src={'/../public/assets/shutterstock/womanInStripedShirt.jpg'} />
                </Column>
                <Form>
                    {Object.entries(fields).map(([key, value], i) => {
                        console.log('key: ', key);
                        console.log('value: ', value);
                        return (
                            <FormText
                                value={value}
                                key={i}
                                label={key}
                                type={key}
                                handleChange={(e) =>
                                    setField({ ...fields, [e.target.name]: e.target.value })
                                }
                                handleErrors={() => false}
                                errors={false}
                                setErrors={() => false}
                            />
                        );
                    })}
                    <TextArea
                        className="contact"
                        value={message}
                        onChange={(value) => setMessage(value)}
                        minRows={10}
                        label="message"
                    />
                    <Button title="Submit" />
                </Form>
            </Row>
        </Wrapper>
    );
};

Contact.propTypes = {
    arrayOfComponents: PropTypes.array
};

export default Contact;

// ---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
`;
const Row = styled.div`
    width: 80%;
    display: flex;
    gap: 4rem;
    padding: 5rem;
    justify-content: space-between;
    position: relative;
`;
const Column = styled.div`
    width: 80%;
    display: flex;
    gap: 4rem;
    padding: 5rem;
    justify-content: space-between;
    position: relative;
    flex-direction: column;
`;
const Form = styled.div`
    width: 80%;
    display: flex;
    gap: 4rem;
    padding: 5rem;
    justify-content: start;
    position: relative;
    flex-direction: column;
`;
const H1 = styled.div`
    font-size: 3rem;
`;
