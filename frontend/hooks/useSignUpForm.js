/* eslint-disable no-var */
import React, { useState } from 'react';

export const useSignUpForm = () => {
    const initialState = {
        name: {
            label: 'name',
            type: 'text',
            value: '',
            handleErrors: (value) => isValid.name(value)
        },
        email: {
            label: 'email',
            type: 'text',
            value: '',
            handleErrors: (value) => isValid.email(value)
        },
        password: {
            label: 'password',
            type: 'password',
            value: '',
            handleErrors: (value) => isValid.password(value)
        },
        confirmPassword: {
            label: 'confirmPassword',
            type: 'password',
            value: '',
            handleErrors: (value, fields) => isValid.confirmPassword(value, fields)
        }
    };

    const [fields, setValue] = useState(initialState);

    const setField = (e) => {
        const { name, value } = e.target;

        setValue({
            ...fields,
            [name]: {
                ...fields[name],
                value
            }
        });
    };

    return [fields, setField];
};

// todo
var isValid = {
    name: function (name) {
        const valid = name.length > 1 && name.length < 15;
        return {
            isError: !valid,
            message: 'Please provide a valid name.'
        };
    },
    email: function (email) {
        const valid = (/\S+@\S+\.\S+/).test(email);
        return {
            isError: !valid,
            message: 'Please provide a valid email address.'
        };
    },
    password: function (password) {
        const valid = password.length > 6 && password.length < 40;
        const isTooShort = password.length < 6;
        return {
            isError: !valid,
            message: `Passwords must be ${isTooShort ? 'more than 6' : 'less than 40'} characters`
        };
    },
    confirmPassword: function (value, fields) {
        const valid = value === fields.password.value;

        return {
            isError: !valid,
            message: 'Passwords provided do not match. '
        };
    }
};
