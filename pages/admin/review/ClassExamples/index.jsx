import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';

import { EmailCards } from '../EmailCards';
import { ProductsBlock } from './ProductsBlock';

export const ClassExamples = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [currentClass, setCurrentClass] = useState([]);

    useEffect(() => {
        _getClass(pid);
    }, [pid]);

    const _getClass = async (name) => {
        const result = await globalActions.apiRequests.getTemplateClass(name);

        if (result) {
            setCurrentClass(result);
        }
    };

    return (
        <>
            <EmailCards pid={pid} items={currentClass.items} />
            <ProductsBlock pid={pid} />
        </>
    );
};
