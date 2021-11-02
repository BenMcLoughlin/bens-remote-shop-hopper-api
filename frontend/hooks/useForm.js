/* eslint-disable */
import React, { useState } from 'react';

export const useForm = (...args) => {
    const data = args.reduce((a, b) => ({ ...a, [b]: b.includes('is') ? false : '' }), {});
    const [formData, setFormData] = useState(data);

    const setEvent = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const setValue = (name, value) => setFormData({ ...formData, [name]: value });

    return [formData, setEvent, setValue];
};
