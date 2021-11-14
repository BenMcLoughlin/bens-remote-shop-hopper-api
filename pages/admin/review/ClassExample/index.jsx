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
    const [unSubmitted, setUnSubmitted] = useState(false);
    const [classData, setClass] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        _getClass(pid);
    }, [pid]);

    useEffect(() => {
        setClass(globalState.templateClass.data);
    }, [globalState.templateClass.data]);

    const _getClass = async (templateClass) => {
        const result = await globalActions.apiRequests.getTemplateClass(templateClass);

        if (result) {
            globalActions.templateClass.setData(result);
        }
    };

    const _checkClasses = async () => {
        const result = await globalActions.apiRequests.checkTemplateClasses();

        if (result) {
            return setUnSubmitted(result);
        }

        _resetClasses();
    };

    const _resetClasses = async () => {
        const success = await globalActions.apiRequests.resetTemplateClasses(templateClasses);

        if (success) {
            setUnSubmitted(false);
        }
    };

    if (!globalState.products.data) {
        return <Image src={loaderGif} className="loading" width={800} height={600} />;
    }

    return (
        <ClassExampleWrapper>
            {
                unSubmitted ?
                    <>
                        {unSubmitted?.map((item) => (
                            <Text key={item.class_name}>
                                {item.class_name} <span style={{ color: 'black' }}>has not been submitted yet</span>
                            </Text>
                        ))}
                        <Button
                            title={'Reset Anyway'}
                            onClick={_resetClasses}
                        />
                    </>
                    :
                    <Button
                        title={'Reset Classes'}
                        onClick={_checkClasses}
                    />
            }
            
            <Block products={globalState.products.data} />
        </ClassExampleWrapper>
    );
};

export const ClassExampleWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`;

const Text = styled.div`
    color: red;
    font-size: 14px;
`;

export default ClassExample;
