import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Button } from 'frontend/components';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import { templateClasses } from '../templateClasses';

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
        // const result = await globalActions.apiRequests.getTemplateClass(templateClass);
        const result = await globalActions.apiRequests.checkTemplateClasses();

        if (result) {
            // globalActions.templateClass.setData(result);
        }
    };

    const _resetClasses = async (templateClass) => {
        // const result = await globalActions.apiRequests.getTemplateClass(templateClass);
        const result = await globalActions.apiRequests.resetTemplateClasses(templateClasses);
    };

    if (!products) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <ClassExampleWrapper>
            <Button
                title={'Reset Classes'}
                onClick={_resetClasses}
            />
            
            <Block products={products} />
        </ClassExampleWrapper>
    );
};

export const ClassExampleWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

export default ClassExample;
