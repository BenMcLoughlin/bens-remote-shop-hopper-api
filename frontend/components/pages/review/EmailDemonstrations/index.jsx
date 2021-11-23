import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import useGlobal from 'frontend/globalState/store';
import { font } from 'frontend/styles/theme';

import { ClassBlock } from './ClassBlock';

export const EmailDemonstrations = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [globalState, globalActions] = useGlobal();
    const [classData, setClassData] = useState([]);

    useEffect(() => {
        let classList = globalState.templateClass.all;
        setClassData(classList);
    }, []);

    return (
        <EmailDemonstrationsWrapper>
            {classData.map((item) => <ClassBlock key={item.class_name} templateClass={item} />)}
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