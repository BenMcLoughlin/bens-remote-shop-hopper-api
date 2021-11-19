import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { ArrowLeftShort } from '@styled-icons/bootstrap/ArrowLeftShort';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';

import { color, font, mixin } from 'frontend/styles/theme';
import useGlobal from 'frontend/globalState/store';
import loaderGif from 'public/assets/loader/octo_loader.gif';
import { EmailCards } from '../EmailCards';

const propTypes = {
    templateClass: PropTypes.object,
    products: PropTypes.array.isRequired
};

const defaultProps = {
    products: [],
    pid: 'Athletic'
};

export const ClassBlock = ({ templateClass }) => {
    const [globalState, globalActions] = useGlobal();
    const [currentClass, setCurrentClass] = useState([]);

    useEffect(() => {
        _getClass(templateClass.class_name);
    }, []);

    const _getClass = async (name) => {
        const result = await globalActions.apiRequests.getTemplateClass(name);

        if (result) {
            setCurrentClass(result);
        }
    };

    return (
        <>
            <Title>
                {templateClass.class_name}
            </Title>
            <EmailCards pid={templateClass.class_name} items={currentClass.items} />
        </>
    );
};

export const Title = styled.div`
    padding: 13px 0.1rem 17px;
    text-transform: uppercase;
    color: ${color.textMedium};
    ${font.size(`18.5px`)};
`;

ClassBlock.propTypes = propTypes;
ClassBlock.defaultProps = defaultProps;
