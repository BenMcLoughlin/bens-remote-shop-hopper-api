import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import { templateClasses } from '../templateClasses';

import EmailCards from './EmailCards';
import ProductBlock from './ProductsBlock';

const ClassExamples = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [classData, setClass] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        _getClass(pid);
    }, [pid]);

    useEffect(() => {
        setClass(globalState.templateClass.data);
    }, [globalState.templateClass.data]);

    const _getClass = async (templateClass) => {
        await globalActions.templateClass.setLoading(true);
        const result = await globalActions.apiRequests.getTemplateClass(templateClass);

        if (result) {
            await globalActions.templateClass.setData(result);
            await globalActions.templateClass.setLoading(false);
        }
    };

    if (!globalState.products.data) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <ClassExampleWrapper>
            <EmailCards pid={pid} />
            <ProductBlock pid={pid} />
        </ClassExampleWrapper>
    );
};

export const ClassExampleWrapper = styled.div`
    // overflow-y: auto;
    // height: 100vh;
`;

export default ClassExamples;
