import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';

import Block from './Block';

const ClassExample = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        _getClass(pid);
    }, [pid]);

    useEffect(() => {
        setProducts(globalState.templateClass.data);
    }, [globalState.templateClass.data]);

    const _getClass = async (templateClass) => {
        const result = await globalActions.apiRequests.getTemplateClass(templateClass);

        if (result) {
            globalActions.templateClass.setData(result);
        }
    };

    if (!products) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <ClassExampleWrapper>
            
            <Block products={products} />
        </ClassExampleWrapper>
    );
};

export const ClassExampleWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default ClassExample;
