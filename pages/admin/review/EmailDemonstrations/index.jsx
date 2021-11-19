import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import { color, font, mixin } from 'frontend/styles/theme';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import { templateClasses } from '../templateClasses';

import { ClassBlock } from './ClassBlock';

export const EmailDemonstrations = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [loading, setLoading] = useState(false);
    const [classData, setClass] = useState([]);
    const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     _getClass(pid);
    // }, [pid]);

    // useEffect(() => {
    //     setClass(globalState.templateClass.data);
    // }, [globalState.templateClass.data]);

    // const _getClass = async (templateClass) => {
    //     const result = await globalActions.apiRequests.getTemplateClass(templateClass);

    //     if (result) {
    //         await globalActions.templateClass.setData(result);
    //     }
    // };

    // if (!globalState.products.data) {
    //     return <Image src={loaderGif} className="loading" width={800} height={600} />;
    // }

    return (
        <EmailDemonstrationsWrapper>
            {
                templateClasses.map((item) => <ClassBlock key={item.class_name} templateClass={item} />)
            }
        </EmailDemonstrationsWrapper>
    );
};

export const EmailDemonstrationsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.div`
    padding: 13px 0.1rem 17px;
    width: 100%;
    ${font.size(`18.5px`)};
`;